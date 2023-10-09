import { useState } from 'react';
import './App.css';

function App() {

  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("")

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstHandler(event){
  //   // console.log("Printing First Name :")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value)
  // } 

  // function changeLastHandler(event){
  //   // console.log("Printing Last Name :")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email:"",
    comments:"",
    isVisible: true,
    mode:"",
    favCar:""    
  })

  // console.log(formData)

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] : type ==="checkbox" ? checked : value
      }
    }); 
  }

  function submitHandler(event){
    event.preventDefault()
    console.log("printig the data you submit")
    console.log(formData)
  }

  return (
    <div className="App">
        <form onSubmit={submitHandler}>

          <input 
          type="text"
          placeholder='first Name'
          onChange={changeHandler}
          name ="firstName"
          value={formData.firstName}
          />

            <br/>
            <br/>

          <input 
          type="text"
          placeholder='Last Name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
          />

          <br/>
          <br/>

          <input 
          type="email"
          placeholder='Enter your email here'
          onChange={changeHandler}
          name="email"
          value={formData.email}
          />
          
          <br/>
          <br/>

          <textarea
          placeholder='enter your comment here'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
          />

          <br/>
          <br/>
          
          <input
            type="checkbox" 
            onChange={changeHandler}
            name='isVisible'
            id="isVisible"
            checked = {formData.isVisible}
          />

          <label htmlFor='isVisible' >Am I visible ?</label>

          <br/>
          <br/>

          <fieldset>
            <legend>Mode:</legend>

            <input
          type='radio'
          onChange={changeHandler}
          name ="mode"
          value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode ==="Online-Mode"}
          />

          <label htmlFor='Online-Mode'>Online Mode</label>

          <input
          type='radio'
          onChange={changeHandler}
          name ="mode"
          value="Offline-Mode"
           
          id="Offline-Mode"
          checked ={formData.mode ==="Offline-Mode"}
          />

          <label htmlFor='Offline-Mode'>Offline Mode</label>

          </fieldset>

          <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
          >
          <option value="Scorpio">Scorpio</option>
          <option value="farturer">farctuner</option>
          <option value="thar">thar</option>
          <option value="defender">defender</option>

          </select>

          <label htmlFor='favCar' >Which is your fav car ?</label>

          <br/>
          <br/>
          {/* <input type='submit' value="submit"/>  */}
          <button>submit</button>

        </form>
    </div>
  );
}

export default App;
