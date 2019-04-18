

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_MOVIES':
            return ({
                ...state,
                movies: action.payload
            });

        case 'LOAD_SEARCHRESULTS':
            return ({
                ...state,
                searchResults: action.payload
            });

        case 'CURRENT_USER':
            return ({
                ...state,
                user: action.payload
            })

        case 'LOGIN_FAILURE':
            return ({
                ...state,
                loginFailure: action.payload
            })

        case 'REGISTER_FAILURE':
            return ({
                ...state,
                registerFailure: action.payload
            })

        case 'LOGOUT':
            return ({
                ...state,
                user: null
            })
            
        case 'MOVIE_DETAILS':
            return ({
                ...state,
                currentMovie: action.payload
            })
        default:
            return state;
    }

}

export default reducer;