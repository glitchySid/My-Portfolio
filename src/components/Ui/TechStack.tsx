import rust from "../../assets/languages/rust.svg";
import python from "../../assets/languages/python.svg";
import javascript from "../../assets/languages/javascript.svg";

const TechStack = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-8">
      {/* Languages and Frameworks Card */}
      <div className="relative p-6 bg-white bg-opacity-10 rounded-xl shadow-lg overflow-hidden backdrop-filter backdrop-blur-md border border-gray-100 border-opacity-20 max-w-md w-full md:w-1/2">
        <h2 className="text-white text-3xl mb-5">Languages and Frameworks</h2>
        <ul className="text-white text-lg flex flex-col gap-4 font-mono pl-4">
          <li className="flex items-center gap-2">
            <img src={rust} alt="Rust" className="h-6 w-6" />
            <span>
              <span className="font-semibold">Rust</span>: Actix web, Axum, SQLx
            </span>
          </li>
          <li className="flex items-center gap-2">
            <img src={python} alt="Python" className="h-6 w-6" />
            <span>
              <span className="font-semibold">Python</span>: Flask, TensorFlow,
              NumPy, Pandas, Polars, PyTorch
            </span>
          </li>
          <li className="flex items-center gap-2">
            <img src={javascript} alt="JavaScript" className="h-6 w-6" />
            <span>
              <span className="font-semibold">JavaScript</span>: React
            </span>
          </li>
        </ul>
      </div>

      {/* Dev Tools Card */}
      <div className="relative p-6 bg-white bg-opacity-10 rounded-xl shadow-lg overflow-hidden backdrop-filter backdrop-blur-md border border-gray-100 border-opacity-20 max-w-md w-full md:w-1/2">
        <h2 className="text-white text-3xl mb-5">Dev Tools</h2>
        <ul className="text-white text-lg flex flex-col gap-4 font-mono pl-4">
          <li className="flex items-center gap-2">
            <span>IDE/Editors: VSCode, Neovim, Zed Editor</span>
          </li>
          <li className="flex items-center gap-2">
            <span>Version Control: Git, GitHub</span>
          </li>
          <li className="flex items-center gap-2">
            <span>Containerization: Docker</span>
          </li>
          <li className="flex items-center gap-2">
            <span>Deployment: Vercel</span>
          </li>
          <li className="flex items-center gap-2">
            <span>Runtime: Node.js, Deno, Bun</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
