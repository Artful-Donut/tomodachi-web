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
    const [showMessage, setShowMessage] = useState(true);
        const dialog = [
            "Heyyyy great to see you!",
            "Goodbye, have a nice day!",
            "You're too nosy. Can you please leave me alone?",
            "I WILL NEVER TALK TO YOU AGAIN!"
        ];

        const toggleMessage = () => setShowMessage((prev) => !prev)

    return(
        <>
        
        <div 
            className="bg-contain"
            style={{backgroundImage: `url(${backgroundPicture})`}}>

        <div className="mt-10">
            <div className="text-black text-4xl">WELCOME HOME</div>

            <div className="mt-10 ml-140">
                <AddWeezButton></AddWeezButton>
            </div>
            
        </div>


        <button
            onClick={toggleMessage}
            className="absolute items-center justify-center bg-white border rounded-full h-24 w-24 mt-12 text-bold text-4xl"
        >
            !!!
        </button>
        <div className="mt-30 ml-85">
            <WheezCanvas></WheezCanvas>
        </div>
        {showMessage && (
            <div className="absolute bg-gray-300 text-black rounded-full border ml-36 w-150 h-12 text-bold">
                I AM BEING NEGLECTED, I WILL CALL THE POLICE IF YOU DON'T FEED ME!!!
            </div>
        )}

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