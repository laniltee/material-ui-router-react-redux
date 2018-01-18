import {combineReducers} from 'redux';

import deckReducer from './deckReducer';

const reducers = combineReducers({
    decks: deckReducer
});

export default reducers;
