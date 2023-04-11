# Gerenciador-de-Usuarios

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const idade = document.querySelector('#idade')
const alcadas = document.querySelector('#alcadas')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    nome.value = itens[index].nome
    email.value = itens[index].senha
    senha.value = itens[index].senha
    idade.value = itens[index].idade
    alcadas.value = itens[index].alcadas
    id = index
  } else {
    nome.value = ''
    emailfunction openModal(edit = false, index = 0) {
  modal.classList.add('active')
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

}.value = ''
    idade.value = ''
    alcadas.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>${item.senha}</td>
    <td>${item.idade}</td>
    <td>${item.alcadas}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (nome.value == '' || email.value == '' || senha.value == ''|| idade.value == '' || alcadas.value == '') {
    return
  }

  e.preventDefault();
  itens
  if (id !== undefined) {
    itens[id].nome = nome.value
    itens[id].email = email.value
    itens[id].senha = senha.value
    itens[id].idade = idade.value
    itens[id].alcadas = alcadas.value
  } else {
    itens.push({'nome': nome.value, 'email': email.value, 'senha': senha.value, 'idade': idade.value, 'alcadas': alcadas.value})
  }


  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()







-----------------------------------------------------------------------------------------------------------------------------------------



<button onclick="openModal()" id="modal">Incluir</button>
    <dialog class="modal-teste">
      <div class="divTable">
        <div class="modal-container">
          <div class="modal">
            <form>
              <label for="nome">Nome</label>
              <input id="nome" type="text" required/>
              
              <label for="email">Email</label>
              <input id="email" type="modal.classList.add('active')email" required />
    
              <label for="senha">Senha</label>
              <input id="senha" type="password" required/>
    
              <label for="idade">Idade</label>
              <input id="idade" type="number" required/>
    
              <label for="alcadas">Alçadas</label>
              <select id="alcadas" name="Alçada" required>
                <option value="Diretor">Presidente</option>
                <option value="Gerente">Gerente</option>
                <option value="Funcionario">Secretário</option>
              </select>
              <button id="btnSalvar">Salvar</button>
            </form>
          </div>
        </div>
    </dialog>
  
    <div class="divTable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Idade</th>
            <th>Alçada</th>
            <th class="acao">Editar</th>
            <th class="acao">Excluir</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
        </dialog>
      </table>
    </div>

    <ul id="user-list">

    </ul>
