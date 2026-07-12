import React, { useLayoutEffect } from 'react';
import CustomizeButton from '../components/CustomizeButton';
import browsIcon from '../assets/drawnAssets/browButton.png';
import clothesIcon from '../assets/drawnAssets/clothesButton.png';
import eyeIcon from '../assets/drawnAssets/eyeButton.png';
import hairIcon from '../assets/drawnAssets/hairButton.png';
import mouthIcon from '../assets/drawnAssets/mouthButton.png';
import noseIcon from '../assets/drawnAssets/noseButton.png';
import WheezCanvas from '../components/weez/WheezCanvas';


function AddWeez() {

    useLayoutEffect(() => {
                document.body.style.backgroundColor = "green"
    });

    

    return(
        <>

        <div className="justify-center space-x-5">
            <CustomizeButton iconsrc={browsIcon} numberid={1}></CustomizeButton>
            <CustomizeButton iconsrc={clothesIcon} numberid={2}></CustomizeButton>
            <CustomizeButton iconsrc={eyeIcon} numberid={3}></CustomizeButton>
            <CustomizeButton iconsrc={hairIcon} numberid={4}></CustomizeButton>
            <CustomizeButton iconsrc={mouthIcon} numberid={5}></CustomizeButton>
            <CustomizeButton iconsrc={noseIcon} numberid={6}></CustomizeButton>
        </div>

        <WheezCanvas></WheezCanvas>
        


        </>
    )
    
}


export default AddWeez