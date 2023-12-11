import About from "../About/About";
import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <h2 className="text-2xl text-center font-semibold py-3 text-dark-01 dark:text-dark-03">
        About Me
      </h2>
      <About></About>
      <h2 className="text-2xl text-center font-semibold py-3 text-dark-01 dark:text-dark-03">
        Skill
      </h2>
      <div className="pb-5">
        <Skill></Skill>
      </div>
      <h2 className="text-2xl text-center font-semibold py-3 text-dark-01 dark:text-dark-03">
        Projects
      </h2>
      <div className="pb-5">
        <Skill></Skill>
      </div>
      <h2 className="text-2xl text-center font-semibold py-3 text-dark-01 dark:text-dark-03">
        Contract
      </h2>
      <div className="pb-5">
        <Contract></Contract>
      </div>
    </div>
  );
};

export default Home;
