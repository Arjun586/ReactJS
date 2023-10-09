import { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    emailAddress:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    zip:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""

  })

  function changeHandler(event){
    const{name, value, checked, type} = event.target
    setFormData(  (prev) => ({...prev, [name]:type==="checkbox" ? checked : value}))
  }

  function sumbitHandler(event){
    event.preventDefault();

    console.log("Printing the final value of Form Data:")
    console.log(formData)    
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={sumbitHandler}>

        <label htmlFor="firstName"> First Name</label>
        <br/>
        <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"
        />

        
        <br/>

        <label htmlFor="lastName"> Last Name</label>
        <br/>
        <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
        />

        <br/>

        <label htmlFor="emailAddress"> Email Address</label>
        <br/>
        <input
        type="email"
        name="emailAddress"
        id="emailAddress"
        placeholder="abc@gmail.com"
        value={formData.emailAddress}
        onChange={changeHandler}
        className="outline"
        />

        <br/>

        <label htmlFor="country">Country</label>
        <br/>
        <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline"
        >
          <option>India</option>
          <option>United State</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br/>

        <label htmlFor="streetAddress">Street Address</label>
        <br/>
        <input
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="123 Main St."
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
        />

        <br/>

        <label htmlFor="city">City</label>
        <br/>
        <input
        type="text"
        name="city"
        id="city"
        placeholder="Shahadara"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
        />

        <br/>

        <label htmlFor="state">State / Province</label>
        <br/>
        <input
        type="text"
        name="state"
        id="state"
        placeholder="New Delhi"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
        />

        <br/>

        <label htmlFor="zip">ZIP / Postal Code</label>
        <br/>
        <input
        type="text"
        name="zip"
        id="zip"
        placeholder="110093"
        value={formData.zip}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <br/>

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">

          <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={formData.comments}
            onChange={changeHandler}
          />
          <div>           
          <label htmlFor="comments">Comments</label>
          <p>Get notified when someones posts a comment on a posting.</p>
          </div>

          </div>

          <div className="flex">

          <input
            id="candidates"
            name="candidates"
            type="checkbox"
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <div>           
          <label htmlFor="candidates">Candidates</label>
          <p>Get notified when a candidate applies for a job.</p>
          </div>

          </div>

          <div className="flex">

          <input
            id="offers"
            name="offers"
            type="checkbox"
            checked={formData.offers}
            onChange={changeHandler}
          />
          <div>           
          <label htmlFor="offers">offers</label>
          <p>Get notified when a candidate acceots or rejects an offers</p>
          </div>

          </div>


        </fieldset>


        <br/>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are deliverd via SMS to your mobile Phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="EveryThing"
            onChange={changeHandler}
          />

          <label htmlFor="pushEverything">Everything</label>

          <br/>

          <input
            type="radio"
            id="same"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
          />

          <label htmlFor="same">Same as email</label>

          <br/>

          <input
            type="radio"
            id="noPush"
            name="pushNotifications"
            value="No push notifications"
            onChange={changeHandler}
          />

          <label htmlFor="noPush">No push notification</label>

        </fieldset>


        <button 
        className="bg-blue-500 text-white font-bold rounded py-2 px-2"
        >
          save
        </button>



      </form>
    </div>
  );
}

export default App;
