import * as React from "react";
import S from "./AdminModal.module.css";
import closeBtn from "./../../../assets/icons8-close-button-32 (1).png";
import 'animate.css';
import {useEffect, useState} from "react";
import {CustomButton} from "../../common/CustomButtons/CustomButton/CustomButton";


export const AdminModal = ({setModValue, modValue, setCurrentModificatedDataObject}) => {
    const [inputData, setInputData] = useState('text here');
    useEffect(() => {
        setInputData(modValue[1][modValue[0]]);

    }, []);
    const onCloseClickHandler = () => {
        setModValue({});
        document.body.style.overflow = 'auto';
    }
    const onSaveClickHandler = () => {
        let modProjectObject = {...modValue[1]};
        modProjectObject[modValue[0]] = inputData;
        setCurrentModificatedDataObject(modProjectObject);
        onCloseClickHandler();
    }
    const onChangeHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        let value = event.target.value;
        setInputData(value)
    }
    return <div className={S.personModalContainer}>
        <div className={S.modalOverlay}></div>

        <div className={`${S.modalContainer} animate__animated animate__fadeIn`}>
            <div className={S.modalContainerInnerOverlay}>
                <img className={S.closeButton} src={closeBtn} onClick={onCloseClickHandler} alt='closeButton'/>


                <div className={S.modalText}>{`Specify ${modValue[0]} here:`}</div>

                <label>
                    <textarea
                        className={S.dataInput}
                        name="postContent"
                        rows={4} cols={40}
                        value={inputData}
                        onChange={onChangeHandler}
                        placeholder={`type ${modValue[0]} here`}
                    />
                </label>

                <CustomButton name={'save'}
                              callback={onSaveClickHandler}
                              bcgColor={'darkGrey'}
                />

            </div>
        </div>


    </div>
}
