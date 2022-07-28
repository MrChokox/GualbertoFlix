const form = document.getElementById('formLogin');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

form.addEventListener("submit",(e) => {
    e.preventDefault();

    validaInputs();
});

function validaInputs(){
    var valorEmail = email.value;
    var valorSenha = senha.value;

    if(valorEmail === ''){
        setError(email);
    }else{
        setSucess(email);
    }
    if(valorSenha === ''){
        setError(senha);
    }else{
        setSucess(senha);
    }
}

function setError(input){
    input.className = "form-control is-invalid";
}

function setSucess(input){
    input.className = "form-control is-valid";
}