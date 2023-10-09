
import './App.css';
import './components/Item'
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {

  const response = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"march",
      itemYear:"1895"
    },

    {
      itemName:"SurfExcel",
      itemDate:"18",
      itemMonth:"may",
      itemYear:"1999"
    },

    {
      itemName:"Tide",
      itemDate:"29",
      itemMonth:"April",
      itemYear:"2010"
    }
  ]


  function clickHandler(){ 
    console.log("onClick chl rha hai")
  }

  return (
    <div>
      <Item name= {response[0].itemName}  >First Element</Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year= {response[0].itemYear} ></ItemDate>
      
      <Item name= {response[1].itemName} ></Item>
      <ItemDate  day={response[1].itemDate} month={response[1].itemMonth} year= {response[1].itemYear} ></ItemDate>
      
      <Item name= {response[2].itemName} ></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year= {response[2].itemYear} ></ItemDate>
      <div className="App">



      <button onClick={clickHandler}>Add to cart</button>
      </div>
    </div>
  );
}

export default App;