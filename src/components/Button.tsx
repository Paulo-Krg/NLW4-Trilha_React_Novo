import { useState } from 'react';

interface ButtonProps{
    color: string;
    children: string;
}

export function ButtonTsx(props: ButtonProps){
    // fazer a desestruturação do useState usando Hooks
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }

    return(
        <button
            type="button"
            style={{ backgroundColor: props.color}}
            onClick={increment}
        >
            {props.children}
            <strong>{counter}</strong>
        </button>
    );
}