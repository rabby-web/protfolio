import About from "../About/About";
import Banner from "../Banner/Banner";
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
      <div className="mb-4">
        <Skill></Skill>
      </div>
    </div>
  );
};

export default Home;
