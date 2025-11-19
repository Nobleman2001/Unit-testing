import { Link } from "react-router-dom";
import Container from "../hooks/Container";

const whatWeDo = [
  {
    title: "SaaS Products",
    path: "/saas-products",
    des: "Today, SaaS applications like WordPress and Shopify are essential for growing businesses such as e-commerce. We offer high-quality products at reasonable prices.",
  },
  {
    title: "WordPress Plugin Development",
    path: "/plugin",
    des: "We develop powerful, lightweight, and secure WordPress plugins tailored to your business needs, ensuring smooth integration and great performance.",
  },
  {
    title: "React Native",
    path: "/react-native",
    des: "We build fast, scalable, and user-friendly mobile apps using React Native, ensuring seamless performance on both iOS and Android platforms.",
  },
];

const Ourwork = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Container>
        <h2 className="text-5xl font-bold text-center mb-14 mt-14">Our Work</h2>

        {/* What we do section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {whatWeDo.map((wwd, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <main className="space-y-4">
                <h3 className="text-2xl font-semibold text-center">{wwd.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{wwd.des}</p>
              </main>

              <Link
                to={`/our-work/${wwd.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-2xl text-center shadow hover:bg-blue-700 transition-all">
                Explore Work
              </Link>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default Ourwork;
