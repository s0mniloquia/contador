import { actions, MULTIPLICAR, INCREMENTAR, DECREMENTAR, DIVIDIR, RESET } from './contador.actions';

export function contadorReducer(state: number = 10, action: actions ) {
    switch ( action.type ) {

        case MULTIPLICAR:
            return state * action.payload;

        case INCREMENTAR:
            return state + 1;

        case DECREMENTAR:
            return state - 1;

        case DIVIDIR:
            return state / action.payload;

        case RESET:
            return 0;

        default:
            return state;

    }

}
