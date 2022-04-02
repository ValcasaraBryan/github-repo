import ReactDOM from 'react-dom';
import HomeScreen from './routes/Home/home';
import Notification from './component/Notification/Notification';
import './global.css';

ReactDOM.render(
  <>
    <HomeScreen />
    <Notification />
  </>,
  document.getElementById('root')
);
