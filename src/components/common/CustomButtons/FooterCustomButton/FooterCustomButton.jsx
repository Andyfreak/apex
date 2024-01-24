import * as React from "react";
import S from "./FooterCustomButton.module.css"

export const FooterCustomButton = ({name, callback}) => {
    return (
        <button className={S.footerCustomButton} onClick={callback}>{name}</button>
    )
}
