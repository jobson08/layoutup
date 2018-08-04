import React, {Component} from 'react'

class Login extends Component{
  constructor(props){
    super(props)

    this.email = null
    this.senha = null

    this.autenticaUsuario = this.autenticaUsuario.bind(this)
  }

autenticaUsuario(){
  console.log(this.email.value, this.senha.value)
}

  render() {
    return (
      <div className="container">
                 <h1>Login</h1>
                 <div className="form-group">
                     <label htmlFor="exampleInputEmail1">Email</label>
                     <input type="email" name="email" ref= {ref => this.email = ref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nome@email.com" />
                 </div>
                 <div className="form-group">
                     <label htmlFor="exampleInputPassword1">Senha</label>
                     <input type="password" name="senha" ref= {ref => this.senha = ref} className="form-control" id="exampleInputPassword1" />
                 </div>

                 <button type="button" className="btn btn-primary" onClick ={this.autenticaUsuario} >Acessar</button>
             </div>
    )
  }
}

export default Login;
