import * as React from "react";
import S from "./CustomButton.module.css"

export const CustomButton = ({name, callback, color, bcgColor, width}) => {
    return (
        <button className={S.customButton}
                style={{
                    color: color,
                    backgroundColor: bcgColor,
                    width: width}} onClick={callback}>
            {name}
        </button>
    )
}
