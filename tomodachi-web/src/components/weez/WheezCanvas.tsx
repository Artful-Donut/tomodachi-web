import { Live2D } from 'live2d-react'
import { useEffect, useState } from 'react'
import fed from '../../assets/drawnAssets/weezFolder/fed.motion3.json'
interface Props {
    selectedFood?: string;
    setSelectedFood: () => void;
}

function WheezCanvas({ selectedFood, setSelectedFood }: Props) {
    const [curAnim, setCurAnim] = useState('Fed');
    useEffect(() => {
        if (selectedFood == undefined) {
            setCurAnim('Idle');
            return;
        }
        setCurAnim('Fed');
        const id = setTimeout(() => {
            setSelectedFood();
        }, 2000);
        return () => {
            clearTimeout(id);
        };
    }, [selectedFood, setSelectedFood]);

    const modelJsonUrl = new URL("../../assets/drawnAssets/weezFolder/weez.model3.json", import.meta.url).href;
    return (
        <div>
            {selectedFood ? (
                <img className='absolute w-24 h-24' src={selectedFood} alt='a food' />
            ) : null}

            {curAnim == 'Fed' ?
            <Live2D
                className='w-full h-full'
                idleMotionGroup='Fed'
                modelJsonPath={modelJsonUrl}
                coreScriptSrc="/live2dcubismcore.min.js"
                renderOptions={{
                    fitMode: 'height',
                    anchorY: 'bottom',
                }}
            /> : <Live2D
                className='w-full h-full'
                idleMotionGroup='Idle'
                modelJsonPath={modelJsonUrl}
                coreScriptSrc="/live2dcubismcore.min.js"
                renderOptions={{
                    fitMode: 'height',
                    anchorY: 'bottom',
                }}
            /> }
        </div>
    );
}

export default WheezCanvas