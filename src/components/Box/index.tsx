import React from "react";
import styles from './box.module.css';

const Box = ({addedStyles, children}: {addedStyles?: string, children: JSX.Element[] | JSX.Element }) => (
    <div className={`${styles.box} ${addedStyles}`}>
        {children}
    </div>
)

export default Box;