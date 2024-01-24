import * as React from "react";
import S from "./AdminElementComponent.module.css"
import {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";



export const AdminElementComponent = ({project, setModValue, projectTemplate}) => {
    const [projectForCorrection, setProjectForCorrection] = useState({});

    useEffect(() => {
        setProjectForCorrection(project);
    }, [project]);
    const setModValueHandler = ({el, modifiedObj}) => {

        setModValue([el, modifiedObj]);
    }
    const modElementLenghtCutter = (valueString) => {
        if (typeof valueString === "string" && valueString.length > 20) {
            const cuttedValue = valueString.split('').slice(0, 35).join('');
            return `${cuttedValue}...`
        } else if (typeof valueString === "object" && valueString.length !== 0) {
            return `${valueString.length} values`
        }
        return `${valueString}`
    }
    return (
        <div className={S.projectViewContainer}>

            {Object.keys(project).length > 1 && Object.keys(projectTemplate).map((el) =>
                <div key={uuidv4()} className={S.modElement}  onClick={()=>setModValueHandler({el:el, modifiedObj: projectForCorrection})}>
                    <div className={S.modElementTitle}>{el}:</div>
                    {modElementLenghtCutter(projectForCorrection[el])}
                </div>)}
        </div>
    )
}
