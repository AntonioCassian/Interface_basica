
function abrir(modalId){
    const abrirCad = document.getElementById(modalId);
    abrirCad.classList.add('abrir');
    abrirCad.addEventListener('click', (e) => {
        if(e.target.id == modalId || e.target.id == 'cd-fecha-modal'){
            abrirCad.classList.remove('abrir');
        }
    });
}            
const button = document.querySelector('.sombra .but');
button.addEventListener('click', () => abrir('modal-cadastro'));


function valid(){
    //Email:
        var isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var cadEmail = document.getElementById('emailCad');
               var email = cadEmail.value;
               var wrapperEmail = document.getElementById('emailCadas');

               if(isEmail.test(email)){
                   wrapperEmail.querySelector('span').classList.add('sucess');
                   wrapperEmail.querySelector('span').innerText = "Email Validado Com Sucesso!";
                } else {
                    wrapperEmail.querySelector('span').classList.add('error');
                    wrapperEmail.querySelector('span').innerText = "Email Invalido!";
                    
                }

    //Senha:
    var senhaCad = document.getElementById('senhaCad');
    var senhaConfirm = document.getElementById('confirmCad');
    var wrapperSenha = document.getElementById('pai-senha');

    var senha = senhaCad.value;
    var confirmar = senhaConfirm.value;

    if(senha === '' || confirmar.length <= 5){
      wrapperSenha.querySelector('span').classList.add('error');
      wrapperSenha.querySelector('span').innerText ='Preencha o campo com uma senha com mais de 5 caracteres!';
      senhaCad.Senha.focus();
      const button = document.querySelector('.sombra .but');
      return false;
    }
    if(senha != confirmar){
        wrapperSenha.querySelector('span').classList.add('error');
        wrapperSenha.querySelector('span').innerText ='A senha não está compativel!';
        senhaCad.Senha.focus();
        return false;
    }
}
   