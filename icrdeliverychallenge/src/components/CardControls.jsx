import React, { useState, useEffect } from 'react';
import CardComponents from './CardComponents';
import './cards.css';

function CardControls ({cardData, onSet, onOrderChange}) {

    return (
        <>
            <div>
                <div class="btn-group" role="group" aria-label="Card control">
                    <button type="button" class="btn btn-outline-primary" onClick={()=>onSet('buy')}>Buy</button>
                    <button type="button" class="btn btn-outline-primary" onClick={()=>onSet('gift')}>Gift</button>
                    <button type="button" class="btn btn-outline-primary" onClick={()=>onSet('transfer')}>Transfer</button>
                </div>
            </div>
            <div className="cards">
                {cardData.map((val,index)=>{
                    return <CardComponents key={index} value={val} onOrderChange = {onOrderChange}/>
                })}
            </div>
        </>
    )
}

export default CardControls;