import * as React from "react";
import S from "./Admin.module.css"
import {useEffect, useState} from "react";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {CustomButton} from "../../components/common/CustomButtons/CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {AdminElementComponent} from "../../components/AdminComponents/AdminElementComponent/AdminElementComponent";
import {AdminModal} from "../../components/AdminComponents/AdminModal/AdminModal";
import {actionsTeam, teamMemberTemplate} from "../../store/teamReducer/teamReducer";
import {actions, projectTemplate} from "../../store/projectsReducer/projectsReducer";
import {PageForAuthorization} from "../PageForAuthorization/PageForAuthorization";
import goAway from "./../../assets/icons8-emergency-exit-50.png"


export const Admin = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
    const team = useSelector(state => state.team.team);
    const [isAuthorized, setAuthorized] = useState(false);



    const [menuView, setMenuView] = useState(false);
    const [adminFile, setAdminFile] = useState('');
    const [popUp, setPopUp] = useState(false);
    const [modValue, setModValue] = useState([])
    const [currentModificatedDataObject, setCurrentModificatedDataObject] = useState({});

    useEffect(()=> {
        if (localStorage.getItem('isAdminAuthorized') === 'true'){
            setAuthorized(true);
        }
    },[])

    const projectFetching = () => {
        setAdminFile('projects');
    };
    const teamFetching = () => {
        setAdminFile('team');
    }
    const goAwayBtnHandler = () => {
        localStorage.clear('isAdminAuthorized');
        window.location.hash = '/'
    }
    const onAddNewProject = () => {
        if (adminFile === "projects") {
            setCurrentModificatedDataObject(projectTemplate)
        } else if (adminFile === "team") {
            setCurrentModificatedDataObject(teamMemberTemplate);
        }
    }
        const onDeleteProjectPress = () => {
            const fileToChange = adminFile === 'team' ? "apexTeam.json" : "apexProjects.json";
            const session = axios.create();
            let objectToSend = adminFile === 'team' ? [...team] : [...projects.projects];
            let positionOfReplacedElement = objectToSend.find((el) => el.id === currentModificatedDataObject.id);
            let aa = objectToSend.indexOf(positionOfReplacedElement);
            objectToSend.splice(aa, 1);
            setCurrentModificatedDataObject({});

            adminFile === 'team' ? dispatch(actionsTeam.deletePersonalCardInfo(objectToSend)):
                dispatch(actions.deleteExactProjectCard(objectToSend));
            session.put(`https://apextest12.b-cdn.net/apex_data/${fileToChange}`, objectToSend, {
                headers: {
                    AccessKey: '67fbf3d6-627c-4475-a1153abb5c81-8690-4880',
                    accept: '*/*'
                }
            }).then((data) => {
                if (data.status === 201) {
                    setPopUp(true);
                    let timer = setTimeout(() => {
                        setPopUp(false);
                        clearTimeout(timer);
                    }, 3000)
                }
            })
        }
        const choseObjectForModificationChoosen = (chosenProject) => {
            setCurrentModificatedDataObject(chosenProject)
        }
        const onSaveProjectsFilePress = () => {
        const fileToChange = adminFile === 'team' ? "apexTeam.json" : "apex_projects(12).json";
            const session = axios.create();
            let objectToSend = adminFile === 'team' ? [...team] : [...projects.projects];
            let positionOfReplacedElement = objectToSend.find((el) => el.id === currentModificatedDataObject.id);

            if (positionOfReplacedElement) {
                let aa = objectToSend.indexOf(positionOfReplacedElement);
                objectToSend[aa] = currentModificatedDataObject;
                setCurrentModificatedDataObject({})
            } else {
                objectToSend.push(currentModificatedDataObject)
                setCurrentModificatedDataObject({})
            }
            adminFile === 'team' ? dispatch(actionsTeam.updatePersonalCardInfo(objectToSend)):
                dispatch(actions.updateProjectCardInfo(objectToSend));
            session.put(`https://apextest12.b-cdn.net/${fileToChange}`, objectToSend, {
                headers: {
                    AccessKey: '67fbf3d6-627c-4475-a1153abb5c81-8690-4880',
                    accept: '*/*'
                }
            }).then((data) => {
                if (data.status === 201) {
                    setPopUp(true);
                    let timer = setTimeout(() => {
                        setPopUp(false);
                        clearTimeout(timer);
                    }, 3000)
                }
            })


        }

        return (
            menuView ?
                <div className={S.projectsContainer}>
                    <Header setMenuView={setMenuView} menuView={menuView}/>
                    <MobileMenu/>
                </div>
                :
                <div>
                <div>
                    <Header setMenuView={setMenuView} menuView={menuView}/>
                    {!isAuthorized ? <PageForAuthorization setAuthorized={setAuthorized}/> :
                    <div className={S.admin_home}>
                        <div className={S.linksWrapper}>
                            <CustomButton name={'projects'} callback={projectFetching}/>
                            <CustomButton name={'Team Members'} callback={teamFetching}/>
                            <img className={S.goAwayBtn} src={goAway} onClick={goAwayBtnHandler}/>
                        </div>
                        <div className={S.contentWrapper}>
                            <div className={S.projectTitleWrapper}>
                                {adminFile === 'projects' &&
                                    projects.projects.map((project) =>
                                        <div className={S.projectWrapper} key={project.id}
                                             onClick={() => choseObjectForModificationChoosen(project)}>
                                            <div className={S.projectTitle}>{project.title}</div>
                                        </div>)}
                                {adminFile === 'team' &&
                                    team.map((team) =>
                                        <div className={S.projectWrapper} key={team.id}
                                             onClick={() => choseObjectForModificationChoosen(team)}>
                                            <div className={S.projectTitle}>{team.name}</div>
                                        </div>)}

                                {adminFile === '' &&
                                    <div className={S.chooseSubjectText}>choose subject for change!</div>}


                            </div>


                            {adminFile !== '' && Object.keys(currentModificatedDataObject).length < 1 &&
                                <div className={S.projectTitleWrapper}>
                                    <CustomButton name={`add new ${adminFile === 'projects' ? "project": "team member"}`} callback={onAddNewProject}/>
                                </div>}


                            <div className={S.projectTitleWrapper}>
                                <AdminElementComponent project={currentModificatedDataObject} setModValue={setModValue}
                                                       projectTemplate={adminFile === 'projects'? projectTemplate : teamMemberTemplate}/>
                            </div>
                            <div className={S.adminButtonsContainer}>
                                {Object.keys(currentModificatedDataObject).length > 1 &&
                                    <CustomButton name={'Save changes'} callback={onSaveProjectsFilePress}/>}
                                {Object.keys(currentModificatedDataObject).length > 1 &&
                                    <CustomButton name={'delete item'} callback={onDeleteProjectPress}/>}
                                {Object.keys(currentModificatedDataObject).length > 1 &&
                                    <CustomButton name={'leave without changes'}
                                                  callback={() => setCurrentModificatedDataObject({})}/>}

                            </div>
                        </div>
                        {popUp && <div className={`${S.popupWindowInfo} animate__bounceInDown animate__animated`}>
                            <div style={{color: 'green', fontWeight: "bold"}}>Success!!!</div>
                            <div>Data was changed!;)</div>
                        </div>}
                    </div>}
                    {Object.keys(modValue).length > 0 &&
                        <AdminModal
                            setModValue={setModValue}
                            modValue={modValue}
                            setCurrentModificatedDataObject={setCurrentModificatedDataObject}
                        />}

                </div>
                    </div>
        )
    }
