import React, { useState, useEffect } from 'react';
import CardComponents from './CardComponents';
import './cards.css';

function CardControls ({cardData, onSet, onOrderChange}) {

    return (
        <>
            <div>
            <div class="btn-group" role="group" aria-label="Card control">
                    <button type="button" class="btn btn-outline-primary" onClick={()=>onSet('Buy')}>Buy</button>
                    <button type="button" class="btn btn-outline-primary" onClick={()=>onSet('Gift')}>Gift</button>
                    <button type="button" class="btn btn-outline-primary" onClick={()=>onSet('Transfer')}>Transfer</button>
                </div>
            </div>
            <h2 className="main-heading" style={{color:'#0d6efd', marginBottom:'0', paddingTop:'20px'}}>Points Purchase</h2>
            <p>Short of miles for your next trip? You can purchase the miles you need to get closer to your desired award.</p>
            <p style={{marginBottom:'0'}}>Get a 5% bonus just for being an elite member!</p>

            <div className="cards">
                {cardData.map((val,index)=>{
                    return <CardComponents key={index} value={val} onOrderChange = {onOrderChange}/>
                })}
            </div>
        </>
    )
}

export default CardControls;