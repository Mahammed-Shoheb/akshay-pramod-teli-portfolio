import { links } from "@/assests/data";
import { IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";
import { Fragment } from "react";

const Footer = () => {
  return (
    <footer>
      <div className="align-center px-4 sm:px-8 lg:px-12 py-4">
        <ul className="flex sm:justify-end items-center gap-4 py-16 flex-wrap">
          {links.map((link, index) => {
            return (
              <Fragment key={index}>
                <li>
                  <a
                    href={`#${link}`}
                    className="uppercase tracking-wide hover:border-b-2 hover:border-b-primary transition duration-150"
                  >
                    {link}
                  </a>
                </li>
                {index !== links.length - 1 && (
                  <span aria-hidden={true}> / </span>
                )}
              </Fragment>
            );
          })}
        </ul>
        <hr className="border-b-2 border-zinc-500 dark:border-teal-500" />
        <div className="flex justify-between items-center py-8">
          <p>
            Copyright &copy; {new Date().getFullYear()}
            <span className="capitalize"> akshay pramod teli</span>
          </p>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/akshaypramodteli/">
              <IconBrandLinkedin />
            </a>
            <a href="https://wa.me/919591461981">
              <IconBrandWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
