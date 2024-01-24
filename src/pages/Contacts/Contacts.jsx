import S from "./Contacts.module.css";
import ST from "./../../styles/title.module.css"
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import * as React from "react";
import {useEffect, useState} from "react";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {CustomButton} from "../../components/common/CustomButtons/CustomButton/CustomButton";
import {scrollUpFast} from "../Home/Home";
import {useParams} from "react-router-dom";



export default function Contacts() {

    const [menuView, setMenuView] = useState(false);
    const [chosenTheme, setChosenTheme] = useState('general')

    const {exact} = useParams();

    const onChangeHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        let value = event.target.value;
        setChosenTheme(value);
    }
    useEffect(()=> {

        if(exact !== undefined) {
            setChosenTheme(exact);
        }
        scrollUpFast();
    } , [exact])
    return (
        menuView ?
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <div className={S.topWrapper}
                     style={{backgroundImage: `url(https://apextest12.b-cdn.net/projects/Oakbrook%20Office/wasPSD.jpg)`}}
                >

                    <div className={S.inputsContainer}>
                        <div className={S.topInputsContainer}>


                            <div className={S.form__group}>
                                <input type="input" autoComplete= 'no' className={S.form__field} placeholder="First name" name="firstName" id='firstName'
                                       required/>
                                <label htmlFor="name" className={S.form__label}>First name</label>
                            </div>


                            <div className={S.form__group}>
                                <input type="input" autoComplete= 'no' className={S.form__field} placeholder="Last name"  name="lastName" id='lastName'
                                       required/>
                                <label htmlFor="name" className={S.form__label}>Last name</label>
                            </div>

                        </div>
                        <div className={S.topInputsContainer}>
                            <select className={S.stringInput} value={chosenTheme} onChange={onChangeHandler}>
                                <option value={'general'}>General</option>
                                <option  value={'careers'}>Careers</option>
                                <option  value={'press'}>Press</option>
                            </select>
                            <div className={S.form__group}>
                                <input type="input" autoComplete= 'no' className={S.form__field} placeholder="Email" name="email" id='email'
                                       required/>
                                <label htmlFor="name" className={S.form__label}>Email</label>
                            </div>
                        </div>
                        <div className={S.topInputsContainer}>
                            <textarea className={S.textareaStyle} placeholder={'Type your message here'} >

                            </textarea>
                        </div>
                        <CustomButton name={"let's connect!"} color={'white'} bcgColor={'transparent'} width={'100%'}/>
                    </div>
                    <div className={S.contactsContainer}>
                        <div className={S.adressBlock}>
                            <div className={S.addressLabel}>address</div>
                          <p className={S.addressText}>17W601 14th St.</p>
                          <p className={S.addressText}>OakBrook Terrace</p>
                            <p className={S.addressText}>Chicago, ILLINOIS 60181</p>
                        </div>
                        <div className={S.phoneBlock}>
                            <div className={S.addressLabel}>phone</div>
                            <p className={S.addressText}>(773) 481-1029</p>
                        </div>
                    </div>
                </div>
                <h1 className={`${S.contactsTitle} ${ST.pageTitle}`}>CONTACT US</h1>

                <FooterBlock/>
            </div>
    );
}
