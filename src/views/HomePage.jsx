import Navbar from "../components/Ui/Navbar";
import Footer from "../components/Ui/Footer";
import Content from "../components/Ui/Content";
import Button from "../components/Ui/Button";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    alert("Web Dalam tahap pengembangan");
  });
  return (
    <>
      <div className=" bg-radial-at-bottom bg-gradient-to-b from-ThirdColor to-SecondColor  ">
        <div className="">
          <img
            className="md:absolute md:block hidden "
            src="/circle.png"
            alt=""
          />
          <Navbar />
          <Content />
          <Button />
          <Footer />
        </div>
      </div>
    </>
  );
}
