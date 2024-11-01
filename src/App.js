import {useState} from '@wordpress/element';

export function App() {
    const [counter, setCounter] = useState(0)

    return <>
        <div>Counter: {counter}</div>
        <button onClick={() => {setCounter(counter -1)}}>-</button>
        <button onClick={() => {setCounter(counter +1)}}>+</button>
    </>

}
