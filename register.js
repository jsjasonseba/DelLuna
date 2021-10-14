

let submit = document.getElementById("submit");

submit.addEventListener('click', function(e){
    let error = false;
    let username = document.querySelector("#username").value;
    let errorUser = document.querySelector("#errorUsername");
    if(username.length <= 5){
        errorUser.style.color = 'red';
        errorUser.textContent = 'Username must be more than 5 characters';
        error = true
    }
    else{
        errorUser.textContent = '';
    }

    let password = document.querySelector("#password").value;
    let errorPassword = document.querySelector("#errorPassword");
    if(password.length <= 8){
        errorPassword.style.color = 'red';
        errorPassword.textContent = 'Password must be more than 8 characters';
        error = true
    }
    else if(password.includes('0') === false && password.includes('1')  === false && password.includes('2')  === false&& password.includes('3')  === false&& password.includes('4') === false
    && password.includes('9') === false && password.includes('8')  === false && password.includes('7')  === false&& password.includes('6')  === false&& password.includes('5') === false){   
        errorPassword.style.color = 'red';
        errorPassword.textContent = 'Password must contain number';
        error = true
    }
    else{
        errorPassword.textContent = '';
    }

    let confirmPassword = document.querySelector("#confirmPassword").value;
    let errorConfirmPassword = document.querySelector("#errorConfirmPassword");
    if(password !== confirmPassword){
        errorConfirmPassword.style.color = 'red';
        errorConfirmPassword.textContent = 'Confirmed password is not the same';
        error = true;
    }
    else{
        errorConfirmPassword.textContent = '';
    }

    let fullName = document.querySelector("#fullName").value;
    let errorFullName = document.querySelector("#errorFullName");
    if(fullName.length === 0){
        errorFullName.style.color = 'red';
        errorFullName.textContent = 'Name must be filled';
        error = true;
    }
    else if(fullName.includes('0') === true || fullName.includes('1')  === true || fullName.includes('2')  === true|| fullName.includes('3')  === true|| fullName.includes('4') === true
    || fullName.includes('9') === true || fullName.includes('8')  === true || fullName.includes('7')  === true|| fullName.includes('6')  === true|| fullName.includes('5') === true){    
        errorFullName.style.color = 'red';
        errorFullName.textContent = 'Name must not contain number';
        error = true;
    }
    else{
        errorFullName.textContent = '';
    }

    let male = document.querySelector("#male").checked;
    let female = document.querySelector("#female").checked;
    let errorGender = document.querySelector("#errorGender");
    if(female === false && male === false){
        errorGender.style.color = 'red';
        errorGender.textContent = 'Gender must be picked';
        error = true;
    } 
    else{
        errorGender.textContent = '';
    }

    let email = document.querySelector("#email").value;
    let errorEmail = document.querySelector("#errorEmail");
    if(email.length === 0){
        errorEmail.style.color = 'red';
        errorEmail.textContent = 'Email must be filled';
        error = true;
    }
    if(email.includes('@') === false || (email.endsWith('.com') === false && email.endsWith('.co.id') === false) ||
        email.indexOf('@') === email.indexOf('.co')-1 || email.charAt(0) === '@'){
        errorEmail.style.color = 'red';
        errorEmail.textContent = 'Email is not valid';
        error = true
    }
    else{
        errorEmail.textContent = '';
    }

    let age = document.querySelector("#age").value;
    let errorAge = document.querySelector("#errorAge");
    if(age.length === 0){
        errorAge.style.color = 'red';
        errorAge.textContent = 'Age must be filled';
        error = true;
    }
    else if(parseInt(age) < 18){
        errorAge.style.color = 'red';
        errorAge.textContent = 'Age must be 18+';
        error = true
    }
    else{
        errorAge.textContent = '';
    }

    let agree = document.querySelector("#agree").checked;
    let errorAgree = document.querySelector("#errorAgree");
    if(agree === false){
        errorAgree.style.color = 'red';
        errorAgree.textContent = 'You must agree with terms and conditions';
        error = true
    }
    else{
        errorAgree.textContent = '';
    }

    if(error === false){
        alert("Registration Success");
    }
    
})