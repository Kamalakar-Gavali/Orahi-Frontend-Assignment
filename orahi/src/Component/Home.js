import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home=(props)=>{



    return(
        <>
        <h1>You are on Home Screen</h1>
        {
            props.isLoggedIn?
            <>
            <div className='bar-container'>
                {
                props.fetchData.data.map((result,index)=>
                <div className='bar-wrapper' key={index}>
                    <div className="bar" style={{height:result.stat+"px"}}>
                        {result.stat}
                    </div>
                    <span>{[...result.month].slice(0,3)}</span>
                </div>
                
                )
                }
            </div>
            </>
            :<><h2>You have not login first login</h2> <Link to='/'>here</Link></>
        }
        {/* {console.log(props.fetchData.data[0].month)} */}
        </>
    )
}
export default Home;