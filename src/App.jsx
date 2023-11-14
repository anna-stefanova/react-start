import './App.css';
import Sidebar from './layouts/Sidebar/Sidebar.jsx';
import Body from './layouts/Body/Body.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import {useState} from 'react';

const INITIAL_DATA = [
    {
        id: 1,
        title: 'Поход в горы',
        post: 'Горные породы открывают удивительные природные ландшафты',
        date: new Date()
    },
    {
        id: 2,
        title: 'Никто не вправе осуждать песнь светлого будущего',
        post: 'Идейные соображения высшего порядка, а также внедрение современных методик',
        date: new Date()
    },
    {
        id: 3,
        title: 'Звук клавиш печатной машинки так же органично вписывается в наши планы',
        post: 'Ясность нашей позиции очевидна: базовый вектор развития способствует повышению качества',
        date: new Date()
    },
];
function App() {
  const [items, setData] = useState(INITIAL_DATA);

  const addItem = (item) => {
      setData(oldItems => [...oldItems, {
          title: item.title,
          post: item.post,
          date: new Date(item.date),
          id: oldItems.length ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
      }]);
  };

    return (
      <div className="app">
          <Sidebar>
              <Header/>
              <JournalAddButton/>
              <JournalList items={items}/>
          </Sidebar>
          <Body>
              <JournalForm onSubmit={addItem}/>
          </Body>
      </div>
  );
}

export default App;
