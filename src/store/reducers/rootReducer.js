import authReducer from './authReducer';
import projectReduver from './projectReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReduver
})

export default rootReducer