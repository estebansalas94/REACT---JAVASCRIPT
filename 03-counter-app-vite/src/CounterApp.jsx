import {useState} from 'react';
import PropTypes from "prop-types";


export const CounterApp = ({value}) =>{
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        // console.log('+1');
        // value= 1000;
        // console.log(value)
        setCounter(counter + 1)

    }
    return (
        <>
            <h1>My Counter App</h1>
            <h2>{ counter }</h2>
            <button onClick={handleAdd}>+1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
