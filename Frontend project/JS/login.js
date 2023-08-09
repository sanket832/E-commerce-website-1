

        function validateLogin(){
    const uname=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    const unameError=document.getElementById("unameerror");
    const passError=document.getElementById("passerror");

    unameError.textContent='';
    passError.textContent=''


    if(uname!=="sanket_123"||pass!=="sanket@456"){
        if(uname!=="sanket_123"){
            unameError.innerHTML="Invalid Username";
            unameError.style.color="red";
           unameError.style.marginTop="10px"
        }
        if(uname.trim()===""){
            unameError.innerHTML="Please enter Username";
            unameError.style.color="red";
           unameError.style.marginTop="10px"
        }
       
        
        if(pass!=="sanket@456"){
            passError.innerHTML="Invalid Password";
            passError.style.color="red";
           passError.style.marginTop="10px"
        }
        if(pass.trim()===""){
            passError.innerHTML="Please enter Password";
            passError.style.color="red";
           passError.style.marginTop="10px"
        }
       
        return false
    }else{
        alert("Login Successfull! welcome, "+ uname + ".")
        return true;
    }
}
