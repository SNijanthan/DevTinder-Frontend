const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-slate-600 text-base-content p-4 bottom-0 fixed">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            DevTinder PVT LTD
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
