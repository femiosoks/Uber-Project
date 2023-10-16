 import '../styles/TopInfo.css';
 import { StyleSheet, css } from "aphrodite";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi,faBowlFood } from '@fortawesome/free-solid-svg-icons'

export default function TopInfo(){

    return(
        <div className='topInfo'>
            <div><FontAwesomeIcon icon={faTaxi} className={css(styles.icon)} />Rides </div>
            <div><FontAwesomeIcon icon={faBowlFood} className={css(styles.icon)} />Delivery</div>            
        </div>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: "8px",
    },
})

