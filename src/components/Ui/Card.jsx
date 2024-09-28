export default function Card(props) {
  const { title, content, url } = props;
  return (
    <>
      <div className="flex flex-col text-white justify-center items-center min-h-screen h-auto md:mb-5 md:mt-5 mb-10">
        <img
          className="md:max-w-3xl w-xl max-h-xl object-cover hover:shadow-xl hover:shadow-black/50 transition hover:delay-100"
          src={url}
          alt=""
        />
        <h2 className="text-3xl font-poppins flex-col my-5 ">{title} </h2>
        <p className="text-md font-poppins text-justify max-w-3xl md:p-0 px-5 ">
          {content}
        </p>
      </div>
    </>
  );
}
