//Cadastro

var profissional = []
var profissionalLogin = []
// var login = []

var categoria = document.getElementById("categoria")
var nome = document.getElementById("nome")
var email = document.getElementById("email")
var telefone = document.getElementById("telefone")
var regiao = document.getElementById("regiao")
var exp = document.getElementById("experiencia")
var senha = document.getElementById("senha")

function Profissional(categoria, nome, email, telefone, regiao, exp, senha){
  this.categoria = categoria
  this.nome = nome
  this.email = email
  this.telefone = telefone
  this.regiao = regiao
  this.exp = exp
  this.senha = senha
}
/*
function Login(email, senha){
  this.email = email
  this.senha = senha
}
*/
function cadastrar(){
  profissional = JSON.parse(localStorage.getItem("Profissional"))
  if (profissional == null){
      profissional = []
      add = new Profissional (categoria.value, nome.value, email.value, telefone.value, 
       regiao.value, exp.value, senha.value)
      profissional.push(add)
      localStorage.setItem("Profissional", JSON.stringify(profissional))
      alert ("Seu cadastro foi efetuado com sucesso")
  } else{
    add = new Profissional (categoria.value, nome.value, email.value, telefone.value, 
      regiao.value, exp.value, senha.value)
      profissional.push(add)
      localStorage.setItem("Profissional", JSON.stringify(profissional))
      alert ("Seu cadastro foi efetuado com sucesso")
  }
  window.location = "index.html"
  // cadastrarLogin()
}
/*
function cadastrarLogin(){  
  login = JSON.parse(localStorage.getItem("Login"))
  if (login == null){
    login = []
    add = new Login (email.value, senha.value)
    login.push(add)
    localStorage.setItem("Login", JSON.stringify(login))
  } else{
    add = new Login (email.value, senha.value)
    login.push(add)
    localStorage.setItem("Login", JSON.stringify(login))
  }

  window.location = "index.html"
}*/

function valida(){
  if(validaCategoria() == true &&
    validaNome() == true &&
    validaEmail() == true &&
    validaTelefone() == true &&
    validaRegiao() == true &&
    validaSenha() == true) {
      cadastrar()
  }
}

function validaCategoria(){
  if(categoria.value == 0){
    alert("Qual a sua categoria?")
  } else {
    return true
  }
}

function validaNome(){
  if(nome.value == ""){
    alert("Digite o seu nome!")
  } else {
    return true
  }
}

function validaEmail(){
  if(email.value == ""){
    alert("Digite o seu email!")
  } else {
    return true
  }
}

function validaTelefone(){
  if(telefone.value == ""){
    alert("Digite o seu número!")
  } else {
    return true
  }
}

function validaRegiao(){
  if(regiao.value == 0){
    alert("Qual a sua região?")
  } else {
    return true
  }
}

function validaSenha(){
  if(senha.value == "" ||
    senha.value == ""){
      alert("Digite sua senha!")
    } else {
      return true
    }
}

//Login

var logado = false;

function entrar() {
  var loginEntrar = JSON.parse(localStorage.getItem("Profissional"));
  var emailLogin = document.getElementById("email").value;
  var senhaLogin = document.getElementById("senha").value;

  if (!logado) {
      for (i = 0; i < loginEntrar.length; i++) {
          if (loginEntrar[i].email == emailLogin && loginEntrar[i].senha === senhaLogin) {
              logado = true;
          }
      }
      if (logado) {
          alert("Seja bem-vindo!");
          window.location = "perfil.html";
          preencherPerfil()
      } else {
          alert("Login incorreto!");
          limpaInput();
        }
    }  
}

function preencherPerfil(){
  profissionalLogin = JSON.parse(localStorage.getItem("Profissional"))

  document.getElementById("nomePerfil").innerHTML = profissionalLogin.nome
  document.getElementById("nomeTitulo").innerHTML = "Olá " + profissionalLogin.nome
  document.getElementById("categoriaPerfil").innerHTML = profissionalLogin.categoria
  document.getElementById("regiaoPerfil").innerHTML = profissionalLogin.regiao
  document.getElementById("expPerfil").innerHTML = profissionalLogin.exp
  document.getElementById("telefonePerfil").innerHTML = "(48) " + profissionalLogin.telefone
}

function limpaInput(){
  document.getElementById("email").value = ""
  document.getElementById("senha").value = ""
}
    
//CRUD

var editaNome, editaCategoria, editaRegiao, editaExp, editaTelefone

function editar(){
  editaNome = prompt("Digite seu novo nome:")
  editaCategoria = prompt("Digite sua nova categoria:")
  editaRegiao = prompt("Digite sua nova região:")
  editaExp = prompt("Digite sua nova experiência:")
  editaTelefone = prompt("Digite seu novo número:")

  document.getElementById("nomePerfil").innerHTML = editaNome
  document.getElementById("nomeTitulo").innerHTML = "Olá " + editaNome
  document.getElementById("categoriaPerfil").innerHTML = editaCategoria
  document.getElementById("regiaoPerfil").innerHTML = editaRegiao
  document.getElementById("expPerfil").innerHTML = editaExp
  document.getElementById("telefonePerfil").innerHTML = "(48) " + editaTelefone
}

function excluir(){
  if(confirm("Tem certeza que deseja deletar seu perfil do iWork?") == true){
    localStorage.removeItem("Profissional")
    window.location = "index.html"
    alert("Perfil deletado!")
  } else {
    alert("Perfil não deletado!")
  }
}
