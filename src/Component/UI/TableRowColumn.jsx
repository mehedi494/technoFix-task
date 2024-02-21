/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export default function TableRowColumn({ colHead, data, prop }) {
  const styles = {
    header: {
      /*  padding: "5px", */
      borderBottom: "1px  #efefef solid",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    col: {
      /*  padding: "2px", */
      textAlign: "center",
      maxHeight: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div>
      <ul>
        <h5 style={styles.header}>{colHead}</h5>
        <div>
          {data?.map((item, index) => (
            <p key={index}>{item[prop]}</p>
          ))}
        </div>
      </ul>
    </div>
  );
}
