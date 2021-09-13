import './App.css';
import DogImager from './components/DogImager'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className="App">
      <TopBar />
      <DogImager title={"Hello!"}/>
    </div>
  );
}

export default App;
