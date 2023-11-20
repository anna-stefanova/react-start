import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useEffect, useReducer, useRef, useState} from 'react';
import cn from 'classnames';
import {INITIAL_STATE, reducerForm} from './JournalForm.js';
import Input from '../Input/Input.jsx';



function JournalForm({onSubmit}) {

    const [stateForm, dispatchForm] = useReducer(reducerForm, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = stateForm;
    const titleRef = useRef(null);
    const postRef = useRef(null);
    const dateRef = useRef(null);

    const forusErros = ( isValid ) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.post:
                postRef.current.focus();
                break;
        }
    };

    useEffect(() => {
        let timerId;
        forusErros(isValid);
        if (!isValid.title || !isValid.post || !isValid.date) {
            timerId = setTimeout(() => {
                dispatchForm({type: 'RESET_VALIDITY'});
            }, 2000);
        }
        return () => clearTimeout(timerId);
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
            dispatchForm({type: 'CLEAR'});
        }
    }, [isFormReadyToSubmit, onSubmit, values]);

    const addJournalItem = (event) => {
        event.preventDefault();
        dispatchForm({type: 'SUBMIT'});
    };

    const onChange = (e) => {
        dispatchForm({type: 'SET_VALUE', payload: { [e.target.name]: e.target.value}});
    };

    return (

        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div>
                <Input type="text" ref={titleRef} name="title" placeholder="Заголовок поста" value={values.title} onChange={onChange} isValid={isValid.title} appearance='title'/>
            </div>
            <div className={styles['form-row']}>
                <label className={styles['form-label']} htmlFor="date">
                    <img src="/calendar.svg" alt="Иконка календаря"/>
                    <span>Дата</span>
                </label>
                <Input type="date" ref={dateRef} name="date" id="date" value={values.date} onChange={onChange} isValid={isValid.date}/>
            </div>
            <div className={styles['form-row']}>
                <label className={cn(styles['form-label'], styles['label-tag'])} htmlFor="tag">
                    <img src="/folder.svg" alt="Иконка меток"/>
                    <span>Метки</span>
                </label>
                <Input type="text" name="tag" id="tag" value={values.tag} onChange={onChange} />
            </div>
            <textarea name="post" ref={postRef} id="" cols="30" rows="10" value={values.post} onChange={onChange} className={cn(styles.input, {
                [styles.invalid]: !isValid.post
            })}></textarea>
            <Button textBtn="Сохранить"/>
        </form>
    );
}

export default JournalForm;