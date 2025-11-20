import { Link } from 'react-router-dom';
import Container from '../hooks/Container';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="relative ">
        <img
          src="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="hero-image"
          className="w-full h-[650px]"
        />

        <div className="absolute inset-0 bg-black/50 z-30"></div>

        <section className="text-white z-50 flex flex-col items-center text-center absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <h1 className="text-5xl font-bold mb-6">Grow Your Business with Our SaaS Platform</h1>
          <p className="text-lg max-w-2xl mb-8">
            Streamline your workflow, automate repetitive tasks, and gain powerful insights—all in one intuitive
            platform.
          </p>
          <Link
            to="/getstart"
            className="px-8 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition-all">
            Get Started
          </Link>
        </section>
      </div>

      <Container>
        <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Automation Tools</h3>
            <p className="text-sm">
              Reduce manual work with intelligent automation designed to save you time and money.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
            <p className="text-sm">Track your performance with real-time analytics and actionable insights.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
            <p className="text-sm">Improve productivity with built‑in communication and project management features.</p>
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Trusted by Teams Worldwide</h2>
          <p className="max-w-xl mx-auto mb-10">
            Join thousands of companies using our platform to scale their operations and achieve more.
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-2xl shadow hover:bg-gray-800 transition-all">
            Request a Demo
          </button>
        </section>
      </Container>
    </div>
  );
};

export default Home;
