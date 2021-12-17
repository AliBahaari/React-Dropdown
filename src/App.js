import './App.css';
import DropDown from './components/DropDown';

function App() {

  const onSelect = (index) => {
    console.log(index);
  }

  return (
    <>
      <DropDown items={[['Item 1', 'Small Text 1'], ['Item 2', ''], ['Item 3', 'Small Text 3']]} direction="ltr" onSelect={onSelect} />
    </>
  );
}

export default App;
