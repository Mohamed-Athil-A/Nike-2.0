import { footerLinks } from "../contants";

const FooterList = () => {
  // Assuming footerLinks is defined here

  return (
    <footer className="flex justify-between flex-1 max-sm:flex-col max-sm:gap-10">
      {footerLinks.map((section, index) => (
        <div key={index}>
          <h4 className="text-white mb-6 text-2xl font-montserrat leadin-normal font-medium">
            {section.title}
          </h4>
          <ul>
            {section.links.map((link, linkIndex) => (
              <li
                key={linkIndex}
                className="text-white-400 mt-3 hover:text-slate-gray font-montserrat leading-normal"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default FooterList;
