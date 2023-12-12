import styles from './logo.module.css'

import logo from '../../../img/logo/logo.png';

const Logo = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Logo;