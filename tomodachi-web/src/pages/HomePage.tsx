import AddWeezButton from "../components/AddWeezButton"
import React, { useLayoutEffect, useState, useRef } from 'react';
import SpeechBubble from "../components/dialog-system/SpeechBubble";
import WheezCanvas from "../components/weez/WheezCanvas";
import backgroundPicture from "../assets/drawnAssets/backGround.png";
import bgMusic from "../assets/music/Puzzle_game.mp3";
import BackgroundMusic from "../components/BackgroundMusic";
import stomachLow from '../assets/drawnAssets/stomach1.png';
import stomachMid from '../assets/drawnAssets/stomach2.png';
import stomachFull from '../assets/drawnAssets/stomach3.png';
import FoodList from "../components/FoodList";



function HomePage() {

    useLayoutEffect(() => {
        document.body.style.backgroundColor = ""

    });


    const [showDialog, setShowDialog] = useState(false);
    const [showMessage, setShowMessage] = useState(true);
    const [dialog, setDialog] = useState([
        "Heyyyy great to see you!",
        "Goodbye, have a nice day!",
        "You're too nosy. Can you please leave me alone?",
        "I WILL NEVER TALK TO YOU AGAIN!"
    ]);


    const [hunger, setHunger] = useState(0);
    const [showFoodList, setShowFoodList] = useState(false);
    const [selectedFood, setSelectedFood] = useState<string | undefined>();
    const [fullnessImg, setFullnessImg] = useState(stomachLow)

    const handleHunger = () => {
        setHunger(Math.random() * 100);
        setSelectedFood(undefined);

        if (hunger < 33) {
            setFullnessImg(stomachLow);
            setShowDialog(false);
            setDialog(['You call this sustenance?', 'GIVE ME MORE!!!!']);
        } else if (hunger < 66) {
            setFullnessImg(stomachMid);
            setShowDialog(false);
            setDialog(['Light work no reaction!']);
        } else {
            setShowDialog(false);
            setFullnessImg(stomachFull);
            setDialog(['Ough......', "I'm so full............................."]);
        }
    }


    return (
        <>

            <div
                className="relative bg-cover size-screen"
                style={{
                    backgroundImage: `url(${backgroundPicture})`, 
                }}>
                <BackgroundMusic />

                <div className="absolute top-[-20]">
                    <div id='FeedingStyling' className="flex-col bg-amber-50 rounded-b-2xl">
                        <div id='feedBar' className="flex justify-around content-baseline">
                            <img className="w-1/8 p-2" src={fullnessImg} alt="a picture of a stomach" />
                            <button className='w-1/6 my-2 bg-amber-600 hover:cursor-pointer' onClick={() => setShowFoodList((prev) => !prev)}>
                                <h1>Feed</h1>
                            </button>
                        </div>
                        {showFoodList &&
                            <FoodList className='' setSelectedFood={setSelectedFood} />}
                    </div>
                </div>



                <div className="mt-10">
                    <div className="text-black text-4xl">WELCOME HOME</div>

                    <div className="mt-10 ml-140">
                        <AddWeezButton></AddWeezButton>
                    </div>

                </div>

                <div className="mt-30 ml-85">
                    <WheezCanvas selectedFood={selectedFood} setSelectedFood={() => handleHunger()} />
                </div>
                {/*showMessage && (
                    <div className="absolute bg-gray-300 text-black rounded-full border ml-36 w-150 h-12 text-bold">
                        I AM BEING NEGLECTED, I WILL CALL THE POLICE IF YOU DON'T FEED ME!!!
                    </div>
                )*/}

                <div className="absolute left-0 right-0 bottom-0">
                    <SpeechBubble
                        isHidden={showDialog}
                        setIsHidden={setShowDialog}
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