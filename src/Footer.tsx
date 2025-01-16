const Footer = () => {
  const today = new Date();
  return (
    <footer className="mt-20 mb-5">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
