import { faBars, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { ApartmentProfile } from "../Apartment";
import { BodyWrapper } from "../BodyWrapper";
import { HeaderFilter } from "../header-filter";
import { InfoProfile } from "../Info";
import { NavSidebar } from "../NavSideBar";
import { User } from "../User";
import "./style.scss";
interface Props {
  children: any;
}
const filter = {
  title: "Select",
  data: [
    {
      key: "Tất cả",
      value: 0,
      event: true,
    },
    {
      key: "A-Z",
      value: 1,
      event: true,
    },
    {
      key: "Sớm nhất",
      value: 2,
      event: true,
    },
  ],
};

export const DashboardLayout = (props: Props) => {
  const { children } = props;
  const [activeNav, setActiveNav] = useState(true);
  return (
    <BodyWrapper>
      <div className="flex  bg-gray-200 dashboard">
        <NavSidebar navActive={activeNav} />

        <div className="flex flex-col flex-1 overflow-hidden main-content">
          <main className="content">
            <HeaderFilter
              onTogle={() => {
                setActiveNav(!activeNav);
              }}
              filter={filter}
            />
            <section className="sm:flex-row flex flex-col flex-2">
              <div
                className="content-box"
                style={{
                  flexGrow: 10,
                  flexBasis: "0%",
                  paddingLeft: "20px",
                  boxShadow: "0 2px 7px 0 rgba(0,0,0,.1)",
                }}
              >
                <Switch>
                  <Route exact path="/profile">
                    <div>Thống kê</div>
                  </Route>
                  <Route exact path="/profile/post">
                    <ApartmentProfile />
                  </Route>
                  <Route exact path="/profile/info">
                    <InfoProfile />
                  </Route>
                  <Route exact path="/profile/user/admin">
                    <User />
                  </Route>
                  <Route exact path="/profile/user/renter">
                    <User />
                  </Route>
                  <Route exact path="/profile/user/owner">
                    <User />
                  </Route>
                  <Route exact path="/profile/data/location">
                    <div>Dữ liệu</div>
                  </Route>
                  <Route exact path="/profile/contract">
                    <div>Hợp đồng</div>
                  </Route>
                </Switch>
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
