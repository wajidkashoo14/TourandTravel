import styles from "../styles/Home.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <video className={styles.video} src="mountains.mp4" muted loop autoPlay />
    </div>
  );
}

export default Hero;
