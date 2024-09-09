

let data = document.getElementById("send");
let x=document.getElementById("alert");
data.addEventListener( "click",function (e) {
    let birth = document.getElementById("birth").value;
    let current = document.getElementById("now").value;
    if (birth==""||current==""){
    setTimeout(()=>{console.log("YES");},3000);
    x.style.cssText="display:block;text-align: center; !important;background-color: rgb(52, 120, 215); height:50px";
    document.getElementById("result").textContent="Enter Right Date";
    let y=document.getElementById("close");
    console.log(x);
    x.style.cssText="display:block;text-align: center; !important;background-color: rgb(52, 120, 215); height:50px";
    y.addEventListener("click",()=>{
        console.log("YES2");
        x.style.cssText="display:none";
    })
}
else{
    let bage = new Date(birth);
    let cage = new Date(current);
    let currentYear = Math.abs(bage.getFullYear() - cage.getFullYear());
    let currentMonth= Math.abs(bage.getMonth()-cage.getMonth());
    let currentDay=Math.abs(bage.getDate()-cage.getDate());
    let temp=document.getElementById("result");
    // temp.document.sty
    temp.textContent=`You have ${currentYear} Year/s , ${currentMonth} Month /s and ${currentDay} Day/s`;
}
e.preventDefault();
});