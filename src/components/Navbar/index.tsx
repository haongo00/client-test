import { Avatar } from "@material-ui/core";
import React from "react";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ActionUserLogout } from "../../service/store/userStore/action";
const HeaderItem = () => {
  const user = useSelector((state: RootState) => state.UserReducer);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(ActionUserLogout());
    // console.log(apartment.account)
  };
  const getName = () => {
    let name = { ...user }.account?.name as string;
    if (name) return name.split(" ").reverse().shift();
  };
  const HeaderUser = () => {
    return user.account ? (
      <>
        <div className="avatar">
          <Avatar src={user?.account?.avatar?.url??"https://www.avatarins.com/image/homesmall.png"} />
        </div>
        <NavDropdown className="name" title={getName()} id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">Thông tin</NavDropdown.Item>
          <NavDropdown.Item href="/resetPass">Đổi mật khẩu</NavDropdown.Item>
          <NavDropdown.Item href="/login" onClick={clear}>Đăng xuất</NavDropdown.Item>
        </NavDropdown>
        <Button className={"post-button"} href="/apartment/add">
          Đăng Tin
        </Button>
      </>
    ) : (
      <Button className={"post-button"} href="/login">
        Đăng nhâp
      </Button>
    );
  };
  return (
    <div className={"HeaderItem"}>
      <Navbar className={"navbar-custom"} bg="light" expand="lg">
        <Container>
          {" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/home" className={"name-app"}>
            TIMTRO.<small>vn</small>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Trang chủ</Nav.Link>
              <Nav.Link href="/link">Giới thiệu</Nav.Link>
              <Nav.Link href="/terms">Điều khoản</Nav.Link>
            </Nav>
            <HeaderUser />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderItem;
