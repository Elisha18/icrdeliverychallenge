import React from 'react';
import './form.css';

function PaymentForm () {
    return (
        <>
            <form>
                <div className="mb-3">
                    <div><label for="cardholdername" className="form-label">Card Holder Name</label></div>
                    <input type="text" className="form-control" id="cardholdername" aria-describedby="card holder name"/>
                </div>
                <div className="mb-3">
                    <div><label for="cardnumber" className="form-label">Card Number</label></div>
                    <input type="text" className="form-control" id="cardnumber"/>
                </div>
                <div className="mb-3">
                    <div><label for="expirationdate" className="form-label">Expiration Date</label></div>
                    <input type="text" className="form-control" id="expirationdate"/>
                </div>
                <div className="mb-3">
                    <div><label for="cvv" className="form-label">CVV</label></div>
                    <input type="text" className="form-control" id="cvv"/>
                </div>
            </form>
        </>
    )
}

export default PaymentForm;