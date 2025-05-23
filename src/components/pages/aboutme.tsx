import TechStack from "../Ui/TechStack";
import backgroundImage from "../../assets/backgroud.jpg";

function Aboutme() {
  const traits = ["Nerd", "Curious", "Passionate", "Enthusiast"];
  return (
    <div className="mt-20">
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative flex justify-center">
          <div className="flex flex-col text-center p-36">
            <h1 className="text-white font-bold mx-10 text-4xl">
              Hi 👋, I'm <span className="text-[#88F667]">Siddhesh Mhatre</span>
            </h1>
            <div className="flex flex-wrap gap-4 justify-center mt-20">
              {traits.map((trait, index) => (
                <span
                  key={index}
                  className="text-white px-8 py-1 rounded-full bottom-1 border-[#303030] border-2 text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-white mx-10 text-center text-lg">
        Computer Science student at Bharati Vidyapeeth DMS, India. Backend
        Developer and ML enthusiast focused on building scalable systems that
        integrate AI. Passionate about solving complex technical challenges with
        elegant solutions.
      </h2>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <TechStack />
      </div>
    </div>
  );
}

export default Aboutme;
