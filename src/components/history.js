const History=(props)=>{
    return(
        <ul>{
            
        props.history.map((city, index)=>{
            return(
                <li key={index}>{city}</li>
            )
        })
    }
        </ul>
    )
}

export default History;