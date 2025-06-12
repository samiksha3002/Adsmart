// pages/_app.js
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css"; // AOS styles
import AOS from "aos";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return <Component {...pageProps} />;
}
