import React from "react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Bedtime Stories",
      description: "Soothing stories to help kids drift off to peaceful sleep",
      image: "🌙",
      color: "from-blue-400 to-purple-500",
      age: "Ages 4-10",
    },
    {
      id: 2,
      title: "Focus & Attention",
      description: "Fun exercises to improve concentration and mindfulness",
      image: "🎯",
      color: "from-green-400 to-blue-500",
      age: "Ages 6-14",
    },
    {
      id: 3,
      title: "Emotional Wellness",
      description: "Learn to understand and manage big feelings",
      image: "❤️",
      color: "from-pink-400 to-red-500",
      age: "Ages 5-12",
    },
    {
      id: 4,
      title: "Breathing Exercises",
      description: "Simple breathing techniques for calm and relaxation",
      image: "🫁",
      color: "from-cyan-400 to-teal-500",
      age: "Ages 4-14",
    },
    {
      id: 5,
      title: "Movement & Yoga",
      description: "Gentle movements to connect mind and body",
      image: "🧘‍♂️",
      color: "from-orange-400 to-pink-500",
      age: "Ages 5-14",
    },
    {
      id: 6,
      title: "Gratitude Practice",
      description: "Daily practices to cultivate thankfulness and joy",
      image: "🙏",
      color: "from-yellow-400 to-orange-500",
      age: "Ages 6-14",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Programs for Every Age
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover age-appropriate mindfulness activities designed by child
            development experts to nurture your child's emotional growth and
            well-being.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-br ${program.color} p-6 text-center`}
              >
                <div className="text-4xl mb-3">{program.image}</div>
                <span className="inline-block bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {program.age}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <button className="w-full bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-600 py-3 px-4 rounded-lg font-medium transition-colors group-hover:bg-purple-50 group-hover:text-purple-600">
                  Explore Program
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
            View All Programs
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h1 className="text-2xl font-bold text-gray-900">
          Build for Kids, Loved by Parents
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius nunc in odio condimentum, at condimentum nisi dapibus.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius nunc in odio condimentum, at condimentum nisi dapibus.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius nunc in odio condimentum, at condimentum nisi dapibus.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius nunc in odio condimentum, at condimentum nisi dapibus.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius nunc in odio condimentum, at condimentum nisi dapibus.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius nunc in odio condimentum, at condimentum nisi dapibus.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-20  text-center ">
        <div className="bg-purple-100/30 px-0 py-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="text-gray-600">
            Start free, cancel anytime. No hidden fees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 sm:px-6">
            <div className="border bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
              <p className="text-purple-600 font-bold text-2xl">Free</p>
              <div className="flex pt-1 flex-col items-center gap-1">
                <div className="flex flex-row gap-4 md:gap-5">
                  <div>✅</div>
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
                <div className="flex flex-row gap-4 md:gap-5">
                  <div>✅</div>
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
                <div className="flex flex-row gap-4 md:gap-5">
                  <div>✅</div>
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="border bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">Premium</h3>
              <p className="text-purple-600 font-bold text-2xl">₹299/mo</p>
              <div className="flex pt-1 flex-col items-center gap-1">
                <div className="flex flex-row gap-4 md:gap-5">
                  <div>✅</div>
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
                <div className="flex flex-row gap-4 md:gap-5">
                  <div>✅</div>
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
                <div className="flex flex-row gap-4 md:gap-5">
                  <div>✅</div>
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-lg transition-colors">
                Upgrade Now
              </button>
            </div>
            <div className="border bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">Family</h3>
              <p className="text-purple-600 font-bold text-2xl">₹499/mo</p>
              <div className="flex pt-1 flex-col items-center gap-1">
                <div className="flex flex-row gap-4 md:gap-5">
                  <div>✅</div>
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
                <div className="flex flex-row gap-4 md:gap-5">
                  <div>✅</div>
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
                <div className="flex flex-row gap-4 md:gap-5">
                  <div>✅</div>
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
              </div>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-lg transition-colors">
                Get Family Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-20">
        <div className="bg-gradient-to-r from-purple-200/40 to-blue-200/30 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900">
            Parent & Teacher Hub
          </h2>
          <p className="text-gray-600 text-pretty text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
            nunc in odio condimentum, at condimentum nisi dapibus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  md:max-w-2xl mt-3">
            <div className="bg-white border-gray-300 border py-2 rounded-lg inline-block text-center text-purple-600 text-sm font-semibold">
              <p>Download Starter Kit(PDF)</p>
            </div>
            <div className="bg-white border-gray-300 border py-2 rounded-lg inline-block text-center text-purple-600 text-sm font-semibold">
              <p>7-Day Calm Plan</p>
            </div>
            <div className="bg-white border-gray-300 border py-2 rounded-lg inline-block text-center text-purple-600 text-sm font-semibold ">
              <p>Classroom Pack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
