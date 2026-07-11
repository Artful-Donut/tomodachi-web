import React, { useLayoutEffect } from 'react';
import CustomizeButton from '../components/CustomizeButton';
import browsIcon from '../assets/drawnAssets/browButton.png';
import clothesIcon from '../assets/drawnAssets/clothesButton.png';
import eyeIcon from '../assets/drawnAssets/eyeButton.png';
import hairIcon from '../assets/drawnAssets/hairButton.png';
import mouthIcon from '../assets/drawnAssets/mouthButton.png';
import noseIcon from '../assets/drawnAssets/noseButton.png';


function AddWeez() {

    useLayoutEffect(() => {
                document.body.style.backgroundColor = "red"
        });

    return(
        <>
        <div className="justify-center space-x-5">
            
            <CustomizeButton iconsrc={browsIcon}></CustomizeButton>
            <CustomizeButton iconsrc={clothesIcon}></CustomizeButton>
            <CustomizeButton iconsrc={eyeIcon}></CustomizeButton>
            <CustomizeButton iconsrc={hairIcon}></CustomizeButton>
            <CustomizeButton iconsrc={mouthIcon}></CustomizeButton>
            <CustomizeButton iconsrc={noseIcon}></CustomizeButton>

        </div>
        </>
    )
    
}


export default AddWeez