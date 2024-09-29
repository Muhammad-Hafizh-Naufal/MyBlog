import { Link } from "react-router-dom";
export default function Card(props) {
  const { title, content, url, id, deleteblog } = props;
  return (
    <>
      <div className="flex flex-col text-white justify-center items-center min-h-screen h-auto md:mb-5 md:mt-5 mb-10">
        <img
          className="md:max-w-2xl w-xl max-h-md   object-cover hover:shadow-xl hover:shadow-black/50 transition hover:delay-100"
          src={url}
          alt=""
        />
        <div className="flex gap-5 md:mb-2">
          <button
            onClick={() => deleteblog(id)}
            className="bg-SecondColor rounded-md py-3 px-7 mt-6 text-white"
          >
            Delete
          </button>
          <Link to={`/edit/${id}`}>
            <button className="bg-SecondColor rounded-md py-3 px-7 mt-6 text-white">
              Edit
            </button>
          </Link>
        </div>
        <h2 className="text-3xl font-poppins flex-col my-5 ">{title} </h2>
        <p className="text-md font-poppins text-justify max-w-3xl md:p-0 px-5 ">
          {content}
        </p>
      </div>
    </>
  );
}
