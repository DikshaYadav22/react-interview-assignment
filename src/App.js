import React, { useState, useRef, useEffect } from "react";
import Username from "./components/Username";
import GroceryApp from "./components/GroceryApp";
import Tours from './components/Tours';

function App() {
  const[inputData, setInputData] = useState("")

  /** first task */
  let inputRef = useRef("testing data");
  
  function updateInput() {
    inputRef.current.value = "John Doe";
    setInputData(inputRef.current.value = "John Doe");
    
  }

  /** 3rd task  -- tours and tour*/
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    try {
      const response = await fetch('https://course-api.com/react-tours-project')
      const tours = await response.json()
           setTours(tours)
    } catch (error) {
       console.log(error)
    }
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours()
  }, [])


  if (tours.length === 0) {
      return (
        <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </main>
      )
    }
  
  return (
    <>
      <Username ref={inputRef} />
      <button onClick={updateInput}>Update Input</button>

      <div>
        <br/>
        <h6>Input value is:{inputData}</h6>
      </div>

      <div>
        <GroceryApp  products={[
    { name: "Oranges", votes: 0 },
    { name: "Apples", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}  />
      </div>

      <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
    </>
  );
}


export default App;

/** 4th task output */

// this.setState({ counter: this.state.counter + this.props.increment, });

// Instead of doing this we would use this approach
// =====================

// state = {

//  counter : 0,
//  increment: this.props.increment

// }

// this.setState({ counter: this.state.counter + this.state.increment, });

// Because inside setState() method this refers to state object value.




