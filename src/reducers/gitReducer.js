const initialState = {
    isLoading:false,
    gitUsers:null,
    success:null,
    error:null,
    gitRepos:null
}

const gitReducer = (currentSate = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_GIT_USERS':
             return {
                 ...currentSate,
                 isLoading:true
             }
            
        case 'REQUEST_GIT_USERS_SUCCESS':
             return {
                ...currentSate,
                isLoading:false,
                gitUsers:action.results.gitUsers,
                success:action.results.message,
                error:null    
             }
        
        case 'REQUEST_GIT_USERS_FAILED':
             return {
                 ...currentSate,
                 isLoading:false,
                 gitUsers:null,
                 success:null,
                 error:action.results.message
             }

        case 'REQUEST_GIT_REPOS':
             return {
                 ...currentSate,
                 isLoading:true
             }
            
        case 'REQUEST_GIT_REPOS_SUCCESS':
             return {
                ...currentSate,
                isLoading:false,
                gitRepos:action.results.gitRepos,
                success:action.results.message,
                error:null    
             }
        
        case 'REQUEST_GIT_REPOS_FAILED':
             return {
                 ...currentSate,
                 isLoading:false,
                 gitRepos:null,
                 success:null,
                 error:action.results.message
             }

        default:
            return currentSate;
    }
}

export default gitReducer;