import React from 'react';
import '../styles/DestinationSearch.css'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faClock, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function DestinationSearch() {

    const handleNowClick = (event) => {
        event.stopPropagation();
        console.log("I clicked now")
    }
    return (
     <form className='form'>
            <Link to={"/Destination"}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={css(styles.searchIcon)} />
                Where to?
            </Link>

            <form className='nowForm' onClick={handleNowClick}>
                <FontAwesomeIcon icon={faClock} className={css(styles.clockIcon)} />
                Now
                <FontAwesomeIcon icon={faAngleDown} className={css(styles.whenIcon)} />

            </form>
        </form>
    )
}
<Link to={"/whereto"}></Link>

const styles = StyleSheet.create({
    searchIcon: {
        marginRight: "16px",
        marginLeft: "8px",
    },
    clockIcon: {
        marginRight: "8px",

    },
    whenIcon: {
        marginLeft: "8px",
        alignItems: "center"

    },
})



