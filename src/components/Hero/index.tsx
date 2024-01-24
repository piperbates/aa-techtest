import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import trustScore from "@/assets/images/trustpilot.png"
import BlueButton from "../blueButton";

const FormBox = ({boxTitle, info, subText}: {boxTitle: string, info: string, subText?: string}) => 
    <div className={styles.formBox}>
        <div className={styles.formBoxHeader}>
            <p className={styles.formBoxTitle}>{boxTitle}</p>
            {subText ? <p className={styles.formSubText}>{subText}</p> : null}
        </div>
        <p>{info}</p>
    </div>

const FormButton = ({selected, title}: {selected?: boolean, title: string}) =>
    <button className={selected ? styles.selectedFormType : styles.unselectedFormType}>
        <p>{title}</p>
    </button>

const Hero = () => (
    <div className={styles.hero}>
        <div className={styles.heroContent}>
        <h1>Search and book flights to Australia</h1>
        <p>
            Buy your flights now and pay later
        </p>

        <div className={styles.trustScore}>
            <div className={styles.trustScoreImg}>
                <Image src={trustScore.src} fill alt="Trust pilot" />
            </div>
            <div className={styles.trustScoreText}>
                <p>TrustScore <strong>4.5</strong></p>
                <p><strong>6,500</strong> reviews</p>
            </div>
        </div>

        <div className={styles.bookingForm}> 
            <div className={styles.bookingFormHeader}>
                <FormButton selected title="Return"/>
                <FormButton title="One way"/>
                <FormButton title="Multi-city"/>

            </div>

            <div className={styles.bookingFormDetails}>
                <FormBox boxTitle="Where from?" info="London (LON)" />
                <FormBox boxTitle="Where to?" info="Sydney (SYD)" />
                <FormBox boxTitle="Dates" info="Sat 11 Jun - Sat 25 Jun" subText="14 Nights" />
                <FormBox boxTitle="Passangers" info="2 Adults, Any class" />         
            </div>

            <BlueButton>
                <span>Search flights</span>
            </BlueButton>
        </div>
    </div>

        
    </div>
)

export default Hero;