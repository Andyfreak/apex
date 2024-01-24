import * as React from "react";
import S from "./PageForAuthorization.module.css"
import {CustomButton} from "../../components/common/CustomButtons/CustomButton/CustomButton";
import {useState} from "react";

export const PageForAuthorization = ({setAuthorized}) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const onChangeHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        let value = event.target.value;
        setPassword(value);
    }
 const onSubmitButtonHandler = () => {
    if(password !== 'Apex@6100') {
        setError('setCorrectPassword');
        setPassword('');
    } else {
        localStorage.setItem('isAdminAuthorized', 'true');
        setAuthorized(true)
    }
 }
    return (
        <div className={S.pageContainer}>
            <h2 className={S.authPageTitle}>Enter the password to turn on admin mode</h2>
            <div className={S.form__group}>
                <input type="password"
                       autoComplete= 'no'
                       onChange={onChangeHandler}
                       className={S.form__field}
                       placeholder="Admin password"
                       name="password"
                       id='password'
                       value={password}
                       required/>
                <label htmlFor="password" className={S.form__label}>Admin password</label>
            </div>
            <CustomButton name={'submit'} bcgColor={'darkGrey'} color={'black'} width={'250px'} callback={onSubmitButtonHandler}/>
        </div>
    )
}
