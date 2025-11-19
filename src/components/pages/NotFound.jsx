import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-20 text-center text-5xl space-y-8" >
      <h2>404 ! </h2>
      <p>Page Not Found</p>
      <Link to='/' className="text-xl bg-blue-600  px-5 py-2 text-white rounded cursor-pointer" >Goto Home</Link>
    </div>
  );
};

export default NotFound;
