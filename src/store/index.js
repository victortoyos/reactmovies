//aquí es donde se crea la store y se combinan los reducers

import { createStore, combineReducers } from "redux";

import movieListReducer from "./reducers/movieListReducer";

const roorReducer = combineReducers({
    movies: movieListReducer
});

//esto es lo que devolverá siempre, movies es lo que necesitamos en el componente
const initialState = {
    movies: {
        name: 'Terminator'
    }
};

const store = createStore(roorReducer, initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;