import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLInks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'> MarioPlan </Link>
        <SignedInLInks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => {
  console.log('state from navbar', state)
  return{

  }
}

export default connect(mapStateToProps)(Navbar);