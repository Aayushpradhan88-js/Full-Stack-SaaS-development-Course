import { useState } from "react";

function Home() {

    //useState() yeuta funcion hoo jasle two things expected garxaa, useState(undefined, fnx()) undefined bhaneko jasto hami lee yedi useState(3) garim bhane undefined ma 3 basne bhayoo that's it.....
    let numberState = useState(0); //[undefined, function()]
    let stateNumber = numberState[0];
    let uStateNumber = numberState[1];
    function increaseNumber() {
        uStateNumber(stateNumber + 1);
    };
    function decreaseNumber() {
        uStateNumber(stateNumber - 1);
    };

    // const [state, useState] = useState(0);
    // function increaseNumber

    /*
    yo variable bata hami ui ma data store garnaa sakdeinaau, React sanga capability xaina so we have react hook to store and show the data

    var num = 0;
    const increaseNumber = () => {
        num += 1;
        return num;
    };

    const decreaseNumber = () => {
        num -= 1;
          return num;
    };
    */
    return (
        <>
            <h1>{stateNumber}</h1>
            <button onClick={increaseNumber} style={{ color: "green" }}>up +</button>
            <button onClick={decreaseNumber} style={{ color: "red" }}>down -</button>
        </>
    )
}

export default Home;
