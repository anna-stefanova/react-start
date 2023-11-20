import './App.css';
import Sidebar from './layouts/Sidebar/Sidebar.jsx';
import Body from './layouts/Body/Body.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';

import {useLocalstorage} from './hooks/use-localstorage.hook.js';

function mapItems(items) {
    if (!items) return [];
    return items.map(i => ({
        ...i,
        date: new Date(i.date)
    }));
}

function App() {
  // const [items, setData] = useState([]);

  //   useEffect(() => {
  //       const data = JSON.parse(localStorage.getItem('data'));
  //       if (data) {
  //           setData(data.map(item => ({
  //               ...item,
  //               date: new Date(item.date)
  //           })));
  //       }
  //   }, []);
  //
  //   useEffect(() => {
  //       if (items.length) {
  //           localStorage.setItem('data', JSON.stringify(items));
  //       }
  //   }, [items]);

    const [items, setItems] = useLocalstorage('data');

    const addItem = (item) => {
        setItems([...items, {
            title: item.title,
            post: item.post,
            date: new Date(item.date),
            id: items.length ? Math.max(...items.map(i => i.id)) + 1 : 1
        }]);
    };

    return (
      <div className="app">
          <Sidebar>
              <Header/>
              <JournalAddButton/>
              <JournalList items={mapItems(items)}/>
          </Sidebar>
          <Body>
              <JournalForm onSubmit={addItem}/>
          </Body>
      </div>
  );
}

export default App;
