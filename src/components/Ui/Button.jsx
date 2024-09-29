import { Link } from "react-router-dom";
export default function Button() {
  return (
    <>
      <Link to="/addblog">
        <div className="sticky bottom-0 right-0 flex justify-end">
          <button className="bg-SecondColor  rounded-md py-3 px-7 mt-6 text-white">
            Add Content
          </button>
        </div>
      </Link>
    </>
  );
}
