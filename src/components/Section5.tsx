import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the CareerBanao Bihar Student Credit Card Scholarship Admission Program 2025?",
    answer: "This program helps students from Bihar secure admission to top universities with financial assistance through the Bihar Student Credit Card (BSCC) scheme and CareerBanao scholarships."
  },
  {
    question: "Who can apply for this program?",
    answer: "Any student who is a resident of Bihar and is seeking admission to UG or PG courses in approved universities can apply."
  },
  {
    question: "What benefits does this program offer?",
    answer: "It provides financial assistance of up to ₹4 lakh through the BSCC scheme and additional scholarships from CareerBanao for eligible students."
  },
  {
    question: "How much is the Scholarship provided by CareerBanao?",
    answer: "The scholarship amount is up to ₹20,000."
  },
  
  {
    question: "How can I apply for this program?",
    answer: "You can apply online through the CareerBanao website. Our team will guide you through the admission and loan application process."
  },
  {
    question: "What documents are required for the application?",
    answer: "You will need: Aadhar Card, 10th & 12th Marksheet, Graduation Marksheet (for PG courses), Income & Residential Certificates, Admission Confirmation Letter (if available)."
  },
  {
    question: "Is there any application fee?",
    answer: "No, applying for this program is completely free."
  },
  {
    question: "How does the Bihar Student Credit Card (BSCC) scheme help students?",
    answer: "The BSCC scheme provides an education loan of up to ₹4 lakh to Bihar students for higher studies in approved institutions. Repayment starts after course completion."
  },
  {
    question: "Can I get a CareerBanao scholarship along with the BSCC loan?",
    answer: "Yes, eligible students can receive both financial benefits to reduce their education costs."
  },
  {
    question: "Will CareerBanao help me with loan approval and university admission?",
    answer: "Yes, we provide full support, including document verification, loan processing, and admission guidance."
  },
  {
    question: "How can I contact CareerBanao for more information?",
    answer: "You can reach out to us via phone or email. Email: info@careerbanao.org | Phone: 8750092628."
  }
];


const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl sm:max-w-5xl mx-auto p-6">
      <h2 className="text-3xl text-gray-700 font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <button
              className="w-full flex justify-between items-center p-3 sm:p-4 bg-purple-700 text-white text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 font-semibold bg-gray-100 text-gray-800"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
