import React, { useEffect } from "react";
import Footer from "../components/footer/footer";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div>
      {children}
      < Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
