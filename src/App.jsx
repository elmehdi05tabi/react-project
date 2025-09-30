import { Container } from 'react-bootstrap';
import style from'./App.module.scss';
import Search from './components/search/Search';
import Wallpaper from './components/wallpaper/Wallpaper';
import Weather from './weather/Weather';
import { Provider } from 'react-redux';
import store from './app/store';
function App() {
  return (
    <div className="App">
      <Provider store={store} >
      <Wallpaper/>
      <Container >
      <Search/>
      <Weather/>  
      </Container>
    </Provider>
    </div>
  );
}

export default App;
