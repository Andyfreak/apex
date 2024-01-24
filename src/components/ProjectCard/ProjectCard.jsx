import * as React from "react";
import S from "./ProjectCard.module.css";
import {useState} from "react";
import 'animate.css'
import {useNavigate} from "react-router-dom";



export const ProjectCard = ({project}) => {
    const [mouseOverId, setMouseOverId] = useState("");

    const navigate = useNavigate();

    const onProjectCardHover = () => {
        setMouseOverId(project.id);

    };
    const onProjectLeaveHandler = () => {
        setMouseOverId("");
    };
    const locationCreator = (state, city) => {
        return `${city}, ${state}`
    };
    const onClickHandler = (mouseOverId) => {
        if (mouseOverId) {
            navigate(`/projects/project_view/${project.id}`)
        }
    };

    return (
        <div className={`${S.projectCardContainer} animate__animated animate__fadeIn`}
             style={{backgroundImage: `url(${project.mainPhoto})`}}
             onMouseOver={onProjectCardHover}
             onMouseLeave={onProjectLeaveHandler}
             onClick={onClickHandler}
        >
            <div className={S.projectContainerHover}
                 style={{opacity: mouseOverId === project.id ? '80%' : '0%'}}>
            </div>

            <div className={S.titleContainer}>
                <p className={S.projectTitle}>
                    {project.title}
                </p>

                <p className={S.projectText}>
                    {locationCreator(project.locationState, project.locationCity)}
                </p>
            </div>


        </div>
    )
}

