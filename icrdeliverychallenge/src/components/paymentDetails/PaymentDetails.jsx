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
                        <h2 style={{color:'#0d6efd'}}>Payment Details</h2>
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
                    <h3 style={{color:'#0d6efd'}}>Order summary</h3>
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
                    <form>
                        <div className="mb-3">
                            <input type="checkbox" id="agreement" style={{marginRight:'5px'}}/>
                            <label className="form-check-label" for="agreement">I agree to all the terms & conditions</label>
                            <p style={{fontSize:'12px', marginTop:'0'}}>This includes additional fees of 5% to process pay with Crypto</p>
                        </div>
                    </form>
                    <button type="submit" className="btn" style={{backgroundColor:'#0d6efd', cursor:'pointer',color:'white', width:'120px' ,marginRight:'10px'}}>Pay Now</button>
                    <button type="submit" className="btn" style={{backgroundColor:'#0d6efd', cursor:'pointer'}}>
                        <a class="donate-with-crypto" style={{color:'white',textDecoration: 'none'}}
						href="https://commerce.coinbase.com/checkout/bdf3b153-e1d0-43b5-aa6f-8a8760c25df6">
							Buy with Crypto
						</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PaymentDetails;