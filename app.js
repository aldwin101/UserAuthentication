let button = document.getElementById('bttn')


function logIn(){
    axios.request(
        {
            method:"POST",
            url:"https://reqres.in/api/login",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                email: userEmail.value,
                password: userPassword.value
            }
        }).then(success).catch(failure);
}

function success(){
    window.open('home.html', '_blank');
}


function failure(){
    document.getElementById('message').innerText = "Email or password is incorrect.";
}

button.addEventListener('click', logIn);