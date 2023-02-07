const Search=(props)=>{
    return(
        <>
        <input type="search" placeholder="enter city name" onChange={(e)=>{props.setSearch(e.target.value)}} className="p-2 rounded-2 search-box"/>
        <button onClick={props.handleSearch} className={props.search!==""?"btn btn-secondary ":"btn btn-secondary disabled"}>Search</button>
        </>
    )
}

export default Search;