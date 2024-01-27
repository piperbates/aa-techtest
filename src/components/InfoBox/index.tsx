import React from "react";
import Box from "../Box";
import Image from "next/image";
import styles from './infobox.module.css';

const InfoBox = ({icon, children}: {icon: string, children: JSX.Element | JSX.Element[]}) => {
    return (
    <Box>
        <div className={styles.infobox}>
            <div className={styles.infoBoxIcon}>
                <Image src={icon} alt="icon" fill object-fit="contain" />
            </div>
            <div className={styles.infoBoxContent}>
                {children}
            </div>
        </div>
    </Box>
)}

export default InfoBox;