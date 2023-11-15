import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useEffect, useReducer, useState} from 'react';
import cn from 'classnames';
import {INITIAL_STATE, reducerForm} from './JournalForm.js';



function JournalForm({onSubmit}) {

    const [stateForm, dispatchForm] = useReducer(reducerForm, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = stateForm;

    useEffect(() => {
        let timerId;

        if (!isValid.title || !isValid.post || !isValid.date) {
            timerId = setTimeout(() => {
                console.log('Очистка состояния');
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
                <input type="text" name="title" placeholder="Заголовок поста" value={values.title} onChange={onChange} className={cn(styles.input, styles['input-title'], {
                    [styles.invalid]: !isValid.title
                })}/>
            </div>
            <div className={styles['form-row']}>
                <label className={styles['form-label']} htmlFor="date">
                    <img src="/calendar.svg" alt="Иконка календаря"/>
                    <span>Дата</span>
                </label>
                <input type="date" name="date" id="date" value={values.date} onChange={onChange} className={cn(styles.input, {
                    [styles.invalid]: !isValid.date
                })}/>
            </div>
            <div className={styles['form-row']}>
                <label className={cn(styles['form-label'], styles['label-tag'])} htmlFor="tag">
                    <img src="/folder.svg" alt="Иконка меток"/>
                    <span>Метки</span>
                </label>
                <input type="text" name="tag" id="tag" value={values.tag} onChange={onChange} className={styles.input}/>
            </div>
            <textarea name="post" id="" cols="30" rows="10" value={values.post} onChange={onChange} className={cn(styles.input, {
                [styles.invalid]: !isValid.post
            })}></textarea>
            <Button textBtn="Сохранить"/>
        </form>
    );
}

export default JournalForm;