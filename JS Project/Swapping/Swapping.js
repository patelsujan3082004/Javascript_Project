function swapNumbers(){
    let num1=Number(document.getElementById('num1').value);
    let num2=Number(document.getElementById('num2').value);

    let temp=num1;
    let swappedNum1=num2;
    let swappedNum2=temp;

    let ans=document.getElementById('result');
    ans.innerHTML=`Before Swapping: ${num1} and ${num2} <br> After Swapping: ${swappedNum1} and ${swappedNum2}`;
}