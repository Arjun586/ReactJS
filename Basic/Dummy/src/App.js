
import { useEffect, useState } from 'react';
import './App.css';

function App() {

const[text,setText] = useState('')
const[name, setName] = useState('vansh')

//var 1 -> every render
// useEffect(() =>{
//   console.log("UI rendring done")
// })

// var 2 ->first render
// useEffect( () => {
//   console.log("UI RENDERING DONE")
// },[])


//var 3 -> first render + whenever dependency change
// useEffect(() => {
//   console.log("change observed")
// },[name])


//var 4 -> to handle unmonting of a components
// useEffect(() => {
//   //add event listenter
//   console.log("listener added")

//   return() =>{
//     console.log("listner removed")
//   }
// },[text])




function changeHandler(event){
  console.log(text);
  setText(event.target.value)
}

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
