import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../Hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import "../../styles/Header.css";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [show, setShow] = useState(false);
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container container-fluid">
          <a className="navbar-brand">Younglife</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {/* <div className="search">
                <SearchInput />
              </div> */}
              {show ? (
                <li className="nav-item search">
                  <SearchInput />
                </li>
              ) : null}
              <li className="nav-item searchbtn">
                <button className=" nav-link" onClick={() => setShow(!show)}>
                  <FaSearch
                    className="searchicon"
                    style={{ fontSize: "1.4rem", fontWeight: "900" }}
                  />
                </button>
              </li>

              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to={"/categories"}
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={`/categories`} className="dropdown-item">
                      All categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id}>
                      <Link
                        to={`/category/${c.slug}`}
                        className="dropdown-item"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link" href="#">
                    <FaShoppingBag
                      style={{ fontSize: "1.4rem", fontWeight: "900" }}
                    />
                  </NavLink>
                </Badge>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">
                      SignUp
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link "
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FaUserCircle
                        style={{ fontSize: "1.4rem", fontWeight: "900" }}
                      />
                      {/* {auth?.user?.name} */}
                    </a>
                    <ul className="dropdown-menu">
                      <h5 className="bg-dark text-light p-2">
                        Hi {auth?.user?.name}
                      </h5>
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
