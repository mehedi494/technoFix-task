/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ToggleMenu = ({ setTableCol, tableCol }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;

    setTableCol((prevState) =>
      // console.log(prevState),
      ({
        ...prevState,
        [name]: !prevState[name],
      })
    );
  };

  const styles = {
    header: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "20px",
      position: "relative",
    },
    menuIcon: {
      cursor: "pointer",
      fontSize: "24px",
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      right: 0,
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginTop: "5px",
      minWidth: "150px",
    },
    dropdownContent: {
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  };

  const menuItems = [
    "Title",
    "Categories",
    "Price",
    "Date",
    "Author",
    "Status",
    "Action",
  ];

  return (
    <div style={styles.header}>
      <div style={styles.menuIcon} onClick={toggleMenu}>
        &#9776;
      </div>
      {menuOpen && (
        <div style={styles.dropdown}>
          <p style={{ textAlign: "center" }}>Add or remove </p>
          <>
            {menuItems.map((item, index) => (
              <div key={index} style={styles.dropdownContent}>
                <label key={index}>
                  <input
                    type="checkbox"
                    name={item}
                    checked={tableCol[item]}
                    onChange={handleCheckboxChange}
                  />
                  {item}
                </label>
              </div>
            ))}
          </>

          {/* <div style={styles.dropdownContent}>
            <label>
              <input
                type="checkbox"
                name="Title"
                checked={tableCol?.Title}
                onChange={handleCheckboxChange} //
              />{" "}
              Title
            </label>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
