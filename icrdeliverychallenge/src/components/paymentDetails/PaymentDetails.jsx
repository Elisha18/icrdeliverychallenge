import React from 'react';
import PaymentForm from '../form/PaymentForm';
import BillingForm from '../form/BillingForm';
import '../paymentDetails/paymentdetails.css';

function PaymentDetails ({cardData}) {
    
    return (
        <>
            <div className="payment-details">
                <div className="payment-form">
                    <div className="payment-heading">
                        <h1>Payment Details</h1>
                        <h4>
                            We accept all major credit cards. Please ensure that you enter all details exactly
                            as they appear on credit card statement. All fields are required unless is indicated.
                        </h4>
                    </div>
                    <div>
                        <PaymentForm/>
                        <BillingForm/>
                    </div>
                </div>
                <div className="order-history">
                    <h2>Order summary</h2>
                    <hr/>
                    <div>
                        <h4>Total Miles
                            <span style={{float:'right'}}>{cardData.amount}</span>
                        </h4>
                    </div>
                    <div>
                        <h4>GST/HST
                            <span style={{float:'right'}}>$20.00</span>
                        </h4>
                    </div>
                    <hr/>
                    <h4>Total Cost
                        <span style={{float:'right'}}>${cardData.cost}</span>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default PaymentDetails;