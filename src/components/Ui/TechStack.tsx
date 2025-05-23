import rust from "../../assets/languages/rust.svg";
import python from "../../assets/languages/python.svg";
import javascript from "../../assets/languages/javascript.svg";
import backgroundImage from "../../assets/background.webp";

const TechStack = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 p-4 md:p-8">
      {/* Languages and Frameworks Card */}
      <div
        className="relative p-4 md:p-6 rounded-xl shadow-lg overflow-hidden border border-gray-100 border-opacity-20 max-w-md w-full md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-md"></div>
        <div className="relative z-10">
          <h2 className="text-white text-2xl md:text-3xl mb-5">
            Languages and Frameworks
          </h2>
          <ul className="text-white text-sm md:text-lg flex flex-col gap-4 font-mono pl-4">
            <li className="flex items-center gap-2">
              <img src={rust} alt="Rust" className="h-6 w-6" />
              <span>
                <span className="font-semibold">Rust</span>: Actix web, Axum,
                SQLx
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={python} alt="Python" className="h-6 w-6" />
              <span>
                <span className="font-semibold">Python</span>: Flask,
                TensorFlow, NumPy, Pandas, Polars, PyTorch
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={javascript} alt="JavaScript" className="h-6 w-6" />
              <span>
                <span className="font-semibold">JavaScript</span>: ReactJs,
                SolidJs
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Dev Tools Card */}
      <div
        className="relative p-4 md:p-6 rounded-xl shadow-lg overflow-hidden border border-gray-100 border-opacity-20 max-w-md w-full md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-md"></div>
        <div className="relative z-10">
          <h2 className="text-white text-2xl md:text-3xl mb-5">Dev Tools</h2>
          <ul className="text-white text-sm md:text-lg flex flex-col gap-4 font-mono pl-4">
            <li className="flex items-center gap-2">
              <span>
                <span className="font-semibold">IDE/Editors</span>: VSCode,
                Neovim, Zed Editor
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <span className="font-semibold">Version Control</span>: Git,
                GitHub
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <span className="font-semibold">Containerization</span>: Docker
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <span className="font-semibold">Deployment</span>: Vercel
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <span className="font-semibold">Runtime</span>: Node.js, Deno,
                Bun
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
