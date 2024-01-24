import * as React from "react";
import S from "./ModalWindow.module.css";
import closeBtn from "./../../assets/icons8-close-button-32 (1).png";
import 'animate.css';
export const ModalWindow = ({setOpenModal, setShowedBio, showedBio}) => {
    const onCloseClickHandler = () => {
        setOpenModal(false);
        setShowedBio({});
        document.body.style.overflow = 'auto';
    }
    return (
        <div className={S.personModalContainer} >
            <div className={S.modalOverlay}></div>
            <div className={`${S.modalContainer} animate__animated animate__fadeIn`}
                 style={{backgroundImage: `url(${showedBio.photo})`}}>
                <div className={S.modalContainerInnerOverlay}>

                    <img className={S.closeButton} src={closeBtn} onClick={onCloseClickHandler} alt='closeButton'/>
                    <div className={S.modalContainerInner}>

                        <div className={`${S.title} animate__animated animate__fadeInUp`}>
                            <h3>{showedBio.name}</h3>
                        </div>
                        <div className={`${S.body} animate__animated animate__fadeInUp`} >
                            <p className={S.modalText}>{showedBio.aboutPerson}</p>
                            <br/>
                            <p dangerouslySetInnerHTML={{__html: showedBio.bottomDescription}} className={S.modalText}/>
                        </div>
                        <div className={S.footer}></div>
                    </div>
                </div>

            </div>


        </div>)
}
