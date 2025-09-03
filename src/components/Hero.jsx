import React from "react";
import { useState } from "react";

let Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const HandleForm = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  return (
    <section className="  py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <div>
            <div className="mb-2 text-sm font-semibold  tracking-wide rounded-full bg-purple-100 text-purple-700 px-3 py-1 inline-block">
              <p>Calm Minds, Happy Hearts</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Mindfulness &
              <br />
              Meditation for Kids (4-14)
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Fun, story based activities to help children build emotional
              resilience, focus, and calmness. Lorem ipsum dolor sit amet
              consect.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-row sm:mx-auto gap-4">
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-2 rounded-lg text-md transition-colors"
                onClick={HandleForm}
              >
                Start Free Trial
              </button>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <form className="bg-white rounded-lg p-6  w-[340px] sm:w-[420px] md:w-full  md:max-w-xl mx-auto flex flex-col gap-2">
                    <label className="mt-1 text-purple-800" htmlFor="name">
                      Name:
                    </label>
                    <input
                      className="border border-gray-300 p-1 rounded"
                      type="text"
                      id="name"
                      name="name"
                    />

                    <label className="mt-1 text-purple-800" htmlFor="email">
                      Email:
                    </label>
                    <input
                      className="border border-gray-300 p-1 rounded"
                      type="email"
                      id="email"
                      name="email"
                    />

                    <label className="mt-1 text-purple-800" htmlFor="phone">
                      Phone:
                    </label>
                    <input
                      className="border border-gray-300 p-1  rounded"
                      type="tel"
                      id="phone"
                      name="phone"
                    />

                    <label className="mt-1 text-purple-800" htmlFor="class">
                      Class:
                    </label>
                    <input
                      className="border border-gray-300 p-1 rounded"
                      type="number"
                      id="class"
                      name="class"
                    />

                    <label className="mt-1 text-purple-800" htmlFor="message">
                      Message:
                    </label>
                    <textarea
                      className="border border-gray-300 p-1 rounded"
                      id="message"
                      name="message"
                    ></textarea>

                    <div className="mt-1 flex justify-end gap-4">
                      <button
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                        type="submit"
                      >
                        Submit
                      </button>
                      <button
                        className="bg-red-300 hover:bg-red-400 text-black px-4 py-2 rounded-lg"
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <button className="bg-green-500 text-white hover:bg-green-600 hover:text-white px-2 py-2 rounded-lg text-md transition-colors">
                Explore Programs
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2  md:grid-cols-4 gap-4 ">
              <div className="flex flex-row items-center p-3 rounded-md border gap-4 md:gap-5 justify-center">
                <div>
                  <div>🧠</div>
                </div>
                <div>
                  <p className="text-xs">Improves</p>
                  <p className="font-bold">FOCUS</p>
                </div>
              </div>
              <div className="flex flex-row items-center p-3 rounded-md border gap-4 md:gap-5 justify-center">
                <div>😊</div>
                <div>
                  <p className="text-xs">Reduces</p>
                  <p className="font-bold">STRESS</p>
                </div>
              </div>
              <div className="flex flex-row items-center p-3 rounded-md border gap-4 md:gap-5 justify-center">
                <div>💤</div>
                <div>
                  <p className="text-xs">Better</p>
                  <p className="font-bold">SLEEP</p>
                </div>
              </div>
              <div className="flex flex-row items-center p-3 rounded-md border gap-4 md:gap-5 justify-center">
                <div>❤️</div>
                <div>
                  <p className="text-xs">builds</p>
                  <p className="font-bold">EMPATHY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative sm:px-3">
            <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                <div className="text-center">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🧘‍♀️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Calm & Focus
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Guided meditations to help kids find their inner peace
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-3 -left-2 w-16 h-16 bg-yellow-300 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-4 -right-1 w-12 h-12 bg-pink-300 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-1/2 -right-3 w-8 h-8 bg-green-300 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
