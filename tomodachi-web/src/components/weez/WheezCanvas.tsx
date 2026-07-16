import { Live2D } from 'live2d-react'
import { useEffect, useState } from 'react'
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

    const base = import.meta.env.BASE_URL;
    const modelJsonPath = `${base}weezFolder/weez.model3.json`;
    const coreScriptSrc = `${base}live2dcubismcore.min.js`;

    return (
        <div>
            {selectedFood ? (
                <img className='absolute w-24 h-24' src={selectedFood} alt='a food' />
            ) : null}

            {curAnim == 'Fed' ?
                <Live2D
                    className='w-full h-full'
                    idleMotionGroup='Fed'
                    modelJsonPath={modelJsonPath}
                    coreScriptSrc={coreScriptSrc}
                    renderOptions={{
                        fitMode: 'height',
                        anchorY: 'bottom',
                    }}
                /> : <Live2D
                    className='w-full h-full'
                    idleMotionGroup='Idle'
                    modelJsonPath={modelJsonPath}
                    coreScriptSrc={coreScriptSrc}
                    renderOptions={{
                        fitMode: 'height',
                        anchorY: 'bottom',
                    }}
                />}
        </div>
    );
}

export default WheezCanvas