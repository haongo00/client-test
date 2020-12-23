import React, { useEffect } from "react";

import "./App.scss";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { HomePage } from "../page/homepage";
import { ApartmentDetail } from "../page/apartment";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { ProfilePage } from "../page/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfileUser } from "../page/profile-user";
import { AddApartmentPage } from "../page/addApartment";
import { useDispatch, useSelector, useStore } from "react-redux";
import { loader } from "../loader";
import { RootState } from "../store";
import { PageNotFound } from "../page/404";
import { IntroPage } from "../containers/intro";
import { Term } from "../page/terms";
import {ResetPassWord} from "../page/ResetPassword";

export const history = createBrowserHistory();
function App() {
  const store = useStore();
  const common = useSelector((state: RootState) => state.Common);
  const getCommon = () => {};

  useEffect(() => {
    loader(store);
  }, []);
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/link" component={IntroPage} />
          <Route exact path="/apartment/add">
            <AddApartmentPage type="add" />
          </Route>
          <Route path="/apartment/edit/:id">
            <AddApartmentPage type="edit" />
          </Route>
          <Route path="/apartment/:id">
            <ApartmentDetail />
          </Route>

          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/resetPass" component={ResetPassWord} />
          <Route path="/profileUser" component={ProfileUser} />
          <Route path="/404" component={PageNotFound} />
          <Route path="/terms" component={Term} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
