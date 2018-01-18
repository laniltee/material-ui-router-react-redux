import axios from 'axios';

import * as deckActionTypes from './actionTypes';
import * as serviceUrls from '../config/api';

export function getDecks() {
    return function (dispatch) {
        axios.get(serviceUrls.QUESTION_SERVICE).then((response) => {
            dispatch(getDecksSuccess(response.data))
        }).catch((error) => {
            dispatch(getDecksFailed(error))
        })
    }
}

export function getDecksSuccess(decks) {
    return {
        type: deckActionTypes.GET_DECKS_SUCCESS,
        payload: decks
    }
}

export function getDecksFailed(error) {
    return {
        type: deckActionTypes.GET_DECKS_FAILED,
        payload: error
    }
}
