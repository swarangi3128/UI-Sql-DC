import React from 'react';
import styles from "./styles.module.css";

const ResumeButton = () => {
    const handleDownload = () => {
        window.open(" ", '_blank');
      };
      return (
        <button onClick={handleDownload} className={styles.nav_resume_btn}>SEARCH</button>
      );
  };


export default ResumeButton;
