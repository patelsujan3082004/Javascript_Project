function calculateBill() {
    let units= Number(document.getElementById('units').value);
    let ans= document.getElementById('result');

    let baseAmount=0;
    let subcharge=0;
    let totalAmount=0;


    if(units<=50){
        baseAmount= units*1;
    }
    else if(units<=150){
        baseAmount= (50*1) + ((units - 50)*2)
    }
    else if(units<=250){
        baseAmount= (50*1) + (100*2) + ((units-150)*3)
    }
    else{
        baseAmount= (50*1) + (100*2) + (100*3) + ((units-250)*4)
    }

    if (units>150){
        subcharge=baseAmount*0.20;
    }

     totalAmount= baseAmount+subcharge;

    
    if(units <= 0 || isNaN(units)) {
        ans.innerHTML = "Please enter valid units";
    }
    else {
        ans.innerHTML = `
            Units Consumed: ${units} <br>
            Base Amount: ₹${baseAmount.toFixed(2)} <br>
            Subcharge Amount: ₹${subcharge.toFixed(2)} <br>
            Total Amount: ₹${totalAmount.toFixed(2)}
        `;
    }



}