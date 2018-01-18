import * as deckActionsTypes from '../actions/actionTypes';

const deckReducer = (state = {
    decks: [],
    decksLoaded: false,
    decksLoading: true,
    decksLoadingFailed: false,
    error: null
}, action) => {
    switch (action.type) {
        case deckActionsTypes.GET_DECKS:
            return {
                ...state,
                decksLoading: true
            };
        case deckActionsTypes.GET_DECKS_SUCCESS:
            return {
                ...state,
                decksLoading: false,
                decksLoaded: true,
                decks: action.payload
            };
        case deckActionsTypes.GET_DECKS_FAILED:
            return {
                ...state,
                decksLoading: false,
                decksLoaded: false,
                decksLoadingFailed: true,
                error: action.payload
            };
        default:
            return state;
    }
};

export default deckReducer;
