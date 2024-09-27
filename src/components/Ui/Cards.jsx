import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <>
      <div className="flex gap-5 justify-center items-center md:p-5 p-2 flex-wrap">
        <article className="md:w-96 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="/profile.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                27 Sep 2024{" "}
              </time>

              <Link to={"/singlepage"}>
                <h3 className="mt-0.5 text-lg font-poppins text-white">
                  How to position your furniture for positivity
                </h3>
              </Link>

              <p className="mt-2 line-clamp-3 text-sm/relaxed  text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
