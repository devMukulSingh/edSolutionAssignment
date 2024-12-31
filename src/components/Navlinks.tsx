import { Link, useLocation } from "react-router";

type Props = {};

const Navlinks = (props: Props) => {
  const location = useLocation();
  const routes = [
    {
      title: "Public",
      link: "/",
      isActive: location.pathname === "/",
    },
    {
      title: "Protected",
      link: "/protected",
      isActive: location.pathname === "/protected",
    },
  ];
  return (
    <div className="flex gap-5 ">
      {routes.map((route, index) => (
        <Link
          className={`text-lg ${route.isActive ? "scale-110 transition-transform font-semibold" : ""}`}
          key={index}
          to={route.link}
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
