import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What age groups is this program suitable for?",
      answer:
        "Our mindfulness programs are designed for children aged 4-14, with content specifically tailored for different developmental stages. Each program clearly indicates the recommended age range.",
    },
    {
      question: "How long are the meditation sessions?",
      answer:
        "Session lengths vary by age group: 3-5 minutes for ages 4-6, 5-10 minutes for ages 7-10, and 10-15 minutes for ages 11-14. All sessions are designed to match children's attention spans.",
    },
    {
      question: "Is it safe and ad-free?",
      answer:
        "Yes! Our platform is completely ad-free, ensuring a safe and focused environment for your child. We prioritize your child's privacy and well-being.",
    },
    {
      question: "Can schools use this program?",
      answer: "lorem ipsum dolor sit amet.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our mindfulness programs for kids
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-200 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset rounded-lg "
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* app cta */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 py-2">
        <div className="bg-gradient-to-r from-purple-200/40 to-blue-200/40 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900">
            Start Your Child's Mindfulness Journey Today!
          </h2>
          <p className="text-gray-600 text-sm text-wrap mt-2">
            Mindfulness for growing minds. Download the app and explore a world
            of calm, focus, and <br /> emotional well-being designed just for
            kids.
          </p>
          <div className="grid grid-cols-2 gap-2 max-w-xs mt-4">
            <div className="bg-purple-600 py-2 rounded-lg  text-center text-white text-sm font-semibold">
              <button>Create Account</button>
            </div>
            <div className="bg-green-600 py-2 rounded-lg  text-center text-white text-sm font-semibold">
              <button>Download App</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
