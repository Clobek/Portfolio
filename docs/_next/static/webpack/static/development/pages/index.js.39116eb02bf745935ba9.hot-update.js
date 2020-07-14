webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/NavPills/NavPills.js */ "./components/NavPills/NavPills.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! components/CustomLinearProgress/CustomLinearProgress.js */ "./components/CustomLinearProgress/CustomLinearProgress.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_componentsSections_carouselStyle_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/componentsSections/carouselStyle.js */ "./assets/jss/nextjs-material-kit-pro/pages/componentsSections/carouselStyle.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_componentsSections_navbarsStyle_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js */ "./assets/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_componentsSections_footerStyle_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js */ "./assets/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_modalStyle_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/modalStyle.js */ "./assets/jss/nextjs-material-kit-pro/modalStyle.js");
/* harmony import */ var assets_scss_plugins_plugin_react_slick_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/scss/plugins/_plugin-react-slick.scss */ "./assets/scss/plugins/_plugin-react-slick.scss");
/* harmony import */ var assets_scss_plugins_plugin_react_slick_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(assets_scss_plugins_plugin_react_slick_scss__WEBPACK_IMPORTED_MODULE_26__);



var _jsxFileName = "/home/bryce/Desktop/Portfolio/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


 // react component for creating beautiful carousel

 // @material-ui/core components









 // @material-ui/icons

 // core components











var Transition = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function Transition(props, ref) {
  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    direction: "down",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }
  }));
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_componentsSections_navbarsStyle_js__WEBPACK_IMPORTED_MODULE_23__["default"]);
var useStyles2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_componentsSections_footerStyle_js__WEBPACK_IMPORTED_MODULE_24__["default"]);
var useStyles3 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(assets_jss_nextjs_material_kit_pro_modalStyle_js__WEBPACK_IMPORTED_MODULE_25__["default"]);
var useStyles4 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_componentsSections_carouselStyle_js__WEBPACK_IMPORTED_MODULE_22__["default"]);
function Index(props) {
  var _jsx, _jsx2;

  var headerClass = useStyles();
  var navClass = useStyles2();
  var modalclass = useStyles3();
  var carouselClass = useStyles4();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      contact = _React$useState2[0],
      setContact = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      website = _React$useState4[0],
      setWebsite = _React$useState4[1];

  var settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "Bryce Belock Portfolio")), __jsx("div", {
    style: {
      position: "sticky",
      top: "0",
      zIndex: "2",
      borderBottom: "solid white 1px",
      margin: "0 !important",
      padding: "0 !important"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    color: "dark",
    links: __jsx("div", {
      className: headerClass.collapse,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: headerClass.mrAuto,
      style: {
        fontSize: "4rem",
        textAlign: "center",
        fontFamily: "'Montserrat', sans-serif",
        textShadow: "0 0 10px grey",
        letterSpacing: "1px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, "Bryce Belock"), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: headerClass.list + " " + headerClass.mlAuto,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: headerClass.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
      href: "#about",
      className: headerClass.navLink,
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }, __jsx("h2", {
      style: {
        fontSize: "1.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, "About"))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: headerClass.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
      href: "#skills",
      className: headerClass.navLink,
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("h2", {
      style: {
        fontSize: "1.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, "Skills"))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: headerClass.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
      href: "#projects",
      className: headerClass.navLink,
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 19
      }
    }, __jsx("h2", {
      style: {
        fontSize: "1.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, "Projects"))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: headerClass.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
      href: "#links",
      className: headerClass.navLink,
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, __jsx("h2", {
      style: {
        fontSize: "1.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, "Links"))))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  })), __jsx("div", {
    id: "about",
    style: {
      display: "block",
      content: "",
      marginTop: "-75px",
      height: "75px",
      visibility: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: {
      textAlign: "center",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      fontSize: "3.5rem",
      marginBottom: "0",
      color: "black",
      paddingTop: "30px",
      fontFamily: "'Montserrat', sans-serif",
      textShadow: "0 0 10px grey",
      letterSpacing: "1px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Software Engineer"), __jsx("div", {
    style: {
      backgroundImage: "url('https://i.imgur.com/sx7WWrA.png')",
      backgroundSize: "cover",
      width: "calc(16vw + 16vh)",
      height: "calc(10.64vw + 10.64vh)",
      margin: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: "black",
      textAlign: "center",
      fontSize: "calc(1vw + 2.5vh)",
      paddingBottom: "20px",
      letterSpacing: "1.1px",
      textShadow: "0 0 8px white",
      margin: "0 5%",
      fontFamily: "'Montserrat', sans-serif"
    }, "textShadow", "0 0 10px grey"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Growing up I wanted to be a game developer; that eventually evolved into an aspiring computer engineer. From an early age I have had a passion for all things computer related. Writing code has caused both frustration and at the same time some of my greatest feelings of accomplishment. The challenge drives me to continue learning every day. I enjoy the creative outlet coding offers me and I look forward to creating applications that both impress but more importantly serve a purpose."), __jsx("div", {
    id: "skills",
    style: {
      display: "block",
      content: "",
      marginTop: "-75px",
      height: "75px",
      visibility: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      backgroundColor: "#212121",
      borderRadius: "3px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("h1", {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      fontSize: "3.5rem",
      marginBottom: "0",
      color: "ghostwhite",
      paddingTop: "60px",
      paddingBottom: "20px",
      fontFamily: "'Montserrat', sans-serif",
      textShadow: "0 0 10px grey",
      letterSpacing: "1px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Skills"), __jsx(components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    color: "white",
    alignCenter: true,
    tabs: [{
      tabButton: "Overview",
      tabContent: __jsx("div", {
        style: {
          color: "white",
          textAlign: "center",
          fontSize: "calc(1vw + 2.5vh)",
          paddingBottom: "20px",
          letterSpacing: "1.1px",
          paddingTop: "30px",
          fontFamily: "'Montserrat', sans-serif",
          textShadow: "0 0 10px grey"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }
      }, __jsx("p", {
        style: {
          margin: "0 5%"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 24
        }
      }, "Beginning my coding journey in 2020, I have been able to learn many skills in a short period of time. Through a coding bootcamp, I have spent four months studying and practicing full time between twelve to fourteen hours a day. Eight hours of class with consistent four or more hours of assignments each night has given me the ability to learn the skills neccessary to create fantastic, functional applications. The scores I am giving myself is how comfortable I feel whether it be conceptually or practically. 1 being uncomfortable and 10 being very comfortable."))
    }, {
      tabButton: "Frontend",
      tabContent: __jsx("div", {
        style: {
          color: "white",
          textAlign: "center",
          fontSize: "1.3rem",
          paddingBottom: "20px",
          fontFamily: "'Montserrat', sans-serif",
          textShadow: "0 0 10px grey"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 23
        }
      }, "JavaScript", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 75,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 23
        }
      }), "7.5/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 23
        }
      }, "HTML", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 80,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 23
        }
      }), "8/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 23
        }
      }, "CSS/SCSS", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 75,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 23
        }
      }), "7.5/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 23
        }
      }, "React", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 70,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 23
        }
      }), "7/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 23
        }
      }, "jQuery / Dom Manipulation", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 70,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 23
        }
      }), "7/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 23
        }
      }, "SVG", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 60,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 23
        }
      }), "6/10"))
    }, {
      tabButton: "Backend",
      tabContent: __jsx("div", {
        style: {
          color: "white",
          textAlign: "center",
          fontSize: "1.3rem",
          paddingBottom: "20px",
          margin: "auto",
          fontFamily: "'Montserrat', sans-serif",
          textShadow: "0 0 10px grey"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 23
        }
      }, "Python", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 65,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 23
        }
      }), "6.5/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 23
        }
      }, "MongoDB", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 80,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 23
        }
      }), "8/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 23
        }
      }, "PostgreSQL", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 60,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 23
        }
      }), "6/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 23
        }
      }, "NodeJS", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 70,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 23
        }
      }), "7/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 23
        }
      }, "Django", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 50,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 23
        }
      }), "5/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 23
        }
      }, "Virtual Private Server", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 65,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 23
        }
      }), "6.5/10"))
    }, {
      tabButton: "Misc",
      tabContent: __jsx("div", {
        style: {
          color: "white",
          textAlign: "center",
          fontSize: "1.3rem",
          paddingBottom: "20px",
          fontFamily: "'Montserrat', sans-serif",
          textShadow: "0 0 10px grey"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 21
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 23
        }
      }, "Git/GitHub", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 70,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 23
        }
      }), "7/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 23
        }
      }, "GIMP", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 60,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 23
        }
      }), "6/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 23
        }
      }, "Inkscape", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 60,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 23
        }
      }), "6/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 23
        }
      }, "Problem Solving", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 80,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 23
        }
      }), "8/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 23
        }
      }, "Communication", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 80,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 23
        }
      }), "8/10"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 23
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 23
        }
      }, "Teamwork", __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "determinate",
        color: "success",
        value: 70,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 23
        }
      }), "7/10"))
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })), __jsx("div", {
    id: "projects",
    style: {
      display: "block",
      content: "",
      marginTop: "-75px",
      height: "75px",
      visibility: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      fontSize: "3.5rem",
      marginBottom: "0",
      fontFamily: "'Montserrat', sans-serif",
      textShadow: "0 0 10px grey",
      letterSpacing: "1px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  }, "Projects"), __jsx("div", {
    className: carouselClass.section,
    id: "carousel",
    style: {
      width: "100% !important",
      display: "flex",
      justifyContent: "center",
      margin: "0",
      padding: "0",
      paddingBottom: "20px",
      fontFamily: "'Montserrat', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: carouselClass.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 15
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }), __jsx("div", {
    style: {
      width: "100% !important",
      border: "solid black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 23
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      width: "99%",
      textAlign: 'center',
      boxShadow: "0 0 .8rem grey"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      height: "260px",
      width: "100%",
      display: "block"
    },
    className: headerClass.imgCardTop,
    src: "https://i.imgur.com/uK3DBrS.png",
    alt: "Application Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 23
    }
  }), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      height: "220px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 23
    }
  }, __jsx("h1", {
    className: headerClass.cardTitle,
    style: {
      marginBottom: "0",
      fontSize: "clamp(2rem, 2vw, 2.5rem)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 27
    }
  }, "Landscaper"), __jsx("h3", {
    className: headerClass.cardSubtitle,
    style: {
      marginTop: "0",
      fontSize: "clamp(1rem, 2vw, 1.3rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 27
    }
  }, "Week 1 Assignment"), __jsx("div", {
    style: {
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      width: "50%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 27
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "info",
    href: "https://github.com/Clobek/Landscaper",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 27
    }
  }, "Github"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "danger",
    href: "https://dom-landscaper.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 27
    }
  }, "Live Application!"))))), __jsx("div", {
    style: {
      width: "100% !important",
      border: "solid black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 23
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      width: "99%",
      textAlign: 'center',
      boxShadow: "0 0 .8rem grey"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      height: "260px",
      width: "100%",
      display: "block"
    },
    className: headerClass.imgCardTop,
    src: "https://i.imgur.com/tVJ4xa4.png",
    alt: "Application Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 23
    }
  }), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      height: "220px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 23
    }
  }, __jsx("h1", {
    className: headerClass.cardTitle,
    style: {
      marginBottom: "0",
      fontSize: "clamp(2rem, 2vw, 2.5rem)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 27
    }
  }, "Spacebattle"), __jsx("h3", {
    className: headerClass.cardSubtitle,
    style: {
      marginTop: "0",
      fontSize: "clamp(1rem, 2vw, 1.3rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 27
    }
  }, "Week 2 Assignment"), __jsx("div", {
    style: {
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      width: "50%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 27
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "info",
    href: "https://github.com/Clobek/Spacebattle",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 27
    }
  }, "Github"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "danger",
    href: "https://dom-space-battle.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 27
    }
  }, "Live Application!"))))), __jsx("div", {
    style: {
      width: "100% !important",
      border: "solid black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 23
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      width: "99%",
      textAlign: 'center',
      boxShadow: "0 0 .8rem grey"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      height: "260px",
      width: "100%",
      display: "block"
    },
    className: headerClass.imgCardTop,
    src: "https://i.imgur.com/vthI2Yh.png",
    alt: "Application Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 23
    }
  }), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      height: "220px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 23
    }
  }, __jsx("h1", {
    className: headerClass.cardTitle,
    style: {
      marginBottom: "0",
      fontSize: "clamp(2rem, 2vw, 2.5rem)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 23
    }
  }, "Bookmarkd"), __jsx("h3", {
    className: headerClass.cardSubtitle,
    style: {
      marginTop: "0",
      fontSize: "clamp(1rem, 2vw, 1.3rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 23
    }
  }, "1st Team Assignment"), __jsx("div", {
    style: {
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      width: "50%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 23
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "info",
    href: "https://github.com/Clobek/Bookmarkd",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 23
    }
  }, "Github"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "danger",
    href: "https://bookmarkd.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 23
    }
  }, "Live Application!"))))), __jsx("div", {
    style: {
      width: "100% !important",
      border: "solid black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 23
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      width: "99%",
      textAlign: 'center',
      boxShadow: "0 0 .8rem grey"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      height: "260px",
      width: "100%",
      display: "block"
    },
    className: headerClass.imgCardTop,
    src: "https://i.imgur.com/wt0txZA.png",
    alt: "Application Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 23
    }
  }), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      height: "220px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 23
    }
  }, __jsx("h1", {
    className: headerClass.cardTitle,
    style: {
      marginBottom: "0",
      fontSize: "clamp(2rem, 2vw, 2.5rem)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 23
    }
  }, "hORCules"), __jsx("h3", {
    className: headerClass.cardSubtitle,
    style: {
      marginTop: "0",
      fontSize: "clamp(1rem, 2vw, 1.3rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 23
    }
  }, "Unit 1 Project"), __jsx("div", {
    style: {
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      width: "50%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 23
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "info",
    href: "https://github.com/Clobek/hORCules",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 23
    }
  }, "Github"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "danger",
    href: "https://horcules.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 23
    }
  }, "Live Application!"))))), __jsx("div", {
    style: {
      width: "100% !important",
      border: "solid black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 23
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      width: "99%",
      textAlign: 'center',
      boxShadow: "0 0 .8rem grey"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      height: "260px",
      width: "100%",
      display: "block"
    },
    className: headerClass.imgCardTop,
    src: "https://i.imgur.com/vmsnNcW.png",
    alt: "Application Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 23
    }
  }), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      height: "220px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 23
    }
  }, __jsx("h1", {
    className: headerClass.cardTitle,
    style: {
      marginBottom: "0",
      fontSize: "clamp(2rem, 2vw, 2.5rem)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 23
    }
  }, "Faithbook"), __jsx("h3", {
    className: headerClass.cardSubtitle,
    style: {
      marginTop: "0",
      fontSize: "clamp(1rem, 2vw, 1.3rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 27
    }
  }, "Unit 2 Project"), __jsx("div", {
    style: {
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      width: "50%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 27
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "info",
    href: "https://github.com/Clobek/FaithBook",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 27
    }
  }, "Github"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "danger",
    href: "https://belock.herokuapp.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 27
    }
  }, "Live Application!"))))), __jsx("div", {
    style: {
      width: "100% !important",
      border: "solid black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 23
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      width: "99%",
      textAlign: 'center',
      boxShadow: "0 0 .8rem grey"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      height: "260px",
      width: "100%",
      display: "block"
    },
    className: headerClass.imgCardTop,
    src: "https://i.imgur.com/UjIhW5a.png",
    alt: "Application Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 23
    }
  }), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      height: "220px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 23
    }
  }, __jsx("h1", {
    className: headerClass.cardTitle,
    style: {
      marginBottom: "0",
      fontSize: "clamp(2rem, 2vw, 2.5rem)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 27
    }
  }, "Shipperific"), __jsx("h3", {
    className: headerClass.cardSubtitle,
    style: {
      marginTop: "0",
      fontSize: "clamp(1rem, 2vw, 1.3rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 27
    }
  }, "Unit 3 Project"), __jsx("div", {
    style: {
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      width: "50%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 27
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "info",
    href: "https://github.com/Clobek/Shipperific",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 27
    }
  }, "Github"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "danger",
    href: "https://shipperific.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 27
    }
  }, "Live Application!"))))), __jsx("div", {
    style: {
      width: "100% !important",
      border: "solid black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 23
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      width: "99%",
      textAlign: 'center',
      boxShadow: "0 0 .8rem grey"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      height: "260px",
      width: "100%",
      display: "block"
    },
    className: headerClass.imgCardTop,
    src: "https://i.imgur.com/LXpIOCf.png",
    alt: "Application Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 23
    }
  }), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      height: "220px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 23
    }
  }, __jsx("h1", {
    className: headerClass.cardTitle,
    style: {
      marginBottom: "0",
      fontSize: "clamp(2rem, 2vw, 2.5rem)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 27
    }
  }, "beClock"), __jsx("h3", {
    className: headerClass.cardSubtitle,
    style: {
      marginTop: "0",
      fontSize: "clamp(1rem, 2vw, 1.3rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 27
    }
  }, "Final Project"), __jsx("div", {
    style: {
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      width: "50%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 27
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "info",
    href: "https://github.com/Clobek/beClock",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 27
    }
  }, "Github"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      fontSize: "1rem"
    },
    color: "danger",
    href: "https://beclock.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 27
    }
  }, "Live Application!")))))))), __jsx("div", {
    id: "links",
    style: {
      display: "block",
      content: "",
      marginTop: "-75px",
      height: "75px",
      visibility: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 13
    }
  }), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    theme: "dark",
    content: __jsx("div", {
      style: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: navClass.pullCenter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: navClass.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: navClass.inlineBlock,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 17
      }
    }, __jsx("a", (_jsx = {
      className: navClass.block,
      style: {
        fontSize: "1rem"
      },
      onClick: function onClick() {
        return setWebsite(true);
      }
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "style", {
      cursor: "pointer",
      fontSize: "1rem"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 21
    }), _jsx), "Website Technologies"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      modalclass: {
        root: modalclass.modalRoot,
        paper: modalclass.modal
      },
      open: website,
      TransitionComponent: Transition,
      keepMounted: true,
      onClose: function onClose() {
        return setWebsite(false);
      },
      "aria-labelledby": "classic-modal-slide-title",
      "aria-describedby": "classic-modal-slide-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "classic-modal-slide-title",
      disableTypography: true,
      className: modalclass.modalHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 21
      }
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
      simple: true,
      className: modalclass.modalCloseButton,
      key: "close",
      "aria-label": "Close",
      onClick: function onClick() {
        return setWebsite(false);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 23
      }
    }, " ", __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: modalclass.modalClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
        columnNumber: 25
      }
    })), __jsx("h1", {
      className: modalclass.modalTitle,
      style: {
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "1px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 23
      }
    }, "Technologies Used")), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "classic-modal-slide-description",
      className: modalclass.modalBody,
      style: {
        paddingTop: "0",
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "1px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 21
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 23
      }
    }, "Front-End"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 23
      }
    }, "The front-end is written in JavaScript with NextJS as the framework. I'm making use of a UI Kit called NextJS Material Kit which is based on Material-UI, as well as some React inline styling."), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 23
      }
    }, "Back-End"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 23
      }
    }, "Originally written in Python using Django as the framework for managing the routes and storing the data in PostgreSQL. Once running on a linux based VPS through DigitalOcean, all data is now hardcoded for efficiency due to the scale and needs of my porfolio.")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: navClass.inlineBlock,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521,
        columnNumber: 19
      }
    }, __jsx("a", (_jsx2 = {
      className: navClass.block,
      style: {
        fontSize: "1rem"
      },
      onClick: function onClick() {
        return setContact(true);
      }
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "style", {
      cursor: "pointer",
      fontSize: "1rem"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 21
    }), _jsx2), "Contact Information"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      modalclass: {
        root: modalclass.modalRoot,
        paper: modalclass.modal
      },
      open: contact,
      TransitionComponent: Transition,
      keepMounted: true,
      onClose: function onClose() {
        return setContact(false);
      },
      "aria-labelledby": "classic-modal-slide-title",
      "aria-describedby": "classic-modal-slide-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "classic-modal-slide-title",
      disableTypography: true,
      className: modalclass.modalHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 21
      }
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
      simple: true,
      className: modalclass.modalCloseButton,
      key: "close",
      "aria-label": "Close",
      onClick: function onClick() {
        return setContact(false);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 23
      }
    }, " ", __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: modalclass.modalClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 25
      }
    })), __jsx("h1", {
      className: modalclass.modalTitle,
      style: {
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "1px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 23
      }
    }, "Contact Information")), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "classic-modal-slide-description",
      className: modalclass.modalBody,
      style: {
        paddingTop: "0",
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "1px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 21
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 23
      }
    }, "Location: Bettendorf, Iowa"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 23
      }
    }, "Phone: (563)320-4663"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 23
      }
    }, "Email: bryce@belock.dev"), __jsx("p", {
      style: {
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 23
      }
    }, "* I tend to not answer calls from numbers I do not know. Send a text or make sure to leave a message.")))))), __jsx("div", {
      className: navClass.rightLinks,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573,
        columnNumber: 15
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "https://github.com/Clobek?tab=repositories",
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 21
      }
    }, __jsx("i", {
      "aria-hidden": true,
      style: {
        fontSize: "2rem"
      },
      className: "fab fa-github-square" + " " + navClass.iconSocial + " " + navClass.btnLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 23
      }
    }))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "https://www.linkedin.com/in/bryce-belock/",
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 21
      }
    }, __jsx("i", {
      "aria-hidden": true,
      style: {
        fontSize: "2rem"
      },
      className: "fab fa-linkedin" + " " + navClass.iconSocial + " " + navClass.btnLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 23
      }
    }))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "https://medium.com/@belock",
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 21
      }
    }, __jsx("i", {
      "aria-hidden": true,
      style: {
        fontSize: "2rem"
      },
      className: "fab fa-medium" + " " + navClass.iconSocial + " " + navClass.btnLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
        columnNumber: 23
      }
    })))))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://kit.fontawesome.com/8187678fb5.js",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 9
    }
  }));
} // Index.getInitialProps = async () => {
//     let res, data, projects;
//     try{
//         res = await fetch('http://142.93.49.26:8000/api/v1/project/');
//         data = await res.json();
//         projects = data.objects;
//     } catch(error){
//         console.error(error);
//     }
//     return {
//         projects
//     }
// };

/***/ })

})
//# sourceMappingURL=index.js.39116eb02bf745935ba9.hot-update.js.map