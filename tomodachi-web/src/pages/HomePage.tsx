import AddWeezButton from "../components/AddWeezButton"
import React, { useLayoutEffect, useState, useRef } from 'react';
import SpeechBubble from "../components/dialog-system/SpeechBubble";
import WheezCanvas from "../components/weez/WheezCanvas";
import backgroundPicture from "../assets/drawnAssets/backGround.png";
import stomachLow from '../assets/drawnAssets/stomach1.png';
import stomachMid from '../assets/drawnAssets/stomach2.png';
import stomachFull from '../assets/drawnAssets/stomach3.png';
import FoodList from "../components/FoodList";

import bgMusic from "../assets/music/Puzzle_game.mp3";


function HomePage() {

    useLayoutEffect(() => {
        document.body.style.backgroundColor = ""

    });


    const BackgroundMusic: React.FC = () => {
        const [isPlaying, setIsPlaying] = useState(false);
        const audioRef = useRef<HTMLAudioElement | null>(null);

        // Initialize the audio element once
        useLayoutEffect(() => {
            audioRef.current = new Audio(bgMusic);
            audioRef.current.loop = true;

            return () => {
                // Clean‑up when the component unmounts
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current = null;
                }
            };
        }, []);

        const togglePlay = () => {
            if (!audioRef.current) return;

            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current
                    .play()
                    .catch((err: unknown) => console.error("Audio play failed:", err));
            }
            setIsPlaying(!isPlaying);
        };

        return (
            <button
                onClick={togglePlay}
                className="absolute bottom-4 left-4 bg-white rounded px-3 py-1"
            >
                {isPlaying ? "Pause Music" : "Play Music"}
            </button>
        );
    };



    const [bubbleHidden, setBubbleHidden] = useState(false);
    const [dialog, setDialog] = useState([
        "Heyyyy great to see you!",
        "Goodbye, have a nice day!",
        "You're too nosy. Can you please leave me alone?",
        "I WILL NEVER TALK TO YOU AGAIN!"
    ])

    const [hunger, setHunger] = useState(0);
    const [showFoodList, setShowFoodList] = useState(false);
    const [selectedFood, setSelectedFood] = useState();
    const [fullnessImg, setFullnessImg] = useState(stomachLow)

    const handleHunger = () => {
        setHunger(Math.random() * 100);
        setSelectedFood(undefined);

        if (hunger < 33) {
            setFullnessImg(stomachLow);
        } else if (hunger < 66) {
            setFullnessImg(stomachMid);
        } else {
            setFullnessImg(stomachFull);
        }
    }

    const [showMessage, setShowMessage] = useState(true);

    const toggleMessage = () => setShowMessage((prev) => !prev)

    return (
        <>
            <div id='Feeding Area' className='flex h-1/6 justify-around rounded-b-2xl bg-amber-50'>
                <img className="w-1/8 p-2" src={fullnessImg} alt="a picture of a stomach" />
                <button className='w-1/6 bg-amber-600 hover:cursor-pointer' onClick={() => setShowFoodList((prev) => !prev)}>
                    <h1>Feed</h1>
                </button>
            </div>
            {showFoodList &&
                <FoodList setSelectedFood={setSelectedFood}
                >

                </FoodList >}
<div
    className="bg-contain rounded-2xl"
    style={{ backgroundImage: `url(${backgroundPicture})` }}>

    <div className="mt-2">
        <div className="text-black text-4xl">WELCOME HOME</div>

        <div className="mt-10 ml-140">
            <AddWeezButton></AddWeezButton>
        </div>

    </div>

    {/*<div className="creature-box bg-blue-500 border h-50 w-50 mt-25 ml-95">
            <div className="creature-itself text-black">
                WEEZ CREATURE BOX
            </div>
        </div>*/}

    <div className="mt-30 ml-85">
        <WheezCanvas
            selectedFood={selectedFood}
            setSelectedFood={() => handleHunger()}
        ></WheezCanvas>
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