import React from "react";

const Footer = (props) => {
  const { company, email } = props;

  return (
    <div className="container-fullid title text-uppercase text-center">
      <hr />
      <span style={{color:"red"}}>Powered By {company}</span>
      <span style={{color:"gray"}}>| Contact By Email {email}</span>
    </div>
  );
};

export default Footer;
