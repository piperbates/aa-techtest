import React from "react";
import styles from './carouselBox.module.css';
import Image from "next/image";
import Box from "../Box";

const CarouselBox = (
    {title, content, img}: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
       title: string, content:string, img:string
    }) => <div className={styles.carouselBoxWrapper}>
                <div className={styles.carouselBoxImg}>
                    <Image src={img} alt={title} fill />
                </div>
                <div className={styles.carouselBoxContent}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>

export default CarouselBox