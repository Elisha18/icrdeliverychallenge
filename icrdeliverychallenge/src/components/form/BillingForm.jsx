import React from 'react';
import './form.css';

function BillingForm () {
    return (
        <>
            <form>
                <div className="billing-heading">
                    <h2 style={{color:'#0d6efd'}}>Billing Address</h2>
                </div>
                <div className="mb-3">
                    <div><label for="streetaddress" className="form-label">Street Address</label></div>
                    <input type="text" className="form-control" id="streetaddress" aria-describedby="card holder name"/>
                </div>
                <div className="mb-3">
                    <div><label for="housenumber" className="form-label">Apt, Suite, Unit Number</label></div>
                    <input type="text" className="form-control" id="housenumber"/>
                </div>
                <div className="mb-3">
                    <div><label for="city" className="form-label">City / Town</label></div>
                    <input type="text" className="form-control" id="city"/>
                </div>
                <div className="mb-3">
                    <div><label for="country" className="form-label">Country</label></div>
                    <select className="form-select" aria-label="select country" id="country">
                        <option selected>Select a country</option>
                        <option value="1">Canada</option>
                        <option value="2">US</option>
                        <option value="3">UK</option>
                    </select>
                </div>
                <div className="mb-3">
                    <div><label for="state" className="form-label">State / Province</label></div>
                    <select className="form-select" aria-label="select state / province" id="state">
                        <option selected>Select a State or Province</option>
                        <option value="1">BC</option>
                        <option value="2">ON</option>
                        <option value="3">QC</option>
                    </select>
                </div>
                <div className="mb-3">
                    <div><label for="zip" className="form-label">Zip / Postal code</label></div>
                    <input type="text" className="form-control" id="zip"/>
                </div>
                <div className="mb-3">
                    <div><label for="phonenumber" className="form-label">Phone Number</label></div>
                    <input type="text" className="form-control" id="phonenumber"/>
                </div>
                <div className="mb-3">
                    <div><label for="emailreciept" className="form-label">Email Reciept to</label></div>
                    <input type="text" className="form-control" id="emailreciept"/>
                </div>
                <div>
                    <p style={{fontSize:'11px', paddingTop:'10px'}}>Sample : 
                    Price includes all applicable charges. TESTING GST/HST will be charged to Canadian Residents. 
                    Members can purchase a maximum of 20,000 Elevate points in their individual account per calendar year. 
                    Members can receive a maximum gift of 20,000 Elevate points in their individual account per calendar 
                    year. Members can transfer a maximum of 30,000 Elevate points in and out of their individual account 
                    per calendar year. Please allow 72 hours for points to appear in the Elevate account. Purchases 
                    (Buy, Gift or Transfer of Elevate points) are not eligible to earn status points. All purchases 
                    (Buy, Gift or Transfer of Elevate points) are non-refundable. All Elevate Terms and Conditions apply.
                    </p>
                </div>
            </form>
        </>
    )
}

export default BillingForm;