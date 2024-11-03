import { motion } from "framer-motion";

type ButtonProps = {
  name: string;
  lable: string;
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

const Button = ({ name, lable, setActiveTab, activeTab }: ButtonProps) => {
  return (
    <motion.button
      className={`px-3 py-1 rounded-full text-center ${activeTab === name ? "bg-gray-700 text-white" : "bg-gray-400"
        }`}
      onClick={() => setActiveTab(lable)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {name}
    </motion.button>
  );
};

export default Button;

