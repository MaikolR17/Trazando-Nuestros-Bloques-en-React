import styles from './Container.css'
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';

function Container() {
  return (
    <div className="container">
      <div className={styles.container}>
        <Header />
        <Navigation />
        <Main />
      </div>  
    </div>
  );
}

export default Container;