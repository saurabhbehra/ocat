
import React, { useState } from "react";
import { Avatar, Logos } from "tredence-rapid-xd";
import { BiChevronRight } from "react-icons/bi";
import { Bell } from "rapidxd-icons";
import {
  SlUser,
  SlBadge,
  SlBasket,
  SlFolder,
  SlSettings,
} from "react-icons/sl";
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const RapidNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const { loginWithRedirect,logout ,isAuthenticated} = useAuth0();

  return (
    <>
      <div className="top-bar">
        <div className="top-bar__left">
          <div className="brand">
            <Logos height="24" logoType="tlogoprimary" width="24" />
            <span className="brand-name">Atom.ai</span>
            <Link to="/"><span className="brand-name">Home</span></Link>
           
            {isAuthenticated?
            <Link><span className="brand-name" onClick ={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</span></Link>
            : <Link><span className="brand-name" onClick ={()=>loginWithRedirect()}>Login</span></Link>
            }
          </div>
        </div>
        <div className="top-bar__right">
          <div className="notification">
            <Bell width="2.5rem" height="2.5rem" />
            <span className="notification-count">3</span>
          </div>
          <Avatar
            style={{ cursor: "pointer" }}
            active
            userName="Atom Admin"
            shape="rd"
            size="md"
            onClick={handleModal}
          />
        </div>
      </div>
      <div className={modalOpen ? `top-bar__profile open` : `top-bar__profile`}>
        <div className="top-bar__profile-header">
          <Avatar
            style={{ cursor: "pointer" }}
            active
            imageAlt="Profile Image"
            userName="Atom Admin"
            shape="rd"
            size="lg"
            onClick={handleModal}
          />
          <div className="top-bar__profile-header-userinfo">
            <span className="top-bar__profile-header-userinfo__name">
              Abhijeet Singh
            </span>
            <span className="top-bar__profile-header-userinfo__role">
              Designer
            </span>
          </div>
          <span className="top-bar__profile-header__setting">
            <SlSettings />
          </span>
        </div>
        <div className="top-bar__profile-body">
          <div className="top-bar__profile-body-child">
            <span
              className="top-bar__profile-body-child__icon"
              style={{ background: "#FFF6F0" }}
            >
              <SlUser color="#fe5000" />
            </span>
            <span className="top-bar__profile-body-child__title">
              My Account
            </span>
            <span className="top-bar__profile-body-child__chevron">
              <BiChevronRight />
            </span>
          </div>
          <div className="top-bar__profile-body-child">
            <span
              className="top-bar__profile-body-child__icon"
              style={{ background: "#FFF6F0" }}
            >
              <SlBadge color="#fe5000" />
            </span>
            <span className="top-bar__profile-body-child__title">
              Authentication
            </span>
            <span className="top-bar__profile-body-child__chevron">
              <BiChevronRight />
            </span>
          </div>
          <div className="top-bar__profile-body-child">
            <span
              className="top-bar__profile-body-child__icon"
              style={{ background: "#FFF6F0" }}
            >
              <SlBasket color="#fe5000" />
            </span>
            <span className="top-bar__profile-body-child__title">
              My Account
            </span>
            <span className="top-bar__profile-body-child__chevron">
              <BiChevronRight />
            </span>
          </div>
          <div className="top-bar__profile-body-child">
            <span
              className="top-bar__profile-body-child__icon"
              style={{ background: "#FFF6F0" }}
            >
              <SlFolder color="#fe5000" />
            </span>
            <span className="top-bar__profile-body-child__title">Log Out</span>
            <span className="top-bar__profile-body-child__chevron">
              <BiChevronRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RapidNav;