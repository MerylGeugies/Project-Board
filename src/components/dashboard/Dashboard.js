import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    //console.log('Dashboard props', this.props)
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className='dashboard container'>
        <div className='row'>

          {/* for projectlist */}
          <div className='col s12 m6'>
            <ProjectList projects={projects}/>
          </div>

          {/* for notifications */}
          <div className='col s12 m5 offset-m1'>
            <Notifications />
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('State Dashboard', state)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(Dashboard);