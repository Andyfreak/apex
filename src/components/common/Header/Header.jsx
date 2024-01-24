import S from "./Header.module.css";
import logo from "../../../assets/logo.webp";
import NavigationPanel from "../../NavigationPanel/NavigationPanel";
import Hamburger from 'hamburger-react'
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Header = ({setMenuView, menuView}) => {
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate();
    const onMenuBarsHandler = () => {
        setMenuView(!menuView);
        setOpen(!isOpen);
    }
    const onLogoClickHandler = () => {
        navigate('/');
    }
    return (
        <section className={S.header} id="1212">
            <picture>
                <img className={S.headerImg} onClick={onLogoClickHandler} src={logo} alt='ApexLogo'/>
            </picture>
            <div className={S.menuNav}> <NavigationPanel/></div>
            <div className={S.menuBars}>
                <Hamburger toggled={menuView} toggle={onMenuBarsHandler} size={40} direction="right" color="#d70329"/>
            </div>
        </section>
    )
}
