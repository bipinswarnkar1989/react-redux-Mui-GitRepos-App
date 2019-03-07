import { connect } from 'react-redux';
import AppWrapper from '../../components/AppWrapper';
import * as gitActions from '../../actions/gitActions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        gitState:state.gitState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
) (withRouter(AppWrapper));