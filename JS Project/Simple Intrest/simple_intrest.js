function add() {
    let no1 = Number(document.getElementById("num1").value);
    let no2 = Number(document.getElementById("num2").value);
    let no3 = Number(document.getElementById("num3").value);
    let no = document.getElementById("no");
    let j = (no1 * no2 * no3)/100;
    let s=j+no1;
    console.log(j);
    no.innerText=`After ${no3}years,your investment will be worth  ${s} with simple interest`
    // no.innerText=j;
  
   
}
