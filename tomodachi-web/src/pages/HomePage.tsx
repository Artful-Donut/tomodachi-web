import AddWeezButton from "../components/AddWeezButton"
import React, { useLayoutEffect, useState } from 'react';
import SpeechBubble from "../components/dialog-system/SpeechBubble";
import WheezCanvas from "../components/weez/WheezCanvas";


function HomePage() {

    useLayoutEffect(() => {
            document.body.style.backgroundColor = "turquoise"
    });

    const [bubbleHidden, setBubbleHidden] = useState(false);
        const dialog = [
            "Hiii",
            "Byee!!!",
            "Heyyy!!"
        ];

    return(
        <>
        <WheezCanvas />

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

        <SpeechBubble 
            isHidden={bubbleHidden}
            setIsHidden={() => setBubbleHidden(true)}
            dialog={dialog}
            speed={40}
        >
        </SpeechBubble>


        </>
    )
    
}


export default HomePage