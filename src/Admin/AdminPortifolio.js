import React, {Component} from 'react'

import config, {storage} from './../firebase-config'

class AdminPortifolio extends Component {
  constructor(props) {
    super(props);
    this.gravaPortfolio= this.gravaPortfolio.bind(this)
  }
gravaPortfolio(e){
  console.log('gravar portifolio')

  e.preventDefault()
}
  render(){
    return(
      <div style={{padding: '10px'}}>
                    <h2>Portfolio - Área Administrativa</h2>
                    <form onSubmit={this.gravaPortfolio}>
                        <div className="form-group">
                            <label htmlFor="titulo">Título</label>
                            <input type="text" className="form-control" id="titulo" placeholder="Titulo" ref={(ref) => this.titulo = ref} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagem">Imagem</label>
                            <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
    )
  }
}

export default AdminPortifolio;
