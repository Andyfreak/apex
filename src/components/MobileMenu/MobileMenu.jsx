import S from './MobileMenu.module.css'
import {Link} from "react-router-dom";
import * as React from "react";


export const MobileMenu = ({setMenuView}) => {
    const onClickHandler = () => {
        setMenuView(false);
    }
    return (
        <div className={S.mobileMenuContainer}>
            <ul className={S.linksWrapper}>
                <li>
                    <Link className={`${S.menuLink}  animate__animated animate__fadeIn `} onClick={onClickHandler} to={`/`}>home</Link>
                </li>
                <li>
                    <Link  className={`${S.menuLink}  animate__animated animate__fadeIn animate__delay-1s`} to={`/projects`}>projects</Link>
                </li>
                <li>
                    <Link className={`${S.menuLink}  animate__animated animate__fadeIn animate__delay-2s`} to={`/team`}>about</Link>
                </li>
                <li>
                    <Link className={`${S.menuLink}  animate__animated animate__fadeIn animate__delay-3s`} to={`/contacts`}>CONTACT US</Link>
                </li>
                <li>
                    <Link className={`${S.menuLink}  animate__animated animate__fadeIn animate__delay-4s`} to={`/services`}>services</Link>
                </li>

            </ul>
        </div>
    )
}
