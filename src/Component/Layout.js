import React from "react";
import Nabar from "./Nabar";
const Layout = ({ children }) => {
    return (
      <>
        <Nabar />
        <div className="py-5">
        <main>
          {children}
        </main>
        </div>

      </>
    );
  };
  
  export default Layout;