import * as React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import S from "./ProjectView.module.css"
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {PanePanel} from "../../components/PanePanel/PanePanel";
import {ProjectPhoto} from "../Projects/ProjectPhoto/ProjectPhoto";
import {scrollUpFast} from "../Home/Home";
import play1 from "./../../assets/play.png"
import {ProjectVideoModalWindow} from "../../components/ProjectVideoModal/ProjectVideoModalWindow";
import {useDispatch, useSelector} from "react-redux";
import {getAllProjectsTC} from "../../store/projectsReducer/projectsReducer";
import {v4 as uuidv4} from "uuid";
import ResponsiveGallery from 'react-responsive-gallery';



export const ProjectView = () => {
    const projects = useSelector(state => state.projects.projects);
    const dispatch = useDispatch();
    const [menuView, setMenuView] = useState(false);
    const [element, setElement] = useState({});
    const [openVideoModal, setOpenVideoModal] = useState(false);

    const photoSizeNumber = [1,2,3,4,5,6,5,4,3,2];


    const [photosArr, setPhotosArr] = useState([]);
    const [extendedBlock, setExtendedBlock] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    const {id} = useParams();


    const onPlayClickHandler = () => {
        setOpenVideoModal(true);
    }



    useEffect(() => {
        scrollUpFast();
        if (projects.length < 2) {
            dispatch(getAllProjectsTC()).then((data)=> {
               const currentProgect = data.find((el) => el.id === +id);
                setElement(currentProgect);
                photoArrHandler(currentProgect.photos)

            });
        } else {
            const currentProgect = projects.find((el) => el.id === +id);
            setElement(currentProgect);
            photoArrHandler(currentProgect.photos)

        }
        }, []);
    const photoArrHandler = (photos) => {
        let arr = [];
        photos.forEach((photoLink) => arr.push({
            src: photoLink,
            orderS: photoSizeNumber[Math.ceil(Math.random()*10).toFixed()],
            orderM: photoSizeNumber[Math.ceil(Math.random()*10).toFixed()],
            orderL: photoSizeNumber[Math.ceil(Math.random()*10).toFixed()],}))
        return setPhotosArr(arr)
    }


    return (
        menuView ?
            <div className={S.projectViewContainer}>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :

            <div className={S.projectViewContainer}>

                {Object.keys(element).length > 0 ?
                    <div>
                    <Header setMenuView={setMenuView} menuView={menuView}/>
                <div className={S.detailBlockExtention}
                     onClick={() => setExtendedBlock({isPaneOpenLeft: true})}>Details
                </div>



                <section className={S.topWrapper}
                style={{backgroundImage: `url(${element.mainPhoto})`}}>
                    <div className={S.topBlockTextWrapper}>
                        <div className={S.topWrapper_cityContainer}>
                            <div className={S.topBlockHr}></div>
                            <p className={S.topLocaton}>{element.locationCity}, {element.locationState}</p>
                            <div className={S.topBlockHr}></div>
                        </div>

                        <h1 className={S.topTitle}>{element.title}</h1>
                        <p className={S.topText}>{element.description}</p>
                    </div>
                    <PanePanel state={extendedBlock} setState={setExtendedBlock} element={element}/>
                </section>


                <section className={S.bodyWrapper}>
                    {element.projectVideo  &&
                        <div className={S.projectVideo}>
                            <img className={S.playBtnOverlay}
                                 src={play1} alt={"playBtn"}
                                 onClick={onPlayClickHandler}
                                 />
                            <h2 className={S.projectVideoPlayerOverlayTitle} dangerouslySetInnerHTML={{__html: element.projectPanorama ? 'VIEW PROJECT OVERVIEW<br/> + <br/> realtime panoramic view' : 'VIEW PROJECT OVERVIEW' }}></h2>
                            <div className={S.projectVideoPlayerOverlay}></div>
                        <video autoPlay muted loop className={S.projectVideoPlayer}>
                            <source src={element.projectVideo} type="video/mp4"/>
                        </video>
                    </div>}
                    {element.projectPanorama && !element.projectVideo  &&
                        <div className={S.projectVideo}>
                            <img className={S.playBtnOverlay}
                                 src={play1} alt={"playBtn"}
                                 onClick={onPlayClickHandler}
                            />
                            <h2 className={S.projectVideoPlayerOverlayTitle}>realtime panoramic project view</h2>
                            <div className={S.projectVideoPlayerOverlay}></div>
                            <video autoPlay muted loop className={S.projectVideoPlayer}>
                                <source src="https://apextest12.b-cdn.net/projects/A%20top%20projects%20video/proj_top1.mp4" type="video/mp4"/>
                            </video>
                        </div>}



                    {
                        // element.photos && element.photos.map((photo) => <ProjectPhoto key={uuidv4()} photo={photo}/>)
                        <ResponsiveGallery
                            imagesMaxWidth={{xs: 100,s: 100,m: 100,l: 100,xl: 100,xxl:100}}
                            numOfImagesPerRow={{xs: 1,s: 2,m: 3,l: 3,xl: 4, xxl:3}}
                            useLightBox images={photosArr}/>
                    }
                </section>
                {openVideoModal &&


                    <ProjectVideoModalWindow
                            setOpenVideoModal={setOpenVideoModal}
                            videoLink={element.projectVideo}
                            panoramaLink={element.projectPanorama}
                    />

                }
                <FooterBlock/>
                    </div> : <span>PRELOADER!!!</span>}</div>
    )
}
