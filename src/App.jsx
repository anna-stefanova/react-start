import './App.css';
import Sidebar from './layouts/Sidebar/Sidebar.jsx';
import Body from './layouts/Body/Body.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import {useState} from 'react';

const INITIAL_DATA = [
    {
        id: 1,
        title: 'Поход в горы',
        text: 'Горные породы открывают удивительные природные ландшафты',
        date: new Date()
    },
    {
        id: 2,
        title: 'Никто не вправе осуждать песнь светлого будущего',
        text: 'Идейные соображения высшего порядка, а также внедрение современных методик',
        date: new Date()
    },
    {
        id: 3,
        title: 'Звук клавиш печатной машинки так же органично вписывается в наши планы',
        text: 'Ясность нашей позиции очевидна: базовый вектор развития способствует повышению качества',
        date: new Date()
    },
];
function App() {



  const [items, setData] = useState(INITIAL_DATA);

  const addItem = (item) => {
      setData(oldItems => [...oldItems, {
          title: item.title,
          text: item.text,
          date: new Date(),
          id: Math.max(...oldItems.map(i => i.id)) + 1
      }]);
  };

  const sortItem = (a, b) => {
      return (a.id < b.id) ? 1 : -1;
  };

  return (
      <div className="app">
          <Sidebar>
              <Header/>
              <JournalAddButton/>
              <JournalList>
                  {items.sort(sortItem).map((el) => (
                          <CardButton key={el.id}>
                              <JournalItem
                                  id={el.id}
                                  title={el.title}
                                  text={el.text}
                                  date={el.date}
                              />
                          </CardButton>
                  ))}
              </JournalList>
          </Sidebar>
          <Body>
              <JournalForm onSubmit={addItem}/>
          </Body>




      </div>
  );
}

export default App;
