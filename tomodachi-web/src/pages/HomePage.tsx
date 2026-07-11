import AddWeezButton from "../components/AddWeezButton"
import React, { useLayoutEffect } from 'react';


function HomePage() {

    useLayoutEffect(() => {
            document.body.style.backgroundColor = "turquoise"
    });

    return(
        <>
        

        <div className="mt-10">
            <div className="text-black text-5xl">Welcome home!</div>

            <div className="mt-10">
                <AddWeezButton></AddWeezButton>
            </div>
            
        </div>

        <div className="creature-box bg-blue-500 border h-50 w-50 mt-25 ml-95">
            <div className="creature-itself text-black">
                WEEZ CREATURE BOX
            </div>
        </div>


        </>
    )
    
}


export default HomePage