import AddWeezButton from "../components/AddWeezButton"
import React, { useLayoutEffect, useState } from 'react';
import SpeechBubble from "../components/dialog-system/SpeechBubble";
import WheezCanvas from "../components/weez/WheezCanvas";
import backgroundPicture from "../assets/drawnAssets/backGround.png"


function HomePage() {

    useLayoutEffect(() => {
            document.body.style.backgroundColor = ""
            
    });

    const [bubbleHidden, setBubbleHidden] = useState(false);
        const dialog = [
            "Hiii",
            "Byee!!!",
            "Heyyy!!",
            "Goodbye!"
        ];

    return(
        <>
        
        <div 
            className="bg-contain"
            style={{backgroundImage: `url(${backgroundPicture})`}}>

        <div className="mt-10">
            <div className="text-black text-4xl">Welcome home!</div>

            <div className="mt-10">
                <AddWeezButton></AddWeezButton>
            </div>
            
        </div>

        {/*<div className="creature-box bg-blue-500 border h-50 w-50 mt-25 ml-95">
            <div className="creature-itself text-black">
                WEEZ CREATURE BOX
            </div>
        </div>*/}

        <div className="mt-20 ml-85">
            <WheezCanvas></WheezCanvas>
        </div>
        

        <div className="">
            <SpeechBubble 
                isHidden={bubbleHidden}
                setIsHidden={() => setBubbleHidden(true)}
                dialog={dialog}
                speed={40}
            
            >
            </SpeechBubble>
        </div>
        

        </div>

        </>
    )
    
}


export default HomePage