import IG from "../icons/ig";
import GITHUB from "../icons/github";
import LINKEDIN from "../icons/linkedin";

export default function Footer() {
  return (
    <>
      <div className="bg-ThirdColor md:py-10 border-t-2  ">
        <div className="flex md:flex-row md:gap-0 gap-5 flex-col md:text-start text-center flex-wrap justify-evenly items-center text-md">
          <h3>
            Thanks for <span>visiting</span>
          </h3>
          <h3>
            Made with <span>Muhammad Hafizh Naufal</span>
          </h3>

          <ul className="flex  md:flex-col justify-center gap-5">
            <li className="hover:text-white hover:bg-SecondColor rounded-full">
              <a href="https://www.instagram.com/hafizh_naufal03/">
                <IG />
              </a>
            </li>
            <li className="hover:text-white hover:bg-SecondColor rounded-full">
              <a href="https://github.com/Muhammad-Hafizh-Naufal">
                <GITHUB />
              </a>
            </li>
            <li className="hover:text-white hover:bg-SecondColor rounded-full">
              <a href="https://www.linkedin.com/in/muhammad-hafizh-naufal-3926162b5/">
                <LINKEDIN />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
