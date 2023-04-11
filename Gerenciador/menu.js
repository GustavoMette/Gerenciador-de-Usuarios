const KEY_BD = '@usuariosestudo'


let listaRegistros = {
    ultimoIdGerado:0,
    usuarios:[]
}


let FILTRO = ''


function graletBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros) )
}

function lerBD(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        listaRegistros = JSON.parse(data)
    }
    desenhar()
}


function pesquisar(value){
    FILTRO = value;
    desenhar()
}


function desenhar(){
    const tbody = document.getElementById('listaRegistrosBody')
    if(tbody){
        let data = listaRegistros.usuarios;
        if(FILTRO.trim()){
            const expReg = eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data = data.filter( usuario => {
                return expReg.test( usuario.nome ) || expReg.test( usuario.email ) || expReg.test( usuario.senha) || expReg.test( usuario.idade ) || expReg.test( usuario.alcada)
            } )
        }
        data = data
            .sort( (a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map( usuario => {
                return `<tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.senha}</td>
                        <td>${usuario.idade}</td>
                        <td>${usuario.alcada}</td>
                        <td>
                            <button onclick='vizualizar("cadastro",false,${usuario.id})'>Editar</button>
                            <button class='vermelho' onclick='perguntarSeDeleta(${usuario.id})'>Deletar</button>
                        </td>
                    </tr>`
            } )
        tbody.innerHTML = data.join('')
    }
}

function insertUsuario(nome, email, senha, idade, alcada){
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id, nome, email, senha, idade, alcada
    })
    graletBD()
    desenhar()
    vizualizar('lista')
}

function editUsuario(id, nome, email, senha, idade, alcada){
    let usuario = listaRegistros.usuarios.find( usuario => usuario.id == id )
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    usuario.idade = idade;
    usuario.alcada = alcada;
    graletBD()
    desenhar()
    vizualizar('lista')
}

function deleteUsuario(id){
    listaRegistros.usuarios = listaRegistros.usuarios.filter( usuario => {
        return usuario.id != id
    } )
    graletBD()
    desenhar()
}

function perguntarSeDeleta(id){
    if(confirm('Quer deletar o registro de id '+id)){
        deleteUsuario(id)
    }
}


function limparEdicao(){
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('senha').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('alcada').value = ''
}

function vizualizar(pagina, novo=false, id=null){
    document.body.setAttribute('page',pagina)
    if(pagina === 'cadastro'){
        if(novo) limparEdicao()
        if(id){
            const usuario = listaRegistros.usuarios.find( usuario => usuario.id == id )
            if(usuario){
                document.getElementById('id').value = usuario.id
                document.getElementById('nome').value = usuario.nome
                document.getElementById('email').value = usuario.email
                document.getElementById('senha').value = usuario.senha
                document.getElementById('idade').value = usuario.idade
                document.getElementById('alcada').value = usuario.alcada
            }
        }
        document.getElementById('nome').focus()
    }
}



function submeter(e){
    
    const data = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        idade: document.getElementById('idade').value,
        alcada: document.getElementById('alcada').value,
    }
    if(data.id){
        editUsuario(data.id, data.nome, data.email, data.senha, data.senha, data.idade, data.alcada)
    }else{
        insertUsuario( data.nome, data.email, data.senha, data.idade, data.alcada )
    }
}


window.addEventListener('load', () => {
    lerBD()
    document.getElementById('cadastroRegistro').addEventListener('submit', submeter)
    document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })

})