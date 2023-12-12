const About = () => {
  return (
    <div className="md:flex items-center py-8 my-4 px-4">
      <div className="flex-1 ms-4">
        <h2 className="text-2xl font-semibold text-dark-01 dark:text-dark-03">
          Education:-
        </h2>
        <div className="mt-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-dark-01 dark:text-white">
              BACHALOR DIGREE <br /> JAN 1021 - MAY 2025
            </h2>
            <h4 className="text-xl text-dark-01 dark:text-dark-03">
              SYED AHMED COLLEGE
            </h4>
          </div>
          <div className="space-y-2 mt-4">
            <h2 className="text-2xl font-semibold text-dark-01 dark:text-white">
              Web Developer <br /> July 2023 - Dec 2023
            </h2>
            <h4 className="text-xl text-dark-01 dark:text-dark-03">
              Programming Hero
            </h4>
          </div>
        </div>
      </div>
      <div className="divider lg:divider-horizontal dark:text-white">OR</div>;
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-dark-01 dark:text-dark-03">
          Overview:-
        </h2>
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
