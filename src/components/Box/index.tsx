import React from "react";
import styles from './box.module.css';

const Box = ({children}: {children: JSX.Element[] | JSX.Element }) => (
    <div className={styles.box}>
        {children}
    </div>
)

export default Box;