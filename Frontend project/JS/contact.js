function validateContact(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("address").value;

    if(name.trim()===''&&email.trim()===''&&message.trim()===''){
      alert("please Fill The Fields")
      return false
    }else{
      alert("Form Submit Successfully! Welcome, "+ name + ".")
      return true
    }
    }