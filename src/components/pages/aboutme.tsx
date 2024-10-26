function Aboutme() {
  return (
    <div className="bg-black">
      <div className="absolute top-8 right-8 flex items-center">
        <img
          src="./assets/react.svg"
          alt="Profile Logo"
          className="h-12 w-12 rounded-full mr-4"
        />
        <span className="text-white text-xl">Siddhesh Mhatre</span>
      </div>
      <h1 className="text-6xl font-bold text-center text-white m-8">
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
    </div>
  );
}

export default Aboutme;
