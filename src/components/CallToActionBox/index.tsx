import React from "react";
import Box from "../Box";
import styles from './callToActionBox.module.css';
import Image from "next/image";
import BlueButton from "../blueButton";

const CallToActionBox = (
    {callToAction, children, image}: 
        {
            image: string,
            callToAction: string, 
            children: JSX.Element | JSX.Element[]
        }) => <Box>
            <div className={styles.callToActionBox}>
                {children}

                <div className={styles.callToActionImg}>
                    <Image src={image} alt="buy now pay later" fill />
                    <Image src={image} alt="buy now pay later" fill />
                    <Image src={image} alt="buy now pay later" fill />
                    <Image src={image} alt="buy now pay later" fill />
                </div>
                <BlueButton>
                    <span>{callToAction}</span>
                </BlueButton>
            </div>
    </Box>


export default CallToActionBox;