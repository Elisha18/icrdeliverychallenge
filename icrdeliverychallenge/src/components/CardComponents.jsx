import React, { useState } from 'react';

function CardComponents ({value, classes, onOrderChange}) {

    // const [data, setData] = useState({});

    const classname = () => {
        let active = 'card-content ';
        active += (classes ==='active') ? 'active' : '';
        return active;
    }

    return (
        <>
            <div className={classname()} onClick={()=>onOrderChange(value)}>
                <div className="card-miles">
                    Buy {value.amount} Miles
                </div>
                <div className="card-cost">
                    ${value.cost}
                </div>
            </div>
        </>
    )
}

export default CardComponents;