import { useDispatch, useSelect } from '@wordpress/data';
import './store'

export function App() {
    const counter = useSelect(
        ( select ) => {
            return select( 'counter' ).getCounter()
        },
        []
    );

    const { increase, decrease } = useDispatch( 'counter' );

    return <>
        <div>Counter: {counter}</div>
        <button onClick={() => decrease()}>-</button>
        <button onClick={() => increase()}>+</button>
    </>
}
