import React from "react";
import Box from "../Box";
import styles from './gridbox.module.css';
import Image from "next/image";

import cpProtect from "@/assets/images/cp-mobile.png";

const GridItem = ({image, title}: {image: string, title: string}) => {
    return <div className={styles.gridBoxItem}>
        <div className={styles.gridBoxIcon}>
            <Image src={image} fill alt={title} />
        </div>
        <p>{title}</p>
    </div>
}

const GridBox = ({title, content, recommended, grid}: {title: string, content: string, grid: {
    name: string;
    icon: any;
}[], recommended?: boolean}) => {
    return (
    <Box>
        <div className={styles.fullWrapper}>
            {recommended ? (<div className={styles.recommendedBox}><p>Recommended</p></div>) : <></>}
            
            <div className={styles.gridBoxWrapper}>
                <div className={styles.gridBoxImage}>
                        <Image src={cpProtect} alt="mobile" fill />
                </div>
                <div className={styles.gridBox}>
                    <div className={styles.gridBoxContent}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>

                    <div className={styles.gridBoxGrid}>
                        {grid.map((item, i)=>
                            <GridItem title={item.name} image={item.icon} key={i} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </Box>
)}

export default GridBox;