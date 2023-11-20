import './JournalAddButton.css';
import CardButton from '../CardButton/CardButton.jsx';

function JournalAddButton() {
    return (
        <CardButton className="journal-add">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.85156 11.892V0.369318H7.14418V11.892H4.85156ZM0.240767 7.27273V4.98011H11.7635V7.27273H0.240767Z" fill="white"/>
            </svg>
            Новое воспоминание
        </CardButton>
    );
}

export default JournalAddButton;