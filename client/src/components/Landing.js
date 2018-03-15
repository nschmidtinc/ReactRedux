import React from "react";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>NateMail</h1>
      Collect feedback from Cients
      <div>
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
