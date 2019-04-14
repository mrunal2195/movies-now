

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

        default:
            return state;
    }

}

export default reducer;