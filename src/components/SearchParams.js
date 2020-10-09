import React,{useState} from 'react';
const SearchParams=() =>{
    const [location,setLocation]=useState("Seattle, WA")
    const [animal,setAnimal]=useState("All")
    const ANIMAl=["dog","cat","bird","mouse","elephant","tiger","lion",]
    return(
        <div className="search-params">
        <form>
        <label htmlFor="location">Location
        <input id="location" value={location} placeholder="Location" onChange={e=>setLocation(e.target.value)}/></label>
        <label htmlFor="animal">Animal
        <select id="animal" value={animal} onChange={e=>setAnimal(e.target.value)} onBlur={e=>setAnimal(e.target.value)}>
        <option>ALL</option>
        {ANIMAl.map(animal=>(
            <option key={animal} value={animal}>{animal}</option>
        ))}
        </select>
        </label>
        <button> Submit</button>
        </form>
        </div>
    )
}
export default SearchParams
