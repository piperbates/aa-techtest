import React from "react";
import Box from "../Box";
import styles from './callToActionBox.module.css';
import Image from "next/image";
import BlueButton from "../blueButton";

import klarna from "@/assets/images/logos/klarna.png";
import affirm from "@/assets/images/logos/affirm.png";
import afterpay from "@/assets/images/logos/afterpay.png";
import laybuy from "@/assets/images/logos/laybuy.png";
import bnpl from "@/assets/images/bnpl-mobile.png";

const CallToActionBox = (
    {callToAction, children}: 
        {
            image: string,
            callToAction: string, 
            children: JSX.Element | JSX.Element[]
        }) => <Box>
            <div className={styles.callToActionBox}>
                <div className={styles.ctaContent}>
                    {children}
                    <div className={styles.ctaButton}>
                        <BlueButton>
                            <span>{callToAction}</span>
                        </BlueButton>
                    </div>
                </div>

                <div className={styles.callToActionImgBox}>
                    <div className={`${styles.callToActionImg}  ${styles.bnpl}`}>
                        <Image src={bnpl} alt="buy now pay later" fill object-fit="contain" />
                    </div>
                    <div className={`${styles.callToActionImg} ${styles.cATimg1}`}>
                        <Image src={klarna} alt="klarna" fill />
                    </div>
                    <div className={`${styles.callToActionImg} ${styles.cATimg2}`}>
                        <Image src={laybuy} alt="laybuy" fill />
                    </div>
                    <div className={`${styles.callToActionImg} ${styles.cATimg3}`}>
                        <Image src={affirm} alt="affirm" fill />
                    </div>
                    <div className={`${styles.callToActionImg} ${styles.cATimg4}`}>
                        <Image src={afterpay} alt="afterpay" fill />
                    </div>
                </div>
            </div>
    </Box>


export default CallToActionBox;