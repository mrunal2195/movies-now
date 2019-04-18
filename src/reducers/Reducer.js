

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

        case 'USER_MOVIES':
            return({
                ...state,
                usermovies: action.payload
            })

        case "LOAD_COMMENTS":
            return({
                ...state,
                comments: action.payload
            })
        
        case 'ADD_COMMENTS':
            return({
                ...state,
                comments: [...state.comments, action.payload]
            })
        
        case 'FLAG_COMMENT':
        let idx = state.comments.findIndex(c=>c.id === action.payload.id)
        return ({
            ...state,
            comments: [
                ...state.comments.slice(0, idx),
                action.payload,
                ...state.comments.slice(idx + 1)
            ]
        })
        default:
            return state;
    }

}

export default reducer;