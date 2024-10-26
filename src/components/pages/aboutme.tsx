function Aboutme() {
  return (
    <div className="bg-black">
      <h1 className="text-4xl sm:text-6xl font-bold text-center text-white m-4 sm:m-8">
        About Me
      </h1>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <h2 className="text-white m-10 text-lg">
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
        📦 Runtime: Node.js
      </p>
    </div>
  );
}

export default Aboutme;
