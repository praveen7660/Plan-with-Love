import React,{useState} from "react";
import data from './data';
import Tours from "./components/Tours"; 

const App = () => {

  const [tours,setTours] = useState(data);

  // Remove the tours with the given id
  function removeTour(id){
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
  }

  // Refresh -> No Tours Left + re-initialize the page
  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={()=> setTours(data)}>Refresh</button>
      </div>
    )
  };

  return (
    <div className='App'>
      <Tours tours={tours} removeTours = {removeTour}></Tours>
    </div>
  );
}

export default App;
