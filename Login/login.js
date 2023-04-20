console.log(123)
let usuarioCadastrado = {
    usuarios:[]
}


let FILTRO = ''


function graletBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(usuarioCadastrado) )
}

function lerBD(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        listaRegistros = JSON.parse(data)
    }
}

function logar(){

    var login = document.getElementById(data.login).value;
    var senha = document.getElementById(data.senha).value;

    if(login == data.login && senha == data.senha){
        alert('Sucesso');
      window.location.href = "home.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
    

}