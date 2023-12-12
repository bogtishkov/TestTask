import { useState } from 'react';
import Button from '../../../common/button/button';
import styles from './selectionPanel.module.css';

const SelectionPanel = () => {
    const [active, setActive] = useState('design');
  return (
    <div className={styles.selectionPanel}>
      <Button variant={active === 'design' ? 'primary' : 'ghost'} onClick={() => setActive('design')}>Design</Button>
      <Button variant={active === 'development' ? 'primary' : 'ghost'} onClick={() => setActive('development')}>Development</Button>
      <Button variant={active === 'business' ? 'primary' : 'ghost'} onClick={() => setActive('business')}>Business</Button>
      <Button variant={active === 'dataScience' ? 'primary' : 'ghost'} onClick={() => setActive('dataScience')}>Data Science</Button>
      <Button variant={active === 'marketing' ? 'primary' : 'ghost'} onClick={() => setActive('marketing')}>Marketing</Button>
    </div>
  );
};

export default SelectionPanel;
