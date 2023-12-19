import { navLinks } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
    return (
      <footer className="bg-primary py-5">
        <div className="flex justify-center items-center flex-col">
     
          <ul className="list-none flex flex-col sm:flex-row gap-5 sm:gap-10">
            {navLinks.map((nav) => (
              <li key={nav.id} className="text-white text-[18px] font-medium cursor-pointer">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
  
          <p className="text-white text-sm mt-5">
            © {new Date().getFullYear()} FC 3D Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  