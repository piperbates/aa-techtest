import React from "react";
import styles from "./section.module.css";

const Section = ({children}: {children: JSX.Element[] | JSX.Element }) => {
    return <div className={styles.section}>
        {children}
    </div>
}

export default Section;