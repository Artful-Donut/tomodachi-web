import { useEffect, useState } from "react"
import { MdNavigateNext } from "react-icons/md";

interface props {
    className?: string,
    isHidden: boolean,
    setIsHidden: () => void,
    speed?: number,
    dialog: string[],
}

/**
 * 
 * A functional Speech Bubble 
 * Takes a string array and will write each character on screen
 * Users can tap to continue or tap to skip through dialog
 */
function SpeechBubble({ className, isHidden = true, setIsHidden, speed = 50, dialog }: props) {
    // Typewriter effect: https://www.geeksforgeeks.org/reactjs/how-to-create-typewriter-effect-in-reactjs/

    // States for displayed text and current index
    const [curDialog, setCurDialog] = useState<number>(0);
    const [displayedText, setDisplayedText] = useState<String>('');
    const [index, setIndex] = useState<number>(0);

    const [isSpeaking, setIsSpeaking] = useState(false);

    // const [isDone, setIsDone] = useState(false);

    // Effect for writing text
    useEffect(() => {
        // console.log('SpeechBubble.tsx/useEffect is running');
        // console.log('SpeechBubble.tsx/useEffect current dialog index: ' + curDialog);
        const interval = setInterval(() => {
            setIsSpeaking(true);
            // console.log('SpeechBubble.tsx/useEffect/setInterval is running');
            if (index < dialog[curDialog].length) {  // Add a char to drawn bubble
                // console.log('SpeechBubble.tsx/useEffect: Index = ' + index);
                setDisplayedText((prev) => prev + dialog[curDialog][index]);
                setIndex(index + 1);
                // console.log(displayedText)
            } else {    // Else, clear the interval
                // console.log('clearning interval')
                setIsSpeaking(false);
                clearInterval(interval);
            }
        }, speed);

        // console.log('SpeechBubble.tsx/Index: ' + index + ' Length: ' + dialog[curDialog].length);
        if (curDialog == dialog.length) setIsHidden()
        return () => clearInterval(interval);
    }, [index, dialog, curDialog]);

    function handleNextDialog() {
        if (!isSpeaking) {
            if (curDialog == dialog.length - 1) {
                setIsHidden();
            } else {
                setDisplayedText('');
                setIndex(0);
                setCurDialog((prev) => prev + 1);
                setIsSpeaking(true);
            }
        } else {
            setDisplayedText(dialog[curDialog]);
            setIndex(dialog[curDialog].length);
            setIsSpeaking(false);
        }
    }

    return (
        <span className={`hover:cursor-pointer ${className}`}>
            {!isHidden &&
                <span className={`flex justify-center content-center rounded-3xl 
                    m-5 p-10 shadow-md shadow-amber-500 bg-white`}
                    onClick={handleNextDialog}>
                    {displayedText}
                    {!isSpeaking &&
                        <MdNavigateNext className='place-self-end text-amber-800' />
                    }
                </span>
            }
        </span>
    )
}

export default SpeechBubble
