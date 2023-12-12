import Button from '../../common/button/button';
import styles from './howToJoin.module.css';

const HowToJoin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textSection}>
                <h1>Join our <span>world's largest</span><br/>learning platform today</h1>
                <p>Start learning by registering and get 30 days free trail</p>
            </div>
            <div className={styles.buttonSection}>
                <Button variant='destructive' size='large'>Join as Instructor</Button>
                <Button size='large'>Join as Student</Button>
            </div>
        </div>
    )
}

export default HowToJoin;