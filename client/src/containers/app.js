import { connect } from 'react-redux';
import App from '../components/App';
import {withRouter} from 'react-router-dom';

/**
 * Takes state from store and maps its properties to App component's props
 * @param {Object} state State from store
 * @returns {Object} Props object
 */
function mapStateToProps(state) {
    return {
        test: state.test,
    };
}

export default withRouter(connect(mapStateToProps)(App));