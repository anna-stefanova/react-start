import './JournalItem.css';

function JournalItem({id, title, date, post}) {


    const formatDate = new Intl.DateTimeFormat('ru-Ru').format(date);

    return (
        <>
            <h2 className="journal-item__header" itemID={id}>{title}</h2>
            <h2 className="journal-item__body">
                <div className="journal-item__date">{formatDate}</div>
                <div className="journal-item__text">{post}</div>
            </h2>
        </>
    );
}

export default JournalItem;