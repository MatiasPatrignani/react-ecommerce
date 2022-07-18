import Link from "../Link/Link";
import CartModal from "../Modal/CartModal";

const Nav = () => {
  const links = [
    { title: "About Us", url: "/AboutUs" },
    { title: "Shops", url: "/Shops" },
    { title: "Partnership", url: "/Partnership" },
    { title: "Contact", url: "/Contact" },
  ];
  return (
    <nav>
      {links.map((link) => (
        <Link link={link} key={link.title} />
      ))}
    </nav>
  );
};

export default Nav;
