const btn = document.getElementById("submit");
const name = document.getElementById("fname");
const form = document.getElementById("frm");
const mname=document.getElementById("Mname");
const lname=document.getElementById("Lname");
const date=document.getElementById("dob");
const age=document.getElementById("age");
const cname=document.getElementById("cname");
const caddress=document.getElementById("caddress");
const cdob=document.getElementById("cdob");
const cphone= document.getElementById("cphone");


form.addEventListener("click", (event) => {
  event.preventDefault();
});
btn.addEventListener("click", () => {
//   console.log("hello");
  checkNumber("First Name", name.value);
  checkNumber("Middle Name",mname.value);
  checkNumber("Last Name",lname.value);
//   console.log(date.value);
sendDate(date.value);
// cname1.innerText="Binaya";
// cvheading.innerHTML("Hello")
form.style.display="none";
document.getElementById("cVitae").style.display="block";
document.getElementById("cvtopic").innerHTML="Curriculm Vitae of "+ name.value;
cname.innerHTML="Name: "+fname.value +" "+ lname.value;


});

function checkNumber(nam,elemId) {
  let len = elemId;
  for(let i=0;i<len.length;i++){
    if(len[i]>0 || len[i]<0){
        console.log(nam+" "+" cannot be Numeric");
        break;
    }
  }
}

function sendDate(date){
    let pdate=date;
    for(let i=0;i<pdate.length;i++){
        console.log(padate[i]);
    }

}
