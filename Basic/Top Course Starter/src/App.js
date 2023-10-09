import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Card"
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData(){
    setLoading(true)
    try{
      let response = await fetch(apiUrl)
      let output = await response.json();
      console.log(output.data)
      setCourses(output.data);
    }

    catch(error){
      toast.error("Something went wrong")
    }
    setLoading(false)
  }

  useEffect(() =>{
    fetchData();
    console.log(fetchData())
  }, [])

  return (
    <div>
      
      <div>
        <Navbar/>
      </div>
      
      <div>
        <Filter filterData ={filterData}/>
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
    
    </div>  
  );
};

export default App;
