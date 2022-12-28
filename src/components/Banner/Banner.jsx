export default function Banner() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center text-center gap-10 text-white bg-[#2C3878] w-screen -mx-10 px-10 py-10 my-20">
      <section className="w-full md:w-2/3">
        <h3 className="text-2xl font-semibold w-full md:w-3/4">
          let's discuss making your interior like a dream place!
        </h3>
      </section>
      <section className="text-sm w-full md:w-1/3 ">
        <p className="mb-10">
          Contact us below to work together to build your amazing interior
        </p>
        <a href="#" className="px-6 py-4 bg-white text-[#2C3878]">
          Contact Us
        </a>
      </section>
    </section>
  );
}
