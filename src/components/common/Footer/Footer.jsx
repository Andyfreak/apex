import * as React from "react";
import S from "./Footer.module.css";
import logo from "./../../../assets/logo.webp"
import {FooterCustomButton} from "../CustomButtons/FooterCustomButton/FooterCustomButton";
import {useNavigate} from "react-router-dom";

export const FooterBlock = () => {
    const navigate = useNavigate();
    const redirectHandler = (route) => {
        navigate(route);
    }
    const redirectToExternalLink = (link) => {
        window.location = link;
    }

    return (
        <div className={S.footerContainer}>
            <img className={S.footerLogo} src={logo} alt={'footerLogo'}/>
            <div className={S.footerDevider}></div>
            <div className={S.footerNavButtonsBlock}>
                <FooterCustomButton name={"projects"} callback={()=> redirectHandler(`/projects`)}/>
                <FooterCustomButton name={"team"}  callback={()=> redirectHandler(`/team`)}/>
                <FooterCustomButton name={"CONTACT US"} callback={()=> redirectHandler(`/contacts`)}/>
                <FooterCustomButton name={"about apex + services"}  callback={()=> redirectHandler(`/services`)}/>
            </div>
            <div className={S.footerDevider}></div>
            <ul className={S.footerSocialMediaLinks}>
                <li >
                    <img className={S.socialLinkImg}  onClick={()=>redirectToExternalLink('https://www.facebook.com/apexconstructionchicago/')} src='https://apextest12.b-cdn.net/socialMediaImg/icons8-facebook.svg' alt='facebook'/>
                </li>
                <li>
                    <img className={S.socialLinkImg}  onClick={()=>redirectToExternalLink('https://www.instagram.com/apex_constructiongroup/')} src='https://apextest12.b-cdn.net/socialMediaImg/icons8-instagram.svg' alt='instagram'/>
                </li>
                <li>
                    <img className={S.socialLinkImg}  onClick={()=>redirectToExternalLink('https://www.linkedin.com/company/apex-construction-group/about/')} src='https://apextest12.b-cdn.net/socialMediaImg/icons8-linkedin.svg' alt='linkedin'/>
                </li>
                <li>
                    <img className={S.socialLinkImg} onClick={()=>redirectToExternalLink('https://twitter.com/apexcongroup')} src='https://apextest12.b-cdn.net/socialMediaImg/icons8-twitter.svg' alt='twitter'/>
                </li>
            </ul>

        </div>
    )
}

