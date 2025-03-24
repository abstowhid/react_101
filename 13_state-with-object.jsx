//object is used to do multiple related state operations using one state
//means when i need to do same types of state , instead using multiple state use one state with object with multiple initialization i need, then use setState function o set each

import { useState } from 'react';

const Obj = () => {
    const [colors, setColor] = useState({ blue: 0, red: 0, green: 0 });
    // const setBl = () => {
    //     setColor({ ...colors, blue: colors.blue + 1 });
    //     //spread acces the whole object first,, then define which to work and what to work
    // }; //i forgot to call back,, so now doing it
    const setBl = () => {
        setColor((parameter) => {
            return { ...parameter, blue: parameter.blue + 1 };
        });
    };
    return (
        <div>
            <p>{colors.blue}</p>
            <button onClick={setBl}>Object</button>
        </div>
    );
};
export default Obj;
