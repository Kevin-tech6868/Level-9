import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="bg-blue-400 min-h-screen font-sans">
      <Navbar />


      <div className="bg-[url('https://www.volkswagen-newsroom.com/images/large/volkswagen-2022-54-1656608771.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white px-6">
        <h1 className="text-5xl font-extrabold bg-black/60 p-4 rounded-lg">
          Shaping the Future of Mobility
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Volkswagen</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Volkswagen, a global automotive powerhouse founded in 1937, stands for innovation, reliability, and progress. With iconic models like the Beetle, Golf, and Passat, the company has influenced generations of drivers. Today, it leads the way in electric mobility through its ID. Series and strives toward sustainability with its "Way to Zero" strategy.
          </p>
        </section>


        <section className="grid md:grid-cols-3 gap-6 text-center mb-12">
          {[
            { title: 'Innovation', desc: 'Embracing cutting-edge tech to shape the future of mobility.' },
            { title: 'Sustainability', desc: 'Carbon-neutral goals and a commitment to clean mobility.' },
            { title: 'Global Reach', desc: 'Operations in over 150 countries and millions of satisfied drivers.' },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>


        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Volkswagen Milestones</h2>
          <ul className="space-y-4 border-l-4 border-blue-800 pl-6">
            <li>
              <span className="text-blue-700 font-semibold">1938</span> — The first Beetle rolls out.
            </li>
            <li>
              <span className="text-blue-700 font-semibold">1974</span> — Introduction of the Golf.
            </li>
            <li>
              <span className="text-blue-700 font-semibold">2013</span> — Launch of the MQB platform.
            </li>
            <li>
              <span className="text-blue-700 font-semibold">2020</span> — First fully electric ID.3 released.
            </li>
            <li>
              <span className="text-blue-700 font-semibold">2022+</span> — Rapid global expansion of electric vehicle lineup.
            </li>
          </ul>
        </section>


        <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
          {[
            ['80+ Years', 'Automotive Heritage'],
            ['150+ Countries', 'Global Operations'],
            ['600K+ Employees', 'Worldwide Workforce'],
            ['10M+ Vehicles', 'Produced Annually'],
          ].map(([number, label], i) => (
            <div key={i} className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-3xl font-extrabold text-blue-900">{number}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/VoLD87NiX8M?si=62X2XjTwxjSQLl3-"

              title="Volkswagen ID.4 Electric SUV"
              allowFullScreen
              className="w-full h-96 rounded-lg"
            ></iframe>
          </div>
        </section>


        <div className="bg-blue-800 text-white p-8 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Discover More</h3>
          <p className="mb-4">Explore our full lineup and find the Volkswagen that fits your lifestyle.</p>
          <a
            href="https://www.vw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-2 rounded hover:bg-blue-100 transition"
          >
            Visit Official Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
