const name=document.getElementById("Name");
const email=document.getElementById("eAddress");
const password=document.getElementById("password");
const btn=document.getElementById("submit").addEventListener("click",(event)=>{
    event.preventDefault();

    for(i=0;i<name.value.length;i++){
        if(name.value[i]>=0 || name.value[i]<0){
            console.log("name must be text");
            break;

    }
   
    }
    if(password.value.length<8){
        console.log("password must contai at least 8 character")
    }

    
    var counter=0;
    for(i=0;i<email.value.length;i++){
        if(email.value[i]=="@" || email.value[i]=="."){
            counter++
        }

    }
    if(counter!=2){
        console.log("Invalid Email");
    }
    
});



