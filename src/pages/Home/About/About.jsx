import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const About = () => {
  return (
    <div className="md:flex items-center py-8 my-4">
      <div className="flex-1">
        <h2 className="text-center text-2xl font-semibold text-dark-01 dark:text-dark-03">
          Social Link
        </h2>
        <div className="text-dark-01 dark:text-white flex flex-col gap-4 mt-4">
          <a href="https://github.com/rabby-web">
            <div className="flex items-center justify-center gap-2 btn btn-outline btn-info w-1/2 mx-auto">
              <FaGithub />
              <h2>GitHub</h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/rabby-web/">
            <div className="flex items-center justify-center gap-2 btn btn-outline btn-info w-1/2 mx-auto">
              <FaLinkedin />

              <h2>Linkedin</h2>
            </div>
          </a>
          <a href="https://www.facebook.com/ridoy.babu.3538">
            <div className="flex items-center justify-center gap-2 btn btn-outline btn-info w-1/2 mx-auto">
              <FaFacebook />
              <h2>Facebook</h2>
            </div>
          </a>
        </div>
      </div>
      <div className="divider lg:divider-horizontal dark:text-white">OR</div>;
      <div className="flex-1">
        <p className="sm:text-base md:text-lg font-medium max-w-5xl mx-auto text-center md:text-left p-3 text-dark-01 dark:text-white">
          Hi, I am Zulkar Naeem Rabby.Front-end developer with a passion for
          React. Committed to continuous learning and mastering the art of
          crafting intuitive and beautiful user interfaces. <br />
          <br /> I am a passionate Web developer love for clean and efficient
          code. With a strong foundation in various programming frameworks, I am
          always eager to expand my knowledge and explore new technologies. With
          a keen eye for detail and a dedication to delivering high-quality Web
          solutions, I am driven to make a positive impact in the world of
          technology. Connect with me on GitHub to see my activity.
        </p>
      </div>
    </div>
  );
};

export default About;
