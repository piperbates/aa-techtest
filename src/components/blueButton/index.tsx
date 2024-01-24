import React from "react";
import styles from './blueButton.module.css'

const BlueButton = (
    {children}: {children: JSX.Element}
    ) => <button className={styles.blueButton}>
    {children}
</button>

export default BlueButton