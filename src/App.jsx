import './App.css';
import CardButton from './components/CardButton/CardButton.jsx';
import Button from './components/Button/Button.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';

function App() {

  const data = [
      {
          title: 'Поход в горы',
          text: 'Горные породы открывают удивительные природные ландшафты',
          date: new Date()
      },
      {
          title: 'Никто не вправе осуждать песнь светлого будущего',
          text: 'Идейные соображения высшего порядка, а также внедрение современных методик',
          date: new Date()
      },
      {
          title: 'Звук клавиш печатной машинки так же органично вписывается в наши планы',
          text: 'Ясность нашей позиции очевидна: базовый вектор развития способствует повышению качества',
          date: new Date()
      },
  ];

  return (
      <>
          <h1>Hello</h1>
          <p>Описание</p>
          <CardButton>
              Новое воспоминание
          </CardButton>
          <CardButton>
              <JournalItem
                  title={data[0].title}
                  text={data[0].text}
                  date={data[0].date}
              />
          </CardButton>
          <CardButton>
              <JournalItem
                  title={data[1].title}
                  text={data[1].text}
                  date={data[1].date}
              />
          </CardButton>
          <CardButton>
              <JournalItem
                  title={data[2].title}
                  text={data[2].text}
                  date={data[2].date}
              />
          </CardButton>
          <Button/>
      </>
  );
}

export default App;
