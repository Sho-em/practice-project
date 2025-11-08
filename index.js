const passField = document.getElementById('passField');
const passField2 = document.getElementById('passField2');
const eyeIcon = document.getElementById('eyeIcon');
const eyeIcon2 = document.getElementById('eyeIcon2');
const emailField = document.getElementById('emailField');
const updateBtn = document.getElementById('updateBtn');
const nameField = document.getElementById('nameField');
const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorPass2 = document.getElementById('errorPass2');
const outerBox = document.getElementById('outerBox');
const insideBox = document.getElementById('insideBox');
const errorPass = document.getElementById('errorPass'); 
const audioSound = document.getElementById('audioSound');



eyeIcon.addEventListener('click', function(){
    const type = passField.type === 'password' ? 'text' : 'password';
    passField.type = type;
});


eyeIcon2.addEventListener('click', function(){
    const type = passField2.type === 'password' ? 'text' : 'password';
    passField2.type = type;
});


nameField.addEventListener('input', function(){
    if(this.value.length > 12){
        errorName.textContent = "please enter valid name";
        errorName.classList.add('show');
        this.classList.add('error');
    }
    else{
        errorName.classList.remove('show');
        this.classList.remove('error');
    }

});

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

emailField.addEventListener('input', function(){
    if(this.value.length > 0 && !validateEmail(this.value)){
    errorEmail.textContent = "Please enter valid email";
    errorEmail.classList.add('show');
    this.classList.add('error');
    }
    else{
        errorEmail.classList.remove('show');
        this.classList.remove('error');
    }
});

passField.addEventListener('input', function(){
    if( passField.value.length > 6){
        errorPass.textContent = "Password should be 6 characters only";
        errorPass.classList.add('show');
        this.classList.add('error');        
    }
    else{
        errorPass.classList.remove('show');
        this.classList.remove('error');
    }
});

passField2.addEventListener('input', function(){
    if(passField2 > 0 || passField.value !== passField2.value){
        errorPass2.textContent = "Password doesn't match";
        errorPass2.classList.add('show');
        this.classList.add('error');        
    }
    else{
        errorPass2.classList.remove('show');
        this.classList.remove('error');
    }
});

function updateProfile(){
    let isValid = true;

    if(!nameField.value){
        errorName.textContent = "Name required";
        errorName.classList.add('show');
        this.classList.add('error')
        isValid = false;
    }

    if(!emailField.value){
        errorEmail.textContent = "Email required";
        errorEmail.classList.add('show');
        this.classList.add('error')
        isValid = false;
    }
    
    else if(!validateEmail(emailField.value)){
        errorEmail.textContent = "Please enter valid email";
        errorEmail.classList.add('show');
        this.classList.add('error')
        isValid = false;
    }

    if(!passField.value){
        errorPass.textContent = "Password required";
        errorPass.classList.add('show');
        this.classList.add('error')
        isValid = false;
    }

    if(passField.value !== passField2.value){
        errorPass2.textContent = "Password Doesnt Match";
        errorPass2.classList.add('show');
        this.classList.add('error')
        isValid = false;
    }

    if(isValid){

        showToast("Profile Updated successfully");
        nameField.value = "";
        emailField.value = "";
        passField.value = "";
        passField2.value = "";
        
        audioSound.play()
        .then(() =>{
            console.log("success");
        })
        .catch((error) => {
            console.error(error);
        });
    }
    function showToast(message){
        let toast = document.getElementById('toast');

        if(!toast){
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast'
            insideBox.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add('show'); 

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

}



