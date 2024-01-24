import * as React from "react";
import S from "./ProjectVideoPanoramaView.module.css";
import closeBtn from "./../../assets/icons8-close-button-32 (1).png";
import 'animate.css';
export const ProjectVideoPanoramaView = ({setOpenVideoModal, panoramaViewLink}) => {
    const onCloseClickHandler = () => {
        setOpenVideoModal(false);
    }
    return (
        <div className={S.modalOverlay}>
            <div className={S.modalContainer}>
                <img className={S.closeButton} src={closeBtn} onClick={onCloseClickHandler} alt='closeButton'/>


                <div className={S.panoramaContainer}
                     style={{position: 'relative', paddingBottom: '56.25%', overflow: 'auto'}}>
                    <iframe allowFullScreen="allowfullscreen" marginHeight="0" style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        opacity: '1',
                        width: '100%',
                        height: '100%',
                        visibility: 'visible'
                    }}
                            src="https://share.earthcam.net/tJ90CoLmq7TzrY396Yd88M8kD6uVDAh5cuGUJ2x3PkY!.tJ90CoLmq7TzrY396Yd88BhrqY5YnTVnfhoHEYLOzTo">

                    </iframe>
                </div>



            </div>
        </div>
    )
}
