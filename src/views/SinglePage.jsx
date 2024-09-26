// import Footer from "../components/Ui/Footer";
import Navbar from "../components/Ui/Navbar";
import Card from "../components/Ui/Card";
import Footer from "../components/Ui/Footer";
export default function SinglePage() {
  return (
    <>
      <div className=" bg-radial-at-bottom bg-gradient-to-b from-ThirdColor to-SecondColor  ">
        <div>
          <img
            className="md:absolute md:block hidden "
            src="/circle.png"
            alt=""
          />
          <Navbar />
          <Card />
          <Footer />
        </div>
      </div>
    </>
  );
}
