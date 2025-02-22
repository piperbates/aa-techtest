import React from "react";
import styles from './carousel.module.css';

const Carousel = ({
    title, 
    subtitle, 
    centered,
    children
    }: {
        title?: string, 
        subtitle:string, 
        centered?: boolean
        children:  JSX.Element | JSX.Element[]
    }) => (
        <div className={ centered ? `${styles.carouselCentered} ${styles.carousel}` : styles.carousel}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className={styles.carouselContent}>
                <div className={styles.carouselScroll}>
                    {children}
                </div>
            </div>
        </div>
    )

export default Carousel