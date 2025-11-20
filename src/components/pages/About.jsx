import { useState } from 'react';
import Container from '../hooks/Container';

const About = () => {
  /** @type {*} */
  const [count, setCount] = useState(0);

  const handleIncrementCounter = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrementCounter = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Container>
        {/* Hero Section */}
        <section className="py-20 text-center flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg max-w-2xl">
            We are a technology-driven SaaS company focused on building
            solutions that help businesses scale efficiently. Our mission is to
            simplify complex workflows through automation, seamless
            integrations, and user-friendly software.
          </p>
        </section>

        {/* Mission / Vision Cards */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our mission is to empower companies with powerful, intuitive, and
              scalable digital tools that help them innovate, operate
              efficiently, and achieve measurable growth.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We aim to become a global leader in SaaS innovation by
              continuously delivering value, improving productivity, and helping
              organizations transform digitally.
            </p>
          </div>
        </section>

        {/* Team / Why Us */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="max-w-xl mx-auto mb-10">
            With deep expertise in SaaS development, WordPress solutions, and
            mobile app technologies, we provide modern, reliable, and affordable
            digital solutions trusted by clients worldwide.
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-2xl shadow hover:bg-gray-800 transition-all">
            Contact Us
          </button>
        </section>

        {/* Counter Section just for testing */}

        <section className="">
          <h2 data-testid="count" className="text-center">
            {count}
          </h2>
          <div className="space-x-10 flex items-center justify-center py-15">
            <button
              onClick={handleIncrementCounter}
              className="bg-green-500 px-5 py-2 text-white rounded-sm cursor-pointer"
            >
              Increment
            </button>
            <button
              onClick={handleDecrementCounter}
              className="bg-red-500 px-5 py-2 text-white rounded-sm cursor-pointer"
            >
              Decrement
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
