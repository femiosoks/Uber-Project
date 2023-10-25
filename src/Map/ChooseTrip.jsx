import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';

function ChooseTrip() {
    const price = "£15"
  return (
    <div className={css(styles.wrapper)}>
                <span className={css(styles.icon)}>
                <FontAwesomeIcon icon={faCar} />
                    {/* <Glyph size={16} icon="infoRoundNoFill" color={Color.BARTHEZ} /> */}
                    <span className={css(styles.message)}>
                    UberXL 10:14am - 5 min away 
                    
                    </span>
                    
                </span>
                <div className={css(styles.price)}>
                    {price}

                    </div>
                
            </div>
  )
}

export default ChooseTrip


const styles = StyleSheet.create({
  icon: {
    display: "flex",
    margin: "0 8px",
    alignItems: "center",
    justifyContent: "center",
},
price: {
    display: "flex",
    margin: "0 8px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
},
message: {
  display: "flex",
  marginLeft: "10px",
  maxWidth: "200px",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  lineHeight: "16px",
  flexWrap: "wrap",
},
wrapper: {
  marginTop: "8px",
  borderRadius: "4px",
  border: "1px",
  borderStyle: "solid",
  display: "flex",
  fontSize: "12px",
  flexBasis: "100%",
  flexGrow: 1,
  padding: "12px 0 12px 4px",
},
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column", 
    margin: "50px",
  },

});

