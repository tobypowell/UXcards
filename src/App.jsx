import { users } from './users';
import Carousel from './components/Carousel';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Carousel users={users} />
    </div>
  );
}

export default App;
