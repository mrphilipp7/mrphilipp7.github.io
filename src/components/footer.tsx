const Footer = () => {
  const year = new Date();
  return (
    <footer className="bg-accent py-2 text-center mt-2">
      <p className="text-foreground">
        © {year.getFullYear()} Zachary Philipp. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
