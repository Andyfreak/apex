import S from "./PopUpTitleWithSlowUnderline.module.css"
import 'animate.css'
import {useNavigate} from "react-router-dom";

export const PopUpTitleWithSlowUnderline = ({title, text, buttonName, showDivider, callbackFunk}) => {

    return (
        <div className={S.PopUpTitleWrapper} style={{visibility: showDivider? "visible" : "hidden"}}>
            <div className={S.title}
               style={{opacity: showDivider ? '100' : '0'}}>
                {title}
            </div>

            <div className={S.divider}
                  style={{transform: showDivider ? 'scaleX(1)' : 'scaleX(0)'}}>

            </div>

            <p className={S.text}
               style={{opacity: showDivider ? '100' : '0'}}>
                {text}
            </p>

            {buttonName.length > 1 ?  <button
                style={{opacity: showDivider ? '100' : '0'}}
                className={S.titleBtn}
                onClick={callbackFunk}
            >
                {buttonName}
            </button> : null}



        </div>
    )
}
