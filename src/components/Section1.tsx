
const steps = [
  {
    title: "Registration",
    description: "Complete your registration to begin the process.",
    icon: "📝",
    gradient: "bg-gradient-to-r from-green-500 to-blue-500",
  },
  {
    title: "Admission",
    description: "Secure your admission in the desired institution.",
    icon: "🎓",
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    title: "Bonafide Certificate Issue",
    description: "Get your Bonafide Certificate issued from the college.",
    icon: "📜",
    gradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    title: "Apply to DRCC",
    description: "Submit your application to DRCC for further processing.",
    icon: "📩",
    gradient: "bg-gradient-to-r from-pink-500 to-orange-500",
  },
  {
    title: "College Reporting",
    description: "Report to the college to complete the final formalities.",
    icon: "🏫",
    gradient: "bg-gradient-to-r from-orange-500 to-yellow-500",
  }
];

const Process = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-poppins mb-6 text-2xl sm:text-4xl font-bold text-gray-700">
      BSCCS SCHOLARSHIP ADMISSION PROGRAM 2025
      </h1>
    <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 p-6">
      {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col items-center md:flex-1">
          {/* Gradient Circle with Icon */}
          <div className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl ${step.gradient}`}>
            {step.icon}
          </div>

          {/* Vertical Line for Mobile */}
          {index < steps.length - 1 && <div className="md:hidden h-16 w-1 bg-gray-300"></div>}

          {/* Title and Description */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{step.description}</p>
          </div>

          {/* Horizontal Line for Desktop */}
          {index < steps.length - 1 && <div className="hidden md:block absolute top-8 left-full h-1 w-8 bg-gray-300"></div>}
        </div>
      ))}
    </div>
    
    </div>
  );
};

export default Process;
