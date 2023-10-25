import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { faLocationDot, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';

function History() {
  return (
    <div className={css(styles.wrapper)}>
                <span className={css(styles.icon)}>
                <FontAwesomeIcon icon={faLocationDot} />
                    {/* <Glyph size={16} icon="infoRoundNoFill" color={Color.BARTHEZ} /> */}
                    <span className={css(styles.message)}>
                    Sky Betting & Gaming, 4 Wellington Pl, Leeds LS1 4AJ
                    </span>
                </span>
            </div>
  )
}

export default History


const styles = StyleSheet.create({
  icon: {
    display: "flex",
    margin: "0 8px",
    alignItems: "center",
    justifyContent: "center",
},
message: {
  display: "flex",
  marginLeft: "8px",
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

