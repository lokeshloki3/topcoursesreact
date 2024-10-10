import { useEffect, useState } from 'react';
import './App.css';
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import Navbar from "./components/Navbar"
import {apiUrl, filterData } from './data'

function App() {
  const [courses, setCourses]= useState([]);

  // category from filterData( to be matched with apiUrl title)
  // initially all
  const [category,setCategory]=useState(filterData[0].title);
  // sent category in Cards for checking purpose only

  async function fetchData() {
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // to use this data outside this function that is stored in another variable courses
      // as required data is inside output data
      setCourses(output.data);
      console.log(output.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className='cardss'>
        <Cards courses={courses} category={category}/>
      </div>
    </div>
  );
}

export default App;
