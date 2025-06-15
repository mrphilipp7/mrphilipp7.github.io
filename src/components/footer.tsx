const Footer = () => {
  const year = new Date();
  return (
    <footer className="font-medium text-md text-center bg-accent py-2 mt-2">
      <p className="text-foreground">
        © {year.getFullYear()} Zachary Philipp. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
