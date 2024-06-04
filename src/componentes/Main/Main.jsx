import styles from './Main.css'
import SubContents from '../SubContents/SubContents';
import Advertisement from '../Advertisement/Advertisement';

function Main() {
  return (
    <div className="main">
      <div className={styles.main}></div>
      <SubContents />
      <SubContents />
      <SubContents />
      <Advertisement />
    </div>
  );
}

export default Main;