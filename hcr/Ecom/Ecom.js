document.getElementById("loginform").addEventListener('submit',(event)=>{
    event.preventDefault()
   const email = document.getElementById("email").value
   const pass = document.getElementById("pass").value
// console.log(email);
// console.log(pass);
if(email=="" && pass== ""){
    alert('please enter your details')
}
else{
    if(email=="aayushi@gmail.com"){
        if(pass=='1234'){
            window.location.href="dash.html"
        }else{
            alert("invalid password please enter your correct email")
        }
    }else{
        alert("invalid mail please enter your correct mail")
    }
}


})
  

