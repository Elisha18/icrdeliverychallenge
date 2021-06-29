import React from 'react';
import './form.css';

function BillingForm () {
    return (
        <>
            <form>
                <div className="billing-heading">
                    <h1>Billing Address</h1>
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
                    <select className="form-select" aria-label="select state / province" id="state" disabled>
                        <option selected>Select a State or Province</option>
                        <option value="1">ON</option>
                        <option value="2">US</option>
                        <option value="3">UK</option>
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
                <div className="mb-3 form-check">
                    <div><input type="checkbox" className="form-check-input" id="agreement"/></div>
                    <label className="form-check-label" for="agreement">I agree to the <a>terms & conditions</a></label>
                </div>
                <button type="submit" className="btn" style={{backgroundColor:'black', color:'white'}}>Buy Miles</button>
            </form>
        </>
    )
}

export default BillingForm;