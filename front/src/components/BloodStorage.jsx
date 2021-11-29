const BloodStorage = (props) => {
  const { bgcolor, completedPercentage, liters, bloodTypeId } = props;

  const containerStyles = {
    marginBottom: 20,
    marginTop: 20,
    height: 40,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    display: 'flex',
    width: `${completedPercentage}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 8,
    color: "white",
    fontWeight: "bold",
  };
  var pStyle = {
    marginLeft: '35px',
    color: 'black',
    fontSize: '15px',
    width: '100px'
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completedPercentage}%`}</span>
        <span style={labelStyles}>{`${liters}/5L`}</span>
        <p >
          {bloodTypeId === 1
            ? <p style={pStyle}>O(I) Rh+</p>
            : bloodTypeId === 2
              ? <p style={pStyle}>O(I) Rh-</p>
              : bloodTypeId === 3
                ? <p style={pStyle}>A(II) Rh+</p>
                : bloodTypeId === 4
                  ? <p style={pStyle}>A(II) Rh-</p>
                  : bloodTypeId === 5
                    ? <p style={pStyle}>B(III) Rh+</p>
                    : bloodTypeId === 6
                      ? <p style={pStyle}>B(III) Rh-</p>
                      : bloodTypeId === 7
                        ? <p style={pStyle}>AB(IV) Rh+</p>
                        : bloodTypeId === 8
                          ? <p style={pStyle}>AB(IV) Rh-</p>
                          :  <p style={pStyle}>Тип крови не найдено</p>}
        </p>
      </div>
    </div>
  );
};

export default BloodStorage;
