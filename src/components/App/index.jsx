import s from './style.module.css';
import AddCardForm from '../AddCardForm/AddCardForm';
import CardsContainer from '../CardsContainer/CardsContainer';


function App() {

  return (
    <div className={s.App}>
      <AddCardForm/>
      <CardsContainer/>
    </div>
  );
}

export default App;
