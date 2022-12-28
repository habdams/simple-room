import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className=" m-auto w-screen px-10 ">
      <Navbar />
      <section className=" flex flex-col items-center">
        <section className="flex flex-col justify-center items-center text-center mb-10">
          <h1 className="font-bold text-5xl mt-20 mb-10">Minimalist Room</h1>
          <p className="w-full md:w-1/2 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </section>

        <section className="w-full">
          <img src="./phot.png" alt="image of a sofa room" />
        </section>

        <section className="flex md:flex-row flex-col  my-20 gap-10 ">
          <section className="w-full md:w-1/2 flex flex-col gap-4 justify-between">
            <h3 className="font-semibold text-lg text-[#333333]">
              Project Overview
            </h3>
            <p className="text-[#9C9C9C]">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere. Online learning with us does not
              interfere with your daily life. because learning can be done
              anytime and anywhere.
            </p>
            <span className="text-[#9C9C9C] flex gap-10">
              <p>July 22 - 2022</p>
              <p>Interior Design - Furnitur</p>
            </span>
          </section>
          <section className="w-full md:w-1/2 flex flex-col gap-4 justify-between">
            <h3 className="font-semibold text-lg text-[#333333]">
              Design Process
            </h3>
            <p className="text-[#9C9C9C]">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
            <p className="text-[#9C9C9C]">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
          </section>
        </section>
        <section className="grid grid-cols-2 min-h-full min-w-full gap-4">
          <div>
            <img src="./phot1.png" alt="" srcset="" />
          </div>
          <div>
            <img src="./phot2.png" alt="" srcset="" />
          </div>
          <div className="col-span-2 w-full">
            <img src="./phot3.png" alt="" srcset="" className="w-full" />
          </div>
          <div>
            <img src="./phot4.png" alt="" srcset="" />
          </div>
          <div>
            <img src="./phot5.png" alt="" srcset="" />
          </div>
        </section>
      </section>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
