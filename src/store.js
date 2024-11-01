import {createReduxStore, register} from '@wordpress/data';

export const store = createReduxStore('counter', {
    reducer(state = {counter: 0}, action) {
        switch (action.type) {
            case 'increase':
                return {...state, counter: state.counter + 1}
            case 'decrease':
                return {...state, counter: state.counter - 1}
        }

        return state
    },
    actions: {
        increase() {
            return {
                type: 'increase',
            }
        },
        decrease() {
            return {
                type: 'decrease',
            }
        },
    },
    selectors: {
        getCounter(state) {
            return state.counter
        }
    }
})

register(store);
