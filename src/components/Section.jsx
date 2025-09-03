import React from "react";

const Section = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Mindery Kids?
          </h2>
          <p className="text-md text-gray-600 max-w-2xl text-wrap">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
            molestiae similique odit mollitia, accusamus cumque aliquid ea
            deserunt, nam inventore ut culpa velit corrupti numquam fugiat
            consectetur magnam. Harum, nihil.
          </p>
        </div>
      </div>
      {/* CTA Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className=" p-4 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <p className="text-xs bg-green-100 text-green-800 inline-block rounded-full px-2 py-1 font-semibold">
            Story Meditations
          </p>
          <h3 className="font-semibold mb-1">Guides Adventures</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            incidunt maiores, quibusdam recusandae eius repellat neque deserunt.
          </p>
        </div>
        <div className=" p-4 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <p className="text-xs bg-green-100 text-green-800 inline-block rounded-full px-2 py-1 font-semibold">
            AnyTime Calm
          </p>
          <h3 className="font-semibold mb-1">Lorem Ipsum</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            incidunt maiores, quibusdam recusandae eius repellat neque deserunt.
          </p>
        </div>
        <div className=" p-4 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <p className="text-xs bg-green-100 text-green-800 inline-block rounded-full px-2 py-1 font-semibold">
            Parent Hub
          </p>
          <h3 className="font-semibold mb-1">Lorem Ipsum</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            incidunt maiores, quibusdam recusandae eius repellat neque deserunt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
