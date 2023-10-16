import React from 'react'
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import "../styles/Destination.css"

function DestinationPage() {
  return (
    <div className={css(styles.container)}>  
    <FontAwesomeIcon icon={faPlus}  className={css(styles.iconContainer)} ></FontAwesomeIcon>  
         <input type='text' className = "fromForm" placeholder='From where?'></input>

         <input type='text' className = "toForm" placeholder='Where to?'></input>



    </div>
  )
}

export default DestinationPage

const styles = StyleSheet.create({
  container:{
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    maxWidth: "700px",
    margin: "50px"
  },
  iconContainer:{
    display:"flex",
    alignItems: "flex-start",

  }


})
// className={css(styles.clockIcon)}

// const styles = StyleSheet.create({
//   icon: {
//       marginRight: "8px",
//   },
// })

