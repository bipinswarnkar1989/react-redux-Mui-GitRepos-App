import { connect } from 'react-redux';
import UserDetails from '../../components/UserDetails';
import * as gitActions from '../../actions/gitActions';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state) => {
    return {
        gitState:state.gitState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mappedrequestGetGitRepos: payload => dispatch(gitActions.requestGetGitRepos(payload))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
) (withRouter(UserDetails));