import * as React from "react";
import S from "./PersonalCard.module.css"
import {useState} from "react";
import {PopUpTitleWithSlowUnderline} from "../common/PopUpTiTleWithSlowUnderline/PopUpTitleWithSlowUnderline";
import noAccPhoto from "./../../assets/no-profile-picture-icon.webp"
import {Waypoint} from "react-waypoint";


export const PersonalCard = ({card, setOpenModal, setShowedBio, lessContent}) => {
    const [mouseOverId, setMouseOverId] = useState("");
    const [showTitle, setShowTitle] = useState(false);

    const onPersonCardHover = () => {
        setMouseOverId(card.id);
        let timer = setTimeout(()=> {
            setShowTitle(true);
            clearTimeout(timer);
        },200)

    }
    const onMouseLeaveHandler = () => {
        setMouseOverId("");
        setShowTitle(false);
    }
    const onClickHandler = () => {
        setOpenModal(true);
        setShowedBio(card);
        document.body.style.overflow = 'hidden';
    }
const onPersonCardInViewScroll = () => {
        if(window.innerWidth <= 740) {
            onPersonCardHover();
        }
}
const leavePersonCardFromView = () => {
    if(window.innerWidth <= 740) {
        onMouseLeaveHandler();
    }
}
    return (

        <div
             // className={`${S.personalCardContainer}  animate__animated animate__fadeIn`}
             className={`${lessContent ? S.personalCardContainerCreators : S.personalCardContainer}  animate__animated animate__fadeIn`}
             style={card.photo ? {backgroundImage: `url(${card.photo})`}: {backgroundImage: `url(${noAccPhoto})`} }
             onMouseOver={onPersonCardHover}
             onMouseLeave={onMouseLeaveHandler}
             onClick={onClickHandler}
        >
            <div className={S.personalCardContainerOverlay} style={{opacity: mouseOverId === card.id? '80%': '0%'}}></div>
            <Waypoint
                bottomOffset={'100px'}
                topOffset={'100px'}
                onEnter={onPersonCardInViewScroll}
                onLeave={leavePersonCardFromView}
            />

            {<div className={S.personalCardTitle}>
                {mouseOverId === card.id && <PopUpTitleWithSlowUnderline title={card.name} callbackFunk={onClickHandler} buttonName={'view bio'} showDivider={showTitle}/>}
            </div>}
        </div>

    )
}
