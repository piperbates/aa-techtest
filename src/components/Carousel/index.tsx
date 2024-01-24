import React from "react";
import styles from './carousel.module.css';

const Carousel = ({title, subtitle, children}: {title?: string, subtitle:string, children:  JSX.Element | JSX.Element[]}) => <div className={styles.carousel}>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <div className={styles.carouselScroll}>
        {children}
    </div>
</div>

export default Carousel