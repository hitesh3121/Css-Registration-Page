const button = document.getElementById('demo');
// button.addEventListener('click', (e)=>{
//     console.log(button.className) 
//     if ( button.className === 'registerbtn' ) {
//         button.classList.remove('registerbtn')
//         button.classList.add('activebtn')
//         button.innerHTML = 'Success'
//     }
//     else{
//         button.classList.remove('activebtn')
//         button.classList.add('registerbtn')
//         button.innerHTML = 'Register'

    // }
    
            // button.classList.toggle('active');
            // button.innerHTML = 'Success'
        
// })

function validate(){
    let password = document.getElementById('psw').value;
    let confirm_password = document.getElementById('confirm_psw').value;
    if (password != confirm_password){
        alert("Passwords don't Match.")
        return false;
    }
    return true;
}
button.addEventListener('click',e => {
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('psw');
    let confirm_password = document.getElementById('confirm_psw');
    let form = document.getElementById('form');

    if (password.value != confirm_password.value){
        alert("Passwords don't Match.")
        return false;
    }
    else{
        console.log({
            name : name.value, 
            email : email.value,
            password : password.value,
            
        })
       name.value='';
       email.value='';
       password.value='';
       confirm_password.value='';
       form.value='';
    }
})