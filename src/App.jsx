import './App.css';
import Sidebar from './layouts/Sidebar/Sidebar.jsx';
import Body from './layouts/Body/Body.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import {useEffect, useState} from 'react';


function App() {
  const [items, setData] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));
        if (data) {
            setData(data.map(item => ({
                ...item,
                date: new Date(item.date)
            })));
        }
    }, []);

    useEffect(() => {
        if (items.length) {
            localStorage.setItem('data', JSON.stringify(items));
        }
    }, [items]);


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
