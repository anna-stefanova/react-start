import './JournalForm.css';
import Button from '../Button/Button.jsx';
import {useState} from 'react';

function JournalForm({onSubmit}) {

    const [state, setState] = useState({
        age: 31,
    });

    const addJournalItem = (event) => {
        event.preventDefault();
        state.age = 40;
        setState({ ...state });
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        onSubmit(formProps);
    };
    return (

        <form className="journal-form" onSubmit={addJournalItem}>
            <input type="text" name="title"/>
            <input type="date" name="date"/>
            <input type="text" name="tag"/>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <Button textBtn="Сохранить"/>
        </form>
    );
}

export default JournalForm;