import React from "react"
import styles from "./Track.module.css"


export default function Track(){

    return (
            <div className={styles.taskcontainer}>

                                <div className={styles.names}>
                                        
                                        <div>Lemuel</div>
                                </div>

                                 <div className={styles.times}>
                                        <div>12:30</div>
                                </div>

                                <div className={styles.costs}>
                                        <div id="saleout">100</div>
                                </div>  

                                <div className={styles.btns}>
                                        <button id="btn">+</button>
                                </div>              
                </div>
    )
}
