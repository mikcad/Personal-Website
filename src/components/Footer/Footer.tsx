import './footer.css';
import logo from '/logo-img/mike-logo_487x105_no-bg.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-wrapper d-flex gap-2 justify-content-md-between justify-content-center align-items-center py-5 flex-wrap">
        <div className="d-flex column-gap-3 align-items-center">
          <img
            src={logo}
            alt="Mike Logo"
            className="mike-logo-footer"
            height={40}
            width={100}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/michaelmoczydlowski1337"
            iconClass="fa-brands fa-linkedin footer-icon"
          />
          <SocialIcon
            href="https://github.com/mikcad"
            iconClass="fa-brands fa-github footer-icon"
          />
          <SocialIcon
            href="mailto:mikedlowski@gmail.com"
            iconClass="fa-regular fa-envelope footer-icon"
          />
        </div>
        <div>
          <p className="m-0 text-center">© 2024 Michael Moczydlowski-Adeyemo</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  href: string;
  iconClass: string;
}

const SocialIcon = ({ href, iconClass }: SocialIconProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  );
};

export default Footer;
