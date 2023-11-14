import './JournalForm.css';
import Button from '../Button/Button.jsx';
import {useState} from 'react';

function JournalForm({onSubmit}) {

    const [state, setState] = useState({
        age: 31,
    });
    const [formValidState, setFormValidState] = useState({
        title: true,
        post: true,
        date: true
    });
let isFormValid = true;
    const addJournalItem = (event) => {
        event.preventDefault();
        state.age = 40;
        setState({ ...state });
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        if (!formProps.title?.trim().length) {
            setFormValidState(state => ({...state, title: false}));
            isFormValid = false;
        }
        if (!formProps.post?.trim().length) {
            setFormValidState(state => ({...state, post: false}));
            isFormValid = false;
        }
        if (!formProps.date) {
            setFormValidState(state => ({...state, date: false}));
            isFormValid= false;
        }
        if (!isFormValid) return;
        console.log(formProps);
        onSubmit(formProps);
    };
    return (

        <form className="journal-form" onSubmit={addJournalItem}>
            <input type="text" name="title" style={{border: formValidState.title ? undefined : '1px solid red'}}/>
            <input type="date" name="date" style={{border: formValidState.date ? undefined : '1px solid red'}}/>
            <input type="text" name="tag"/>
            <textarea name="post" id="" cols="30" rows="10" style={{border: formValidState.post ? undefined : '1px solid red'}}></textarea>
            <Button textBtn="Сохранить"/>
        </form>
    );
}

export default JournalForm;