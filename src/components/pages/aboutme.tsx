function Aboutme() {
  return (
    <div className="mt-20">
      {/* <h1 className="text-4xl sm:text-6xl font-bold text-center text-white m-8 sm:m-8 font-serif">
        About Me
      </h1> */}
      {/* <hr className="w-auto h-1 mx-auto my-4 bg-gray-100 border-0 rounded-full md:my-10 dark:bg-gray-700" /> */}
      {/* <div className="flex justify-center">
        <img
          src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=F7F7F7&center=true&width=435&lines=Machine+Learning+Enthusiast;Deep+Learning+Developer;Open+Source+Contributor;Always+Learning+New+Things"
          className="flex justify-center"
        />
      </div> */}
      {/* <hr className="w-auto h-1 mx-auto my-4 bg-gray-100 border-0 rounded-full md:my-10 dark:bg-gray-700" /> */}
      <h2 className="text-white mx-10  text-lg">
        Hi 👋, I'm Siddhesh Mhatre, currently studying at Bharati Vidyapeeth DMS
        in India. I'm a passionate Backend Developer and Machine Learning
        enthusiast. I love diving deep into complex systems and building
        scalable solutions that combine traditional backend architectures with
        AI capabilities. Whether it's optimizing databases, developing efficient
        APIs, or creating intelligent ML models, I enjoy tackling technical
        challenges that push the boundaries of what's possible.
      </h2>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="text-white m-5 text-3xl">Languages And Frameworks</h2>
      <p className="text-white m-5 text-lg flex flex-col gap-10 font-mono pl-8">
        🦀 Rust: Actix web, Axum, SQLx
        <br />
        🐍 Python: Flask, TensorFlow, NumPy, Pandas, Polars, PyTorch
        <br />
        🌐 Web: HTML, CSS
        <br />
        ⚛️ JavaScript: React
      </p>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="text-white m-5 text-3xl">Dev Tools</h2>
      <p className="text-white m-5 text-lg flex flex-col gap-10 font-mono pl-8">
        💻 IDE/Editors: VSCode, Neovim, Zed Editor
        <br />
        🛠️ Version Control: Git, GitHub
        <br />
        🐳 Containerization: Docker
        <br />
        🚀 Deployment: Vercel
        <br />
        📦 Runtime: Node.js, Deno, Bun
      </p>
    </div>
  );
}

export default Aboutme;
