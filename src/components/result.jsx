const Results =({weather})=>{
    return(
        <div>{
            (weather.name !== undefined)?
                     <>
                    <h2>{weather.name}  </h2>
                    <div className="d-flex justify-content-evenly">
                    <div>
                    <p className="m-1">Avg Temp :<span className="font-size m-1">{weather.main.temp}</span></p>
                    <p className="m-1">Max temp :<span className="font-size m-1" >{weather.main.temp_max}</span>  </p>
                    </div>
                   <div>
                   <p className="m-1">Min temp :<span className="font-size m-1">{weather.main.temp_min}</span> </p> 
                    <p className="m-1" >Weather type :<span className="font-size m-1">{weather.weather[0].main}</span> </p>
                   </div>
                    
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                    </>:
                    <h3>Enter your city</h3>
        }
        </div>
        
        
    )
}
export default Results;