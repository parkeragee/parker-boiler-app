import { combineReducers } from 'redux';
import currentUser from './current-user';
import account from './account';
import users from './users';
import modal from './modal';

const rootReducer = combineReducers({
    currentUser,
    account,
    users,
    modal,
});

export default rootReducer;