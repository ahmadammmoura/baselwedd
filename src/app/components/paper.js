import React from 'react';
import styles from '../style/paper.module.css';

const StackedPaper = () => {
  return (
    <div className={styles.letter}>
      <p>Creating a messy stack of papers using the magic of CSS transforms and generated content.</p>
      <p>Forked from <a href="https://codepen.io/mlms13/">Michael Martin-Smucker</a></p>
      <p>Pen <a href="https://codepen.io/mlms13/pen/LKFoy/">CSS Stacked Paper Effect</a></p>
    </div>
  );
};

export default StackedPaper;
