import * as React from "react";
import {Link} from "react-router-dom";
import S from "./NavigationPanel.module.css"

export default function  NavigationPanel() {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <nav className={S.navContainer}>

            <ul>
                <li>
                    <Link className={S.headerLink} to={`/projects`}>projects</Link>
                </li>
                <li>
                    <Link className={S.headerLink} to={`/team`}>team</Link>
                </li>
                <li>
                    <Link className={S.headerLink} to={`/contacts`}>CONTACT US</Link>
                </li>
                <li>
                    <Link className={S.headerLink} to={`/services`}>about apex + services</Link>
                </li>

            </ul>
        </nav>
    )
}
