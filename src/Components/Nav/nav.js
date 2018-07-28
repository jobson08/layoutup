import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
  return(
    <nav className='navbar navbar-default navbar-fixed-top'>
  <div className='container'>
    <div className='navbar-header'>
      <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
      <Link className='navbar-brand' to='/'>LayoutUp</Link>
    </div>
    <div className='collapse navbar-collapse' id='myNavbar'>
      <ul className='nav navbar-nav navbar-right'>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/Servico'>SERVIÇOS</Link></li>
        <li><Link to='/Portifolio'>PORTFOLIO</Link></li>
        <li><Link to='/Precos'>PREÇOS</Link></li>
        <li><Link to='/Contatos'>CONTATOS</Link></li>
      </ul>
    </div>
  </div>
  </nav>

  )
}

export default Nav;
