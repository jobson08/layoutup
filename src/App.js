import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './components/Nav';
import Collapse from './components/Collapse';
import Footer from './components/Footer';

import Maim from './Screens/Maim';
import Servico from './Screens/Servico'
import Portifolio from './Screens/Portifolio'
import Precos from './Screens/Precos'
import Contatos from './Screens/Contatos'

import Admin from './admin/Admin'

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

      <Route path='/admin' component={Admin} />
      <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
