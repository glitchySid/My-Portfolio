import { useState } from "react";
import MainPage from "./components/Main-Page";
import LoadingScreen from "./components/Ui/Loading/LoadingScreen";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div className={`min-h-screen bg-black w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isLoading ? 'hidden' : ''}`}>
        <MainPage />
      </div>
    </>
  );
}

export default App;
