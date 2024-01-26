"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import trustScore from "@/assets/images/trustpilot.png"
import BlueButton from "../blueButton";
  
const formTypes = {
    RETURN: "return",
    ONEWAY: "one way",
    MULTICITY: "multicity"
}

const FormBox = ({boxTitle, info, subText}: {boxTitle: string, info: string, subText?: string}) => 
    <div className={styles.formBox}>
        <div className={styles.formBoxHeader}>
            <p className={styles.formBoxTitle}>{boxTitle}</p>
            {subText ? <p className={styles.formSubText}>{subText}</p> : null}
        </div>
        <p>{info}</p>
    </div>

const FormButton = ({selected, title, onClick}: {selected?: boolean, title: string, onClick: ()=>void}) =>
    <button className={selected ? styles.selectedFormType : styles.unselectedFormType} onClick={()=>onClick()}>
        <p>{title}</p>
    </button>


const FormContent = ({formType}: {formType?: string}) => {
    switch(formType) {
        case "return":
            return <div className={styles.bookingFormDetails}>
                <div className={styles.bookingFormDestinations}>
                    <FormBox boxTitle="Where from?" info="London (LON)" />
                    <FormBox boxTitle="Where to?" info="Sydney (SYD)" />
                </div>
                <div className={styles.bookingFormExtraDetails}>
                    <FormBox boxTitle="Dates" info="Sat 11 Jun - Sat 25 Jun" subText="14 Nights" />
                    <FormBox boxTitle="Passengers" info="2 Adults, Any class" />         
                </div>
            </div>
        case "one way":
            return <div className={styles.bookingFormDetails}>
                <FormBox boxTitle="Where from?" info="London (LON)" />
                <FormBox boxTitle="Where to?" info="Sydney (SYD)" />
                <FormBox boxTitle="Dates" info="Sat 11 Jun" />
                <FormBox boxTitle="Passengers" info="2 Adults, Any class" />         
            </div>
        case "multicity":
            return <div className={styles.bookingFormDetails}>
                <FormBox boxTitle="Passengers" info="2 Adults, Any class" />         
                <FormBox boxTitle="Starting from?" info="London (LON)" />
                <FormBox boxTitle="First destination" info="Sydney (SYD)" />
                <FormBox boxTitle="Next destination" info="Sydney (SYD)" />

                <button className={styles.bookingFormAddCity}>Add new city</button>
                <FormBox boxTitle="Dates" info="Sat 11 Jun" />
            </div>
    }
}


const Hero = () => {
    const [formType, setFormType] = useState(formTypes.RETURN);

    switch(formType) {
        case formTypes.RETURN:
            <p>Return</p>
            break;

        case formTypes.ONEWAY:
            <p>One Way</p>
            break;
        
        case formTypes.MULTICITY:
            <p>Multi-city</p>
            break;

    }
    return (
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

            <div className={styles.mainButtons}>
                <FormButton selected title="Return" onClick={()=>{setFormType(formTypes.RETURN)}} />
                <FormButton title="One way" onClick={()=>{setFormType(formTypes.ONEWAY)}}/>
                <FormButton title="Multi-city" onClick={()=>{setFormType(formTypes.MULTICITY)}}/>
        </div>

                <div className={styles.directFlightsToggle}>
                    <label htmlFor="directFlight">Direct flights only</label><input type="checkbox" name="directFlight" />
                </div>
            </div>

            <FormContent formType={formType} />

            <BlueButton>
                <span>Search flights</span>
            </BlueButton>
        </div>
    </div>

        
    </div>
)}

export default Hero;