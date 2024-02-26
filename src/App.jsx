import Root from './Components/Root';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <Router>
            <Root />
          </Router>
      </div>
  );
}

export default App;
