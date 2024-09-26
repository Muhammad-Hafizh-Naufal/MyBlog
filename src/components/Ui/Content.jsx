import Cards from "./Cards";
import Banner from "./Banner";

export default function Content() {
  return (
    <>
      <div className="min-h-screen h-auto ">
        <Banner />
        <Cards />
      </div>
    </>
  );
}
