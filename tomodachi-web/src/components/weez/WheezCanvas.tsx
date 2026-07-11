import { Live2D } from 'live2d-react'
import React from 'react'

function WheezCanvas() {
    const modelJsonUrl = new URL("../../assets/drawnAssets/weezFolder/weez.model3.json", import.meta.url).href;
    return (
        <Live2D className=''
            modelJsonPath={modelJsonUrl} coreScriptSrc="/live2dcubismcore.min.js"
            renderOptions={{
                fitMode:'height',
                anchorY: 'bottom'
            }}>
        </Live2D>

    )
}

export default WheezCanvas