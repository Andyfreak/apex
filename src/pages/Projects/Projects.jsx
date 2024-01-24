import * as React from "react";
import S from "./Projects.module.css"
import {useEffect, useState} from "react";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {ProjectCard} from "../../components/ProjectCard/ProjectCard";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {getAllProjectsTC, getFilteredProjectsTC} from "../../store/projectsReducer/projectsReducer";
import {scrollUpFast} from "../Home/Home";
import Slider from "react-slick";

export const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);

    const [menuView, setMenuView] = useState(false);
    const [showProjectTypeDropdown, setShowProjectTypeDropdown] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2300000,
        speed: 20,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
    };

    useEffect(()=> {
        dispatch(getAllProjectsTC());
        scrollUpFast();
    },[])

    const dropDownProjectTypeHandler = (type) => {
        setShowProjectTypeDropdown(!showProjectTypeDropdown);
    }
    const dropLocationTypeHandler = () => {
        setShowLocationDropdown(!showLocationDropdown);
    }
    const selectTypeHandler = (type) => {
        dispatch(getFilteredProjectsTC(type));
    };
    return (
        menuView ?
            <div className={S.projectsContainer}>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <div className={S.topWrapper}>






                    <div className={S.videoBlockWrapper}

                    >

                        <div className={S.videoBlockOverlayWrapper}></div>
                        <Slider {...settings}>
                            <div>
                                <video
                                    className={S.projectsBlockVideoBg}
                                    autoPlay="autoplay" muted loop playsInline>
                                    <source src="https://apextest12.b-cdn.net/projects/A%20top%20projects%20video/proj_top1.mp4" type="video/mp4"/>
                                </video>
                            </div>
                        </Slider>
                        <h1 className={S.projectTitle}>ALL PROJECTS</h1>
                    </div>





                    <div className={S.buttonsContainer}>
                        <div className={S.projectTypeButton}
                             onClick={dropDownProjectTypeHandler}
                        >
                            PROJECT TYPE
                            <div className={`${S.dropdown_content} ${showProjectTypeDropdown && S.show }  animate__animated animate__fadeIn`}>
                                <div className={S.dropDownSelect} onClick={()=>selectTypeHandler('Municipal')}>Municipal</div>
                                <div className={S.dropDownSelect} onClick={()=>selectTypeHandler('Housing')}>Housing</div>
                                <div className={S.dropDownSelect} onClick={()=>selectTypeHandler('Office')}>Office</div>
                                <div className={S.dropDownSelect} onClick={()=>selectTypeHandler('Small project')}>Small project</div>
                            </div>
                        </div>

                        <div className={S.projectTypeButton} onClick={dropLocationTypeHandler}

                        >
                            LOCATION
                            <div className={`${S.dropdown_content} ${showLocationDropdown && S.show }  animate__animated animate__fadeIn`}>
                                <div className={S.dropDownSelect}>chicago, il</div>
                                <div className={S.dropDownSelect}>other</div>

                            </div>
                        </div>
                    </div>
                </div>


                <section className={S.projectBody}>
                    {projects.projects.map((project) =>
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />)
                    }
                </section>
                <FooterBlock/>
            </div>
    )
}
