import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [show, handleShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
        setScrolled(true);
      } else {
        handleShow(false);
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div
      className={`header ${show && "header__black"} ${
        scrolled && "header__scrolled"
      }`}
    >
      <div className="header__left">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />

        {/* Mobile Menu Button */}
        <button
          className="header__mobileMenuBtn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${mobileMenu ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <ul>
            <li className="header__navItem header__navItem--active">Home</li>
            <li className="header__navItem">TV Shows</li>
            <li className="header__navItem">Movies</li>
            <li className="header__navItem">New & Popular</li>
            <li className="header__navItem">My List</li>
            <li className="header__navItem">Browse by Languages</li>
          </ul>
        </nav>
      </div>

      <div className="header__right">
        {/* Search Bar with Toggle */}
        <div className="header__searchContainer">
          {searchVisible && (
            <input
              type="text"
              className="header__searchInput"
              placeholder="Titles, people, genres"
              autoFocus
            />
          )}
          <div
            className="header__search"
            onClick={handleSearchClick}
            aria-label="Search"
          >
            <i className="fas fa-search"></i>
          </div>
        </div>

        <div className="header__notifications" aria-label="Notifications">
          <i className="fas fa-bell"></i>
          <span className="header__notificationBadge">3</span>
        </div>

        <div className="header__profile" aria-label="Profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile"
          />
          <i className="fas fa-caret-down"></i>

          {/* Profile Dropdown */}
          <div className="header__profileDropdown">
            <div className="header__dropdownItem">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Profile 1"
              />
              <span>User 1</span>
            </div>
            <div className="header__dropdownItem">
              <img src="https://i.pravatar.cc/300?img=1" alt="Profile 2" />
              <span>User 2</span>
            </div>
            <div className="header__dropdownItem">
              <i className="fas fa-pencil-alt"></i>
              <span>Manage Profiles</span>
            </div>
            <div className="header__dropdownDivider"></div>
            <div className="header__dropdownItem">
              <i className="fas fa-user"></i>
              <span>Account</span>
            </div>
            <div className="header__dropdownItem">
              <i className="fas fa-question-circle"></i>
              <span>Help Center</span>
            </div>
            <div className="header__dropdownDivider"></div>
            <div className="header__dropdownItem">
              <i className="fas fa-sign-out-alt"></i>
              <span>Sign out of Netflix</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenu && (
        <div className="header__mobileMenu">
          <div className="header__mobileSearch">
            <input
              type="text"
              placeholder="Search..."
              className="header__mobileSearchInput"
            />
            <i className="fas fa-search"></i>
          </div>
          <ul className="header__mobileNav">
            <li className="header__mobileNavItem header__mobileNavItem--active">
              <i className="fas fa-home"></i> Home
            </li>
            <li className="header__mobileNavItem">
              <i className="fas fa-tv"></i> TV Shows
            </li>
            <li className="header__mobileNavItem">
              <i className="fas fa-film"></i> Movies
            </li>
            <li className="header__mobileNavItem">
              <i className="fas fa-fire"></i> New & Popular
            </li>
            <li className="header__mobileNavItem">
              <i className="fas fa-list"></i> My List
            </li>
            <div className="header__mobileDivider"></div>
            <li className="header__mobileNavItem">
              <i className="fas fa-globe"></i> Language
            </li>
            <li className="header__mobileNavItem">
              <i className="fas fa-cog"></i> Settings
            </li>
            <li className="header__mobileNavItem">
              <i className="fas fa-question-circle"></i> Help
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
