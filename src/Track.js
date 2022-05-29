import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers"
import React from "react"
import styles from "./Track.module.css"


export default function Track(){

    return (
            <div id="heroz" className={styles.taskcontainer}>

                                <div className={styles.names}>
                                        
                                        <div>Lemuel</div>
                                </div>

                                 <div className={styles.times}>
                                        <div>12:30</div>
                                </div>

                                <div className={styles.costs}>
                                        <p id="para-id">100</p>
                                </div>  

                                <div className={styles.btns}>
                                        <button  id="btn-id">+</button>
                                </div>              
                </div>
    )
}

const btn = document.getElementById("btn-id")
const para = document.getElementById("para-id")

btn.addEventListener("click", function(){
  let sale = Number(para.innerHTML)
  let totalSale = sale + 100;
  para.innerHTML = totalSale;
  console.log(sale)
  console.log(sale)
})


// i am learning to use git here 


 
 

