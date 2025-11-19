import { Link } from "react-router-dom";
import Container from "../hooks/Container";


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Container>
        <section className="py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">Grow Your Business with Our SaaS Platform</h1>
          <p className="text-lg max-w-2xl mb-8">
            Streamline your workflow, automate repetitive tasks, and gain powerful insights—all in one intuitive
            platform.
          </p>
          <Link to='/getstart' className="px-8 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition-all">
            Get Started
          </Link>
        </section>

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
