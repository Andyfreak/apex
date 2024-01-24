import * as React from "react";
import {Header} from "../../components/common/Header/Header";
import S from "./Team.module.css"
import {PersonalCard} from "../../components/PersonalCard/PersonalCard";
import {ModalWindow} from "../../components/ModalWindow/ModalWindow";
import {useEffect, useState} from "react";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {getAllTeamMembersTC} from "../../store/teamReducer/teamReducer";
import {scrollUpFast} from "../Home/Home";
import {useNavigate} from "react-router-dom";





export const Team = () => {
    const creators = ['Valentino Caushi', 'Joel Spalding'];
    const excellence = ['Valentino Caushi', 'Joel Spalding','Adrian Caushi', 'Rodrigo Martinez', 'Scott Rosengren', 'Kim Verduzco','Djordje Djanjus', 'Noah Morkunas', 'Bashkim Tafilaj',
        'Gezim Qelaj', 'Matt Shafer', 'Kyle Grunewald', 'Dharmendra Choudhary','Kevin Smith','Agron Ferataj '];
    const sparks  = ['Nickole Lynch', 'Alesia Hushaw', 'Taylor Vestuto','Giovanna Caushi', 'Bela Kuminja', 'Elyse Jansma','Entela Sadikaj'];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teamArr = useSelector(state => state.team.team);


    const [menuView, setMenuView] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [showedBio, setShowedBio] = useState({});
    const [personTitle, setPersonTitle] = useState('');


    const creatorsArr = teamArr.filter((card)=> creators.includes(card.name));
    const excellenceArr = teamArr.filter((card)=> excellence.includes(card.name));
    const sparksArr = teamArr.filter((card)=> sparks.includes(card.name));



    useEffect(()=> {
        dispatch(getAllTeamMembersTC());
        scrollUpFast();
    },[])
    const onMouseOver = (person) => {
        setPersonTitle(person);
    };

    return (
        menuView ?
            <div className={S.teamContainer}>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :

            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <section className={S.teamTop}>
                    <div className={S.teamTopOverlay}>
                        <div className={S.shadowBar}></div>
                        <h1 className={S.teamTitle}>The Apex team</h1>
                        <p className={S.teamTitleBottom}>
                            Every Apex project starts with a team of experienced, determined professionals.
                            These individuals are eager to develop their skills and collaborate to create
                            seamless building projects for our clients.
                        </p>
                    </div>
                </section>
                <section className={S.teamPhotos}>
                    <div className={S.joelFinder}
                         onMouseOver={()=>onMouseOver("Joel")}
                         onMouseLeave={()=>onMouseOver("")}
                    >
                        <div className={S.personTitleContainer} style={{opacity: personTitle === 'Joel' && "90%" }}>
                            <div className={S.personTitle}>Joel Spalding</div>
                            <div className={S.personPosition}>President</div>
                        </div>
                    </div>

                    {/*<div className={S.paolaFinder}*/}
                    {/*     onMouseOver={()=>onMouseOver("Paula")}*/}
                    {/*     onMouseLeave={()=>onMouseOver("")}*/}
                    {/*>*/}
                    {/*    <div className={S.personTitleContainer} style={{opacity: personTitle === 'Paula' && "90%" }}>*/}
                    {/*        <div className={S.personTitle}>Paola Placko</div>*/}
                    {/*        <div className={S.personPosition}>Lead Estimator / Architectural Designer</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={S.valentinoFinder}
                         onMouseOver={()=>onMouseOver("Valentino")}
                         onMouseLeave={()=>onMouseOver("")}
                    >
                        <div className={S.personTitleContainer} style={{opacity: personTitle === 'Valentino' && "90%" }}>
                            <div className={S.personTitle}>Valentino Caushi</div>
                            <div className={S.personPosition}>CEO</div>
                        </div>
                    </div>


                    <picture>
                        <img className={S.generalPhoto}
                             src={"https://apextest12.b-cdn.net/generalPhotosApex/groupPhotoS.jpg"}
                             alt={'generalPhoto'}/>
                    </picture>
                    <div className={S.joinTeamWrapper} onClick={()=> navigate(`/contacts/careers`)}>
                            <span className={S.joinTeamBtn}>Join Our Team</span>
                    </div>

                </section>



                {/*<section className={S.teamBlock}>*/}
                {/*    <h3 className={S.teamBlockTitle}>The Creators behind Apex</h3>*/}
                {/*<div className={S.teamPhotos}>*/}

                {/*    {creatorsArr.map((card,i) =>*/}

                {/*            <PersonalCard*/}
                {/*            key={card.id}*/}
                {/*            card={card}*/}
                {/*            setOpenModal={setOpenModal}*/}
                {/*            setShowedBio={setShowedBio}*/}
                {/*            showedBio={showedBio}*/}
                {/*            openModal={openModal}*/}
                {/*            lessContent={true}/>*/}
                {/*    )*/}
                {/*    }*/}
                {/*</div>*/}
                {/*</section>*/}

                {/*<section className={S.teamBlock}>*/}
                {/*    <h3 className={S.teamBlockTitle}>The Creators behind Apex</h3>*/}
                {/*    <div className={S.teamPhotos}>*/}

                {/*        {creatorsArr.map((card,i) =>*/}

                {/*            <PersonalCard*/}
                {/*                key={card.id}*/}
                {/*                card={card}*/}
                {/*                setOpenModal={setOpenModal}*/}
                {/*                setShowedBio={setShowedBio}*/}
                {/*                showedBio={showedBio}*/}
                {/*                openModal={openModal}*/}
                {/*                lessContent={false}/>*/}
                {/*        )*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</section>*/}


                <section className={S.teamBlock}>
                    <h3 className={S.teamBlockTitle}>The team that provides the Excellence to Apex</h3>
                    <div className={S.teamPhotos}>

                        {excellenceArr.map((card,i) =>

                            <PersonalCard
                                key={card.id}
                                card={card}
                                setOpenModal={setOpenModal}
                                setShowedBio={setShowedBio}
                                showedBio={showedBio}
                                openModal={openModal}/>

                        )
                        }

                    </div>
                </section>
                <section className={S.teamBlock}>
                    <h3 className={S.teamBlockTitle}>The Team that sparks the light for Success to Apex</h3>
                    <div className={S.teamPhotos}>

                        {sparksArr.map((card,i) =>

                            <PersonalCard
                                key={card.id}
                                card={card}
                                setOpenModal={setOpenModal}
                                setShowedBio={setShowedBio}
                                showedBio={showedBio}
                                openModal={openModal}/>

                        )
                        }

                    </div>
                </section>


                {openModal && showedBio &&
                    <ModalWindow
                        setOpenModal={setOpenModal}
                        setShowedBio={setShowedBio}
                        showedBio={showedBio}
                    />}
                <FooterBlock/>

            </div>

    )
}
