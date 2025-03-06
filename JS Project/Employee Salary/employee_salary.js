function calculateSalary(){

    let dailysalary= Number (document.getElementById('dailysalary').value);
    let workday= Number(document.getElementById('workday').value);

    let totalSalary=dailysalary*workday;
    let ans=document.getElementById('result');
    ans.innerHTML=totalSalary;
    return false;

}