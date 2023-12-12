import Download from "../Download/Download";

const Banner = () => {
  return (
    <div>
      {/* grid */}
      <div className="md:flex items-center py-4">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/cJYRjYG/rabby-protfolio-removebg-preview.png"
            alt=""
            className="w-96 h-96 mx-auto"
          />
        </div>
        <div className="flex-1 text-center md:text-left space-y-2">
          <h4 className="text-dark-01 dark:text-white">Hello, this is</h4>
          <h2 className="text-dark-03 text-3xl font-medium">
            Zulkar Naeem Rabby
          </h2>
          <h2 className="dark:text-white text-3xl font-medium">
            And I'm{" "}
            <span className="dark:text-[#9C1291] text-[#134699]">
              Web & MERN Stack Developer
            </span>
          </h2>
          <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
            <button className="py-3 px-5 border my-2 text-lg rounded bg-dark-01 dark:bg-dark-03 text-white">
              About Me
            </button>
            {/* <button className="py-3 px-5 border my-2 text-lg rounded bg-dark-01 dark:bg-dark-03 text-white">
              Download Resume
            </button> */}
            <Download></Download>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
