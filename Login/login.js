
function logarbotao() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const bd =  JSON.parse(localStorage.getItem(KEY_BD));

    for(let i=0;i<bd.usuarios.length;i++){
        if(bd.usuarios[i].email === email && bd.usuarios[i].senha === senha) {
            window.location.href = "/Gerenciador/index.html"
            return true
        } else {
            alert("Email ou senha invalidos") 
        }
    }  
}