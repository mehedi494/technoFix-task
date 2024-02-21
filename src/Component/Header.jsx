const Header = () => {
  const styles = {
    header: {
      padding: "1rem 2rem ",
      backgroundColor: "#333",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };
  return (
    <div style={styles.header}>
      <div style={styles.logo}>TechnoFix</div>
    </div>
  );
};

export default Header;
