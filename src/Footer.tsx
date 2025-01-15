interface Props {
  length: any;
}

const Footer = ({ length }: Props) => {
  const today = new Date();
  return (
    <footer className="m-20">
      {length > 1 ? <p>{length} List Items</p> : null}
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
