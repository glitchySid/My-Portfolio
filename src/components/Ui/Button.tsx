type ButtonProps = {
  name: string;
  lable: string;
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

const Button = ({ name, lable, setActiveTab, activeTab }: ButtonProps) => {
  return (
    <button
      onClick={() => setActiveTab(lable)}
      className={`flex-1 px-4 py-1 rounded-full transition-all duration-300 text-sm font-medium text-white
        ${
          activeTab === lable
            ? "bg-white/20 dark:bg-black/20 shadow-lg backdrop-blur-lg"
            : "hover:bg-white/10 dark:hover:bg-black/10"
        }`}
    >
      {name}
    </button>
  );
};

export default Button;
