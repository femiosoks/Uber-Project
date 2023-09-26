import React from 'react';
import '../styles/WhereTo.css'
import { Link } from 'react-router-dom'

export default function WhereToForm() {
    const handleClick = () => {
        <Link to={"/whereto"}></Link>


    }
    const handleNowClick = (event) => {
        event.stopPropagation();
        console.log("I clicked now")
    }


    return (
       
       
       
       <Link to={"/whereto"}>
        <form className='form'>
        Where to?

            

            <form className='nowForm' onClick={handleNowClick}>
                now
            </form>
        </form>
       
       </Link>
      
      

    )
}

<Link to={"/whereto"}></Link>



