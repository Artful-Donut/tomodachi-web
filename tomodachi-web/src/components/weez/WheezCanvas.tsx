import { Live2D } from 'live2d-react'
import { useEffect } from 'react'
import fed from '../../assets/drawnAssets/weezFolder/fed.motion3.json'
interface Props {
    selectedFood?: string;
    setSelectedFood: () => void;
}

function WheezCanvas({ selectedFood, setSelectedFood }: Props) {
    useEffect(() => {
        if (!selectedFood) return;
        const id = setTimeout(setSelectedFood, 300);
        return () => clearTimeout(id);
    }, [selectedFood, setSelectedFood]);

    const modelJsonUrl = new URL("../../assets/drawnAssets/weezFolder/weez.model3.json", import.meta.url).href;
    return (
        <div>
            {selectedFood ? (
                <img className='absolute w-24 h-24' src={selectedFood} alt='a food' />
            ) : null}

            <Live2D
                className='w-full h-full'
                idleMotionGroup='fed'
                tapBodyMotionGroup='fed'
                modelJsonPath={modelJsonUrl}
                coreScriptSrc="/live2dcubismcore.min.js"
                renderOptions={{
                    fitMode: 'height',
                    anchorY: 'bottom',
                }}
            />
        </div>
    );
}

export default WheezCanvas