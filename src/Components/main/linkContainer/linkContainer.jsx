import Links from '../../common/links/links';

import pen from './../../../img/link icons/Pen.png';
import database from './../../../img/link icons/Database.png';
import layers from './../../../img/link icons/Layers.png';
import group from './../../../img/link icons/Group.png';
import paper from './../../../img/link icons/Paper.png';
import chartPin from './../../../img/link icons/Chart_pin.png';
import imgBox from './../../../img/link icons/Img_box.png';
import music from './../../../img/link icons/Music.png';

import styles from './linkContainer.module.css';

const LinkContainer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.sectionOne}>
            <Links imgSrc={pen}>Design</Links>
            <Links imgSrc={layers}>Development</Links>
            <Links imgSrc={paper}>Professional Dev.</Links>
            <Links imgSrc={imgBox}>Photography</Links>
            </div>
            <div className={styles.sectionTwo}>
            <Links imgSrc={database}>Data Science</Links>
            <Links imgSrc={group}>Business</Links>
            <Links imgSrc={chartPin}>Marketing</Links>
            <Links imgSrc={music}>Music</Links>
            </div>
        </div>
    )
}

export default LinkContainer;