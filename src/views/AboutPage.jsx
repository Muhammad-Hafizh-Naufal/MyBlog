import Navbar from "../components/Ui/Navbar";
export default function AboutPage() {
  return (
    <>
      <div>
        <Navbar />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="max-h-96 md:h-screen">
              <img
                className="w-screen h-screen object-cover object-top"
                src="/profile.jpg"
                alt=""
              />
            </div>
            <div className="flex bg-gray-100 p-10">
              <div className="mb-auto mt-auto max-w-lg">
                <h1 className="text-3xl font-poppins uppercase">
                  Muhammad Hafizh Naufal
                </h1>
                <p className="font-semibold mb-5">Full Stack Dev</p>
                <p className="font-poppins text-justify">
                  Kenalin Gua Muhammad Hafizh Naufal, teman-teman biasa memangil
                  gua Hapis, Gua anak Fikti atau lebih tepatnya anak Jurusan
                  Sistem Infomasi, Nahhh tujuan gua bikin web ini adalah sebagai
                  tempat atau wadah gua untun mengumpulkan tugas dan project gua
                  semasa kuliah cuy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
