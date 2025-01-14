const Footer = () => {
  const today = new Date();
  return (
    <footer className="m-20">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
