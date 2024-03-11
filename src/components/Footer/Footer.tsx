import './footer.css';
import logo from '/logo-img/mike-logo_487x105_no-bg.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-wrapper d-flex justify-content-between align-items-center py-5 flex-wrap">
        <div className="d-flex column-gap-3 align-items-center">
          <img
            src={logo}
            alt="Mike Logo"
            className="mike-logo-footer"
            height={40}
            width={100}
          />
          <a
            href="https://www.linkedin.com/in/michaelmoczydlowski1337"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin footer-icon"></i>
          </a>
          <a
            href="https://github.com/mikcad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github footer-icon"></i>
          </a>
          <a
            href="mailto:mikedlowski@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-envelope footer-icon"></i>
          </a>
        </div>
        <div>
          <p>© 2024 Michael Moczydlowski-Adeyemo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
