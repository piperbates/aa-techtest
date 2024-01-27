import React from "react";
import styles from './blogBox.module.css';
import Image from "next/image";
import Box from "../Box";

const BlogBox = (
    {title, content, img}: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        
        title: string, content:string, img:string
    }) => <div>
                <div className={styles.blogBoxImg}>
                    <Image src={img} alt={title} fill />
                </div>
                <div className={styles.blogBoxContent}>
                    <p>{content}</p>        
                    <h3>{title}</h3>
                </div>
        </div>

export default BlogBox