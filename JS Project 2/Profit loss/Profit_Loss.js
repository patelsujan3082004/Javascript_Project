function calculate(){
    let Cprice= Number(document.getElementById('Cprice').value);
    let Sprice= Number(document.getElementById('Sprice').value);
    let profit= Sprice-Cprice;
    let loss= Cprice-Sprice;
    let ans=document.getElementById('result');

    if(Sprice>Cprice){
        ans.innerHTML=`Your total profit is Rs ${profit}`
    }
    else if(Cprice>Sprice){
        ans.innerHTML=`Your total loss is Rs ${loss}`
    }
    else{
        ans.innerHTML=`No profit no loss`
    }

    
}