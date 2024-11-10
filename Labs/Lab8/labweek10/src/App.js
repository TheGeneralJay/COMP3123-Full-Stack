import { useState } from "react";
import './App.css';

function App() {

  const [emailInput, setEmail] = useState("");
  const [nameInput, setName] = useState("");
  const [addressInput, setAddress] = useState("");
  const [address2Input, setAddress2] = useState("");
  const [cityInput, setCity] = useState("");
  const [provinceInput, setProvince] = useState("");
  const [postalCodeInput, setPostalCode] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setName(e.target.name.value);
    setAddress(e.target.address.value);
    setAddress2(e.target.address2.value);
    setCity(e.target.city.value);
    setProvince(e.target.province.value);
    setPostalCode(e.target.postalCode.value)
  }

  return (
    <div className="App">
      <form class="formField" onSubmit={(e) => handleSubmit(e)}>
        <h1>Data Entry Form</h1>

        <div class="formInput1">
          <label>Email</label>
          <input
          class="formInput1"
          type="text"
          name="email"
          />
        </div>

        <div class="formInput1">
          <label>Name</label>
          <input
            class="formInput1"
            type="text"
            name="name"
          />
        </div>

        <br />
        <br />

        <div class="formInput2">
          <label>Address</label>
          <input 
            class="formInput2"
            type="text"
            name="address"
          />
        </div>

        <br />
        <br />

        <div class="formInput3">
          <label id="ad2">Address 2</label>
          <input 
            class="formInput3"
            type="text"
            name="address2"
          />
        </div>

        <br />
        <br />

        <div class="formInput4">
          <label>City</label>
          <input
              class="formInput4"
              type="text"
              name="city"
          />
        </div>

        <div class="formInput4">
          <label>Province</label>
          <select 
            class="formInput4"
            name="province" 
          >
              <option value="Ontario">Ontario</option>
              <option value="Quebec">Quebec</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Manitoba">Manitoba</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Alberta">Alberta</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
          </select>
        </div>

        <div class="formInput4">
          <label>Postal Code</label>
          <input 
            class="formInput4"
            type="text"
            name="postalCode"
          />
        </div>

        <br />
        <br />
        
        <label> Agree Terms & Condition?</label>
        <input class="formInput5" type="checkbox" />

        <br />
        <br />

        <input class="submitBtn" type="submit" />
      </form> 
      
      <div class="formField">
        <h4>Email: {emailInput}</h4>
        <h4>Name: {nameInput}</h4>
        <h4>Address: {addressInput}</h4>
        <h4>Address 2:  {address2Input}</h4>
        <h4>City: {cityInput}</h4>
        <h4>Province: {provinceInput}</h4>
        <h4>Postal Code: {postalCodeInput}</h4>
      </div>

    </div>
  );
}

export default App;
