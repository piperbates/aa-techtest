import Header from "@/components/Header";
import Hero from "@/components/Hero";
import styles from "./page.module.css";
import InfoBox from "@/components/InfoBox";
import Section from "@/components/Section";
import CallToActionBox from "@/components/CallToActionBox";
import Carousel from "@/components/Carousel";
import CarouselBox from "@/components/CarouselBox";
import Box from "@/components/Box";


// SVGs

import search from "@/assets/icons/search.svg";
import choice from "@/assets/icons/choice.svg";
import service from "@/assets/icons/service.svg";

import illness from "@/assets/icons/illness.svg";
import weather from "@/assets/icons/weather.svg";
import refundable from "@/assets/icons/refundable.svg";
import emergency from "@/assets/icons/emergency.svg";
import breakdown from "@/assets/icons/breakdown.svg";
import more from "@/assets/icons/more.svg";

// Images
import destinations from "@/utils/destinations";
import blogs from "@/utils/blogs";
import GridBox from "@/components/GridBox";

export default function Home() {
  const newBlogData = blogs.map((blog)=>{
    if(blog.title.length > 54) {
      return {
        title: `${blog.title.slice(0, 54)}...`, 
        category: blog.category, 
        desktopImg: blog.desktopImg, 
        mobileImg: blog.mobileImg  }
    } else {
      return blog
    }
  })

  const grid = [
    {
      name: "Illness",
      icon: illness.src
    },
    {
      name: "Weather",
      icon: weather.src
    },
    {
      name: "Refundable Booking",
      icon: refundable.src
    },
    {
      name: "Emergency",
      icon: emergency.src
    },
    {
      name: "Mechanical Breakdown",
      icon: breakdown.src
    },
    {
      name: "Plus much much more",
      icon: more.src
    },
  ]

  return (
    <>
    <Header />
    <Hero />

    <div className={styles.container}>
    <Section>
      <InfoBox icon={search.src}>
        <div>
          <h2>Simple Search</h2>
          <p>Easily search and book flights from anywhere in the world</p>
        </div>
      </InfoBox>

      <InfoBox icon={choice.src}>
        <div>
          <h2>Unlimited choice</h2>
          <p>Find the flight you were looking for and pay on your terms</p>
        </div>
      </InfoBox>

      <InfoBox icon={service.src}>
          <h2>Expert customer service</h2>
          <p>Dedicated customer support team once you have booked</p>
      </InfoBox>
    </Section>

    <Section>
      <CallToActionBox callToAction="Browse payment methods" image={service.src}>
        <h2>Buy now, pay later</h2>
        <p>Book your flights today and spread the cost over time with one of our installment options.</p>
        <ul>
          <li>Make payments weekly or monthly</li>
          <li>Interest free options</li>
          <li>Fast approval</li>
        </ul>
      
      </CallToActionBox>
    </Section>

    <Section>
      <Carousel subtitle="Exploring Australia">
          {destinations.map((destination, i)=>{
            return <CarouselBox 
                      title={destination.city} 
                      content={destination.country} 
                      img={destination.image.src} 
                      key={i} />
          })}
        </Carousel>
    </Section>

    <Section>
        <GridBox title="Cancellation protection" content="During these uncertain times we recommend adding Cancellation protection to your booking" grid={grid} recommended />
    </Section>

    <Section>
      <Carousel title="Blog" subtitle="Alternative adventures">
        {newBlogData.map((blog, i)=>
          <CarouselBox title={blog.title} content={blog.category} img={blog.mobileImg.src} key={i} />
        )}
      </Carousel>
    </Section>

   
    </div>
    </>
  );
}
