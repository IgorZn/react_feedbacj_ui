import React, {useState} from 'react';

// Style component
function Card({reverse, children, revIsEnable}) {
    const [revColor, setRevColor] = useState(reverse);

    const handleReverse = () => {
        setRevColor(c => !c)
    }
    return (
        <>
            <div className={`card ${revColor && 'reverse'}`}>
                {children}
                {revIsEnable && <button onClick={handleReverse} className={"btn btn-secondary"}>Reverse card color</button>}

            </div>

        </>
    );
}

export default Card;