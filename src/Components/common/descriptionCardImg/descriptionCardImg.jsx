import styles from './descriptionCardImg.module.css';

const DescriptionCardImg = ({imgSrc}) => {
    return(
            <div className={styles.container}>
                <img src={imgSrc} alt='png'/>
            </div>
    )
}

export default DescriptionCardImg;