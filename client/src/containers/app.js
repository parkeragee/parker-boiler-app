import { connect } from 'react-redux';
import Router from '../components/Router';
import {withRouter} from 'react-router-dom';

/**
 * Takes state from store and maps its properties to Router component's props
 * @param {Object} state State from store
 * @returns {Object} Props object
 */
function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        users: state.users,
        account: state.account,
        modal: state.modal,
    };
}

export default withRouter(connect(mapStateToProps)(Router));