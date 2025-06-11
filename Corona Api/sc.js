
    async function fetchGlobalData() {
      const res = await fetch('https://disease.sh/v3/covid-19/all');
      const data = await res.json();

      document.getElementById('global-stats').innerHTML = `
        <div class="col-md-4 mb-3">
          <div class="card text-bg-warning h-100">
            <div class="card-body text-center">
              <h5 style="color: white;">Total Cases</h5>
              <h3 style="color: white;">${data.cases.toLocaleString()}</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card text-bg-success h-100">
            <div class="card-body text-center">
              <h5>Total Recovered</h5>
              <h3>${data.recovered.toLocaleString()}</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card text-bg-danger h-100">
            <div class="card-body text-center">
              <h5>Total Deaths</h5>
              <h3>${data.deaths.toLocaleString()}</h3>
            </div>
          </div>
        </div>
      `;
    }

    async function fetchCountryData(country) {
      const container = document.getElementById('country-result');
      container.innerHTML = `<div class="text-center my-4"><div class="spinner-border" role="status"></div></div>`;
      try {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
        if (!res.ok) throw new Error('Country not found');
        const data = await res.json();

        container.innerHTML = `
          <div class="col-md-10">
            <div class="card shadow">
              <div class="card-header d-flex justify-content-between align-items-center bg-primary text-white">
                <h5 class="mb-0">${data.country} - COVID-19 Stats</h5>
                <img src="${data.countryInfo.flag}" class="flag-img" alt="${data.country} Flag">
              </div>
              <div class="card-body p-0">
                <table class="table table-striped mb-0">
                  <tbody>
                    <tr><th scope="row">Total Cases</th><td>${data.cases.toLocaleString()}</td></tr>
                    <tr><th scope="row">Active Cases</th><td>${data.active.toLocaleString()}</td></tr>
                    <tr><th scope="row">Recovered</th><td>${data.recovered.toLocaleString()}</td></tr>
                    <tr><th scope="row">Deaths</th><td>${data.deaths.toLocaleString()}</td></tr>
                    <tr><th scope="row">Tests Conducted</th><td>${data.tests.toLocaleString()}</td></tr>
                    <tr><th scope="row">Population</th><td>${data.population.toLocaleString()}</td></tr>
                    <tr><th scope="row">Today's Cases</th><td>${data.todayCases.toLocaleString()}</td></tr>
                    <tr><th scope="row">Today's Deaths</th><td>${data.todayDeaths.toLocaleString()}</td></tr>
                    <tr><th scope="row">Today's Recovered</th><td>${data.todayRecovered.toLocaleString()}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `;
      } catch (err) {
        container.innerHTML = `<div class="alert alert-danger text-center w-100">⚠️ ${err.message}</div>`;
      }
    }

    document.getElementById('search-button').addEventListener('click', () => {
      const country = document.getElementById('search-input').value.trim();
      if (country) fetchCountryData(country);
    });

    // Fetch global data on page load
    fetchGlobalData();