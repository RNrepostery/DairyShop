import React from "react";

import UserMenu from "../../components/UserMenu";
import { useAuth } from "../../context/Auth";
import Layout from "../../components/Layout";

const Dashboard = () => {
  const {auth} = useAuth();
  console.log(auth?.user?.address);
  return (
    <Layout>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;