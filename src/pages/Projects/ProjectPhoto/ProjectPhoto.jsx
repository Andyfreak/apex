import * as React from "react";
import {useEffect, useState} from "react";


export const ProjectPhoto = ({photo}) => {
    const possiblePhotoWidth = [800,1100,920,1000,900,690,700,950,1150,880,720]
    const [widthOfProjectPhoto, setWidthOfProjectPhoto] = useState(5);
    useEffect(()=> {
        const chooseWidthOfPhoto = Math.random().toFixed(1)*10;
        setWidthOfProjectPhoto(possiblePhotoWidth[chooseWidthOfPhoto]);
        },[])
    return (
        <img style={{maxWidth: `${widthOfProjectPhoto}px`, width:'100%'}} src={photo} alt={'objectPhoto'}/>
    )
}
