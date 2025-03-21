import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Importing the icon

const Section = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 sm:p-10 bg-white">
      {/* Left Content */}
      <motion.div 
        className="md:w-1/2 text-left space-y-6 text-white p-2 sm:p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-purple-700 leading-tight">
          CareerBanao Bihar Student Credit Card Admission Program 2024
        </h2>
        <h3 className="text-2xl font-semibold text-pink-500">
          DRCC ADMISSION COUNSELING 2024
        </h3>
        <ul className="space-y-2 text-black text-lg">
          {["Registration", "Admission", "Bonafide Certificate Issue", "Apply to DRCC", "College Reporting"].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> {/* Custom icon */}
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="./imgs/pexels-buro-millennial-636760-1438072.jpg" 
          alt="CareerBanao Image" 
          className="w-full md:w-[80%] h-full md:h-auto max-h-[400px] rounded-lg shadow-2xl object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Section;
