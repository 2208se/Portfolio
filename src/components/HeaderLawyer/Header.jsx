import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [cvDropdownOpened, setCvDropdownOpened] = useState(false);
  const headerColor = useHeaderColor();

  const handleDownloadCV = (language) => {
    // Logic to download the CV based on the language
    if (language === "english") {
      // Replace with the actual path to your English CV
      window.open("/path/to/english-cv.pdf", "_blank");
    } else if (language === "french") {
      // Replace with the actual path to your French CV
      window.open("/path/to/french-cv.pdf", "_blank");
    }
    setCvDropdownOpened(false); // Close the dropdown after selection
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        {/* logo */}
        <img src="logo3.png" alt="logo" width={100} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
            setCvDropdownOpened(false);
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              ...getMenuStyles(menuOpened),
            }}
          >
            <a href="#Accueil" style={{ color: "white", textDecoration: "none" }}>
              <IoHome style={{ fontSize: "1.5rem", color: "white" }} />
            </a>
            <a href="/scheduler" style={{ color: "white", textDecoration: "none" }}>
              Work
            </a>
            <a href="/Notifications" style={{ color: "white", textDecoration: "none" }}>
              Contacts
            </a>
            <div
              style={{ position: "relative", display: "inline-block" }}
              onMouseEnter={() => setCvDropdownOpened(true)}
              onMouseLeave={() => setCvDropdownOpened(false)}
            >
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                style={{ color: "white", textDecoration: "none" }}
              >
                Download CV
              </a>
              {cvDropdownOpened && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "#333", // Dark background for dropdown
                    minWidth: "160px",
                    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                    zIndex: 1,
                  }}
                >
                  <a
                    href="#!"
                    onClick={() => handleDownloadCV("english")}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      textDecoration: "none",
                      color: "white", // White text for dropdown items
                    }}
                  >
                    CV in English
                  </a>
                  <a
                    href="#!"
                    onClick={() => handleDownloadCV("french")}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      textDecoration: "none",
                      color: "white", // White text for dropdown items
                    }}
                  >
                    CV in French
                  </a>
                </div>
              )}
            </div>
            <button
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <a
                href="mailto:zainkeepscode@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Github portfolio
              </a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          style={{ cursor: "pointer", color: "white" }} // White color for the menu icon
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;