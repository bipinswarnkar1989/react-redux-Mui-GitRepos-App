import { connect } from 'react-redux';
import Home from '../../components/Home';
import * as gitActions from '../../actions/gitActions';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state) => {
    return {
        gitState:state.gitState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mappedrequestGetGitUsers: () => dispatch(gitActions.requestGetGitUsers())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
) (withRouter(Home));