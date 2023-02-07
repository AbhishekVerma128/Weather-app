import axios from "axios";
import React, { useEffect, useState } from "react";
import Results from "./result";
import Search from "./search";
import 'bootstrap/dist/css/bootstrap.min.css';
import History from "./history";
import "../style/style.css"
const App = ()=> {
  const [search, setSearch]=useState("")
  const [weather, setWeather]= useState([])
  const [history, setHistory]= useState([])
  // console.log(search);

const handleSearch= async ()=>{
  if(search !== ""){
       await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`).then((value)=>{
        setWeather(value.data);
        if(history.indexOf(search)===-1){
          setHistory([...history, search])
          localStorage.setItem("city-history",JSON.stringify([...history, search]))
        }
      }).catch((err)=>{
      console.log(err)
      })
     
   
     }
    //  console.log(weather) 
  }
  const Data = JSON.parse(localStorage.getItem('city-history'));
  console.log(Data)
  const localData=()=>{
    if(Data !==null){
      setHistory(Data);
    }
  }
  
    useEffect(()=>{
      localData()
    },[])

    const clearHistory=()=>{
      localStorage.removeItem('city-history')
      setHistory([]);
    }

  return (
    <div className=" mt-5 p-3"> 
      <h1 className="text-center p-3">Search Weather</h1> 
      <div className="text-center p-1">
        <Search setSearch={setSearch} handleSearch={handleSearch} search={search}/>
      </div>
      <div className="d-flex justify-content-evenly mt-4"> 
      <div className="">
       <Results weather={weather}/>
      </div>
      <div>
        <h4 className="">History</h4>
        <History history={history}/>
        {
            (Data!==null )?<><button onClick={clearHistory}>clear history</button></>:<p>no history</p>
        }
        
      </div>
      </div>
    </div>
  )
}

export default App;
