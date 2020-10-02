import React, {useState} from 'react';
import './SearchBar.css';

export default function SearchBar() {
    const [state,setState]=useState('');
     const handleChange=(e)=>{
      setState(e.target.value);
     }
    return(
        <div>
            <form>
            <input type="text" search="search" onChange={handleChange}/>
            </form>
            <p>{state}</p>
        </div>
    )
}

