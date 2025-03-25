import { motion } from "framer-motion";

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
        <h1 className=" text-2xl sm:text-4xl font-bold text-purple-700 leading-tight text-center">
        CareerBanao Bihar Student Credit Card Scholarship Admission Program 2025
        </h1>
        <h1 className="text-2xl font-semibold text-pink-500">
        BSCCS Scholarship Admission Program 2025
        </h1>
        <p className="text-sm text-gray-700">CB-BSCCSAP 2025 (CareerBanao Bihar Student Credit Card Scholarship Admission Program 2025) simplifies the admission process for students in Bihar. It covers Registration, Admission, Bonafide Certificate Issuance, DRCC Application, and College Reporting. The program ensures smooth navigation of formalities, making higher education more accessible through proper guidance and support</p>
        +
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="./imgs/drccpic.jpg" 
          alt="CareerBanao Image" 
          className="w-full md:w-[80%] h-full md:h-auto max-h-[400px] rounded-lg shadow-2xl object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Section;
