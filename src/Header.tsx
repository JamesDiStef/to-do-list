export interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header>
      <h1 className="text-4xl m-20">{title}</h1>
    </header>
  );
};

export default Header;
