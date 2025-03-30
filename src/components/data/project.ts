const projects: {
  img: string;
  anchor: string;
  title: string;
  content: string;
}[] = [
  {
    title: "Fake news detector",
    img: "https://github-readme-stats.vercel.app/api/pin/?username=glitchySid&repo=Fake-News-Detector&theme=radical&border_color=242424&bg_color=0D1117&title_color=C9D1D9&text_color=8B949E&icon_color=7F3FBF",
    anchor: "https://github.com/glitchySid/Fake-News-Detector",
    content:
      "This is a machine learning model built using a data about whether the news is true or flase. The Model is built using tensorflow. The Interface for interacting with the model is buit using flask as the backend and HTML and CSS for the frontend",
  },
  {
    title: "ToDo List",
    img: "https://github-readme-stats.vercel.app/api/pin/?username=glitchySid&repo=CLI-todo&theme=radical&border_color=242424&bg_color=0D1117&title_color=C9D1D9&text_color=8B949E&icon_color=242424",
    anchor: "https://github.com/glitchySid/CLI-todo",
    content:
      "This is Terminal based ToDo list application. It is built using rust for maximum efficiency and blazingly fast performance. It only use rusqlite as an external library. I have not used any TUI library for the Interface",
  },
  {
    title: "Portfolio Site",
    anchor: "https://github.com/glitchySid/My-Portfolio",
    img: "https://github-readme-stats.vercel.app/api/pin/?username=glitchySid&repo=My-Portfolio&theme=radical&border_color=242424&bg_color=0D1117&title_color=C9D1D9&text_color=8B949E&icon_color=242424",
    content:
      "This is My portfolio website that you are seeing now, it is made using typescript, react and tailwind. for the animations i used tailwindcss-motion",
  },
];
export { projects };
