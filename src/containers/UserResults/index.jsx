import { connect } from 'react-redux';
import UserResults from '../../components/UserResults';
import * as gitActions from '../../actions/gitActions';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state) => {
    return {
        gitState:state.gitState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mappedrequestGetGitUsers: payload => dispatch(gitActions.requestGetGitUsers(payload))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
) (withRouter(UserResults));