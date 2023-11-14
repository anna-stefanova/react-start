import './JournalList.css';
import CardButton from '../CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';

function JournalList({items}) {
    const sortItems = (a, b) => {
        return (a.id < b.id) ? 1 : -1;
    };

    if (items.length === 0) {
        return (<p>Записей пока нет. Добавьте первую запись.</p>);
    }

    return <>
        {items.sort(sortItems).map((el) => (
            <CardButton key={el.id}>
                <JournalItem
                    id={el.id}
                    title={el.title}
                    post={el.post}
                    date={el.date}
                />
            </CardButton>
        ))}
        </>;

}

export default JournalList;