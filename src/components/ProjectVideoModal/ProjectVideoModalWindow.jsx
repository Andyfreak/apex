import * as React from "react";
import S from "./ProjectVideoModalWindow.module.css";
import closeBtn from "./../../assets/icons8-close-button-32 (1).png";
import 'animate.css';
import {useEffect, useState} from "react";

export const ProjectVideoModalWindow = ({setOpenVideoModal, videoLink, panoramaLink}) => {
    const [typeOfView, setTypeOfView] = useState('video');

    useEffect(()=> {
        if (videoLink && panoramaLink){
            setTypeOfView('panorama')
        } else if (videoLink && !panoramaLink) {
            setTypeOfView('video')
        } else if (!videoLink && panoramaLink) {
            setTypeOfView('panorama')
        }
    },[])


    const onCloseClickHandler = () => {
        setOpenVideoModal(false);
    }
    const changeModeHandler = (type) => {
        setTypeOfView(type)
    }
    return (
        <div className={S.modalOverlay}>
            {<div className={S.modeSwither} >
                <div className={S.switherContainer} style={{visibility: videoLink && panoramaLink && "visible"}}>
                    <span className={S.toggleLink}  onClick={() => changeModeHandler('video')}>VIDEO</span>
                    /
                    <span className={S.toggleLink} style={{color: typeOfView === "panorama" && "tomato" }} onClick={() => changeModeHandler('panorama')}>RealTime Camera</span>
                </div>
                <img className={S.closeButtonPanorama} src={closeBtn} onClick={onCloseClickHandler} alt='closeButton'/>
            </div>}


            {typeOfView === "video" ?

                <div className={S.modalContainer}>
                    <video controls autoPlay className={S.modalVideoPlayer}>
                        <source src={videoLink} type="video/mp4"/>
                    </video>
                </div> :


                <div className={S.panoramaContainer}>
                    <iframe allowFullScreen={true} marginHeight="0" style={{
                        position: 'absolute',
                        bottom: '0%',
                        left: '50%',
                        right: '0',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        opacity: '1',
                        width: '95%',
                        transform: 'translate(-50%, -25%)',
                        visibility: 'visible',
                        height: '80%',
                        zIndex: '100'
                    }}
                            src={panoramaLink}>

                    </iframe>

                </div>}


        </div>
    )
}
