import authReducer from './authReducer';
import projectReduver from './projectReducer';
import { combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReduver,
  firestore: firestoreReducer
});

export default rootReducer;