export default function Card() {
  return (
    <>
      <div className="flex flex-col text-white justify-center items-center min-h-screen h-auto md:mb-5 md:mt-5 mb-10">
        <img
          className="md:max-w-3xl w-xl max-h-xl object-cover hover:shadow-xl hover:shadow-black/50 transition hover:delay-100"
          src="/profile.jpg"
          alt=""
        />
        <h2 className="text-3xl font-poppins flex-col my-5 ">Title </h2>
        <p className="text-md font-poppins text-justify max-w-3xl md:p-0 px-5 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus fuga
          praesentium veritatis id quibusdam ratione neque, adipisci enim
          dolore, nemo quas quae vitae eligendi exercitationem nulla totam sunt
          dignissimos doloremque dicta. Error at quia esse ex perspiciatis
          dolorum impedit dignissimos deserunt odit! Dignissimos rerum ipsum
          odio, eligendi harum temporibus eveniet voluptatibus neque porro non
          odit facere consequatur suscipit delectus at impedit unde. Minima
          eligendi laboriosam aliquid, eos cum doloribus quae error, corporis
          incidunt soluta, repellat earum ex fugit ab dignissimos nemo. Alias,
          porro cumque? Blanditiis debitis suscipit nemo dicta, quaerat aut
          asperiores perferendis aperiam officiis adipisci similique aliquam et
          illum.
        </p>
      </div>
    </>
  );
}
