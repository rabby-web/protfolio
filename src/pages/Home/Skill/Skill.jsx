import svg1 from "../../../assets/1.svg";
import svg2 from "../../../assets/2.svg";
import svg3 from "../../../assets/3.svg";
import svg4 from "../../../assets/4.svg";
import svg5 from "../../../assets/5.svg";
import svg6 from "../../../assets/6.svg";
import svg7 from "../../../assets/7.svg";
import svg8 from "../../../assets/8.svg";
import svg9 from "../../../assets/9.svg";
const Skill = () => {
  return (
    <div className="py-6 px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        <div className="text-2xl text-center border p-4 rounded-md">
          <div className="flex justify-center gap-3  items-center">
            <img src={svg2} alt="" />
            <h2 className="dark:text-white text-dark-01">HTML</h2>
          </div>

          <progress
            className="progress progress-info w-56"
            value="90"
            max="100"
          ></progress>
        </div>
        <div className="text-2xl text-center border p-4 rounded-md">
          <div className="flex justify-center gap-3  items-center">
            <img src={svg1} alt="" />
            <h2 className="dark:text-white text-dark-01">CSS</h2>
          </div>

          <progress
            className="progress progress-info w-56"
            value="80"
            max="100"
          ></progress>
        </div>
        <div className="text-2xl text-center border p-4 rounded-md">
          <div className="flex justify-center gap-3  items-center">
            <img src={svg3} alt="" />
            <h2 className="dark:text-white text-dark-01">Tailwind CSS</h2>
          </div>

          <progress
            className="progress progress-info w-56"
            value="90"
            max="100"
          ></progress>
        </div>
        <div className="text-2xl text-center border p-4 rounded-md">
          <div className="flex justify-center gap-3  items-center">
            <img src={svg4} alt="" />
            <h2 className="dark:text-white text-dark-01">JavaScript</h2>
          </div>

          <progress
            className="progress progress-info w-56"
            value="65"
            max="100"
          ></progress>
        </div>
        <div className="text-2xl text-center border p-4 rounded-md">
          <div className="flex justify-center gap-3  items-center">
            <img src={svg5} alt="" />
            <h2 className="dark:text-white text-dark-01">React</h2>
          </div>

          <progress
            className="progress progress-info w-56"
            value="70"
            max="100"
          ></progress>
        </div>
        <div className="text-2xl text-center border p-4 rounded-md">
          <div className="flex justify-center gap-3  items-center">
            <img src={svg7} alt="" />
            <h2 className="dark:text-white text-dark-01">Firebase</h2>
          </div>

          <progress
            className="progress progress-info w-56"
            value="90"
            max="100"
          ></progress>
        </div>
        <div className="text-2xl text-center border p-4 rounded-md">
          <div className="flex justify-center gap-3  items-center">
            <img src={svg6} alt="" />
            <h2 className="dark:text-white text-dark-01">Node JS</h2>
          </div>

          <progress
            className="progress progress-info w-56"
            value="60"
            max="100"
          ></progress>
        </div>
        <div className="text-2xl text-center border p-4 rounded-md">
          <div className="flex justify-center gap-3  items-center">
            <img src={svg9} alt="" />
            <h2 className="dark:text-white text-dark-01">Express JS</h2>
          </div>

          <progress
            className="progress progress-info w-56"
            value="70"
            max="100"
          ></progress>
        </div>
        <div className="text-2xl text-center border p-4 rounded-md">
          <div className="flex justify-center gap-3 items-center">
            <img src={svg8} alt="" />
            <h2 className="dark:text-white text-dark-01">MongoDB</h2>
          </div>

          <progress
            className="progress progress-info w-56"
            value="60"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skill;
