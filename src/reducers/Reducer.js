

const reducer = (state, action) => {
    switch(action.type){
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
            return({
                ...state,
                user: action.payload
            })
        default:
            return state;
    }

}

export default reducer;