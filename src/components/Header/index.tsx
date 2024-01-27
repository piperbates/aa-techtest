import React from "react";
import styles from "./header.module.css"
import Image from "next/image";
import alternativeAirlines from '../../assets/images/logos/alternative-airlines.jpg'
import logo from '../../assets/icons/menu.svg'

const Header = () => (
    <div className={styles.header}>
        <div className={styles.aaLogoWrapper}>
            <Image src={alternativeAirlines.src} fill alt={'logo'} />
        </div>
        <div className={styles.navigationList}>
            <ul>
                <li className={styles.moreNav}>Book flights</li>
                <li className={styles.moreNav}>Information</li>
                <li className={styles.moreNav}>Help</li>
                <li>Travel Agents</li>
                <li>Manage booking</li>
            </ul>
        </div>

        <div className={styles.hamburger}>
            <Image src={logo.src} fill alt="menu" />
        </div>
    </div>);

export default Header