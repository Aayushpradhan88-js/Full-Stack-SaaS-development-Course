import { useEffect, useState } from "react";

function Effect() {
    const [number1, setNumber1] = useState(0);
    const increasingNumber = () => {
        setNumber1(number1 + 1);
    };

    useEffect(() => {
        console.log("Number increased!!");
    }, [number1])

    return (
        <>
        <h1>{number1}</h1>
        <button onClick={increasingNumber}>click me</button>
        <h1>understanding use effect hook</h1>
        </>
    )
};

export default Effect;
