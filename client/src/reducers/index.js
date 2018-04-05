import { combineReducers } from 'redux';
import currentUser from './current-user';
import account from './account';
import users from './users';

const rootReducer = combineReducers({
    currentUser,
    account,
    users,
});

export default rootReducer;