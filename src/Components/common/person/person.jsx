import person from './../../../img/cards image/in cards/person.png';

import styles from './person.module.css';

const Person = () => {
    return(
        <div className={styles.container}>
            <hr />
            <div className={styles.teacher}>
                <img src={person} alt="person.img" />
                <div className={styles.teacherInfo}>
                    <h5>Adam Smith</h5>
                    <p>Python Developer</p>
                </div>
                <hr />
                <p>50+ Student</p>
            </div>
            <hr />
        </div>
    )
}

export default Person;