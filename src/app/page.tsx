import Header from "@/components/Header";
import Hero from "@/components/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />

    <div className={styles.container}>
    </div>
    </>
  );
}
