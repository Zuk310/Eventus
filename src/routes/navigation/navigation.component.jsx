import React, { Fragment, useContext } from "react";
import { Outlet, Link} from "react-router-dom";
import { ApiContext } from "../../context/api.context";

import "./navigation.styles.scss";

const Navigation = () => {

  const {setApiData} = useContext(ApiContext);
  return (
    <Fragment>
      <div className="navigation">
          <Link className="nav-link" to="/" onClick={()=>setApiData(null)}>
            Eventus
          </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
