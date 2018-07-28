import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './Components/Nav/nav';
import Collapse from './Components/Collapse/collapse';
import Footer from './Components/Footer/footer';

import Maim from './Screens/Maim/maim';
import Servico from './Screens/Servico/servico'
import Portifolio from './Screens/Portifolio/portifolio'
import Precos from './Screens/Precos/precos'
import Contatos from './Screens/Contatos/contatos'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav />
        <Collapse />
      <Route path='/' exact component={Maim} />
      <Route path='/Servico' component={Servico} />
      <Route path='/Portifolio' component={Portifolio} />
      <Route path='/Precos' component={Precos} />
      <Route path='/Contatos' component={Contatos} />
      <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
