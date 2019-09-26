import authReducer from './authReducer';
import projectReduver from './projectReducer';
import { combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReduver,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;