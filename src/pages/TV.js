import "./TV.css";
import { bookTicket } from "../services/api";
import { useState } from "react";
import { formatMoney } from "../services/utils";
import Modal from 'react-modal';

const TV = () => {
  const [price, setPrice] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookStatus, setBookStatus] = useState({})
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    email: "",
    fromStation: "",
    toStation: "",
    quantity: 0,
    departureTime: "",
    departureDate: ""
  });
  const handleChange = (event) => {
    if (event.target.name === "quantity") {
      setPrice(event.target.value * 300000);
    }
    setInputValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await bookTicket({ ...inputValue, price });
    console.log("response", response);
    setBookStatus(response);
    setModalIsOpen(true);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {
          bookStatus.message === 'success' ?
          (<div>
            <h2>Successfully !</h2> 
            <p>{'Ticket booked successfully!'}</p>
          </div>)
          : (<div>
            <h2>Failed</h2> 
            <p>{'Failed to book ticket.'}</p>
          </div>)
        }
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
      <form onSubmit={handleSubmit}>
        <div
          className="Header"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            fontFamily: "InterTight",
            maxWidth: "1128px",
            marginLeft: "auto",
            marginRight: "auto",
            height: "5rem",
            display: "flex",
            fontSize: "13px",
          }}
        >
          <div
            className="mt-4 flex flex-1 items-start"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              marginTop: "1rem",
              display: "flex",
              flex: "1 1 0%",
              alignItems: "flex-start",
            }}
          >
            <div
              className="ant-dropdown-trigger flex cursor-pointer items-center"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <img
                width={26}
                alt="language icon"
                src="https://futabus.vn/images/icons/vietnam.svg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  borderStyle: "none",
                  display: "block",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <span
                className="mx-2 uppercase text-white"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                  textTransform: "uppercase",
                  color: "rgb(255 255 255/1)",
                }}
              >
                vi
              </span>
              <img
                alt="icon_form_droplist"
                src="https://futabus.vn/images/icons/icon_form_droplist.svg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  borderStyle: "none",
                  display: "block",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div
              className="ml-4 border-l pl-4"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginLeft: "1rem",
                borderLeftWidth: "1px",
                paddingLeft: "1rem",
              }}
            >
              <div
                className="ant-dropdown-trigger flex cursor-pointer items-center"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <img
                  width={26}
                  alt="download app icon"
                  src="https://futabus.vn/images/icons/download_app.svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderStyle: "none",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <span
                  className="mx-2 text-white"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    color: "rgb(255 255 255/1)",
                  }}
                >
                  Tải ứng dụng
                </span>
                <img
                  alt="icon_form_droplist"
                  src="https://futabus.vn/images/icons/icon_form_droplist.svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderStyle: "none",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="logo-banner z-10 mx-20"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              zIndex: 10,
              marginLeft: "5rem",
              marginRight: "5rem",
            }}
          >
            <a
              href="https://futabus.vn/"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                outline: "none",
                transition: "color 0.3s ease 0s",
                backgroundColor: "transparent",
                cursor: "pointer",
                touchAction: "manipulation",
                textDecoration: "inherit",
                color: "inherit",
              }}
            >
              <img
                height={60}
                width={295}
                alt="logo_banner"
                src="https://futabus.vn/_next/static/media/logo_new.8a0251b8.svg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  borderStyle: "none",
                  display: "block",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  height: "auto",
                  color: "transparent",
                  marginBottom: "1.5rem",
                }}
              />
            </a>
          </div>
          <div
            className="mt-4 flex flex-1 justify-end"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              marginTop: "1rem",
              display: "flex",
              flex: "1 1 0%",
              justifyContent: "flex-end",
            }}
          >
            <div
              className="flex items-start gap-4 text-center text-sm font-medium"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                textAlign: "center",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: 500,
              }}
            >
              <a
                className="flex h-8 w-44 cursor-pointer items-center gap-3 rounded-2xl bg-white p-2 text-black"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  outline: "none",
                  transition: "color 0.3s ease 0s",
                  touchAction: "manipulation",
                  textDecoration: "inherit",
                  display: "flex",
                  height: "2rem",
                  width: "11rem",
                  cursor: "pointer",
                  alignItems: "center",
                  gap: "0.75rem",
                  borderRadius: "1rem",
                  backgroundColor: "rgb(255 255 255/1)",
                  padding: "0.5rem",
                  color: "rgb(0 0 0/1)",
                }}
              >
                <img
                  height={20}
                  width={20}
                  alt="person"
                  src="https://futabus.vn/images/icons/person.svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderStyle: "none",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                Đăng nhập/Đăng ký
              </a>
            </div>
          </div>
        </div>

        <div
          className="Thong tin"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            fontFamily: "InterTight",
            display: "flex",
            width: "100%",
            gap: "1.5rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            fontSize: "15px",
            flexDirection: "row",
          }}
        >
          <div
            className="flex flex-1 flex-col"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              display: "flex",
              flex: "1 1 0%",
              flexDirection: "column",
            }}
          >
            <p
              className="text-xl font-medium text-black"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                fontWeight: 500,
                color: "rgb(0 0 0/1)",
              }}
            >
              Thông tin khách hàng
            </p>
            <div
              className="Form thong tin"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                fontVariant: "tabular-nums",
                listStyle: "none",
                boxSizing: "border-box",
                color: "rgba(0, 0, 0, 0.85)",
                fontSize: "14px",
                lineHeight: 1.5715,
                fontFeatureSettings: '"tnum"',
                marginTop: "1.5rem",
              }}
            >
              <div
                className="flex w-full flex-col"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <div
                  className="ant-form-item ant-form-item-has-success"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    fontFamily: "InterTight",
                    padding: "0px",
                    fontVariant: "tabular-nums",
                    listStyle: "none",
                    margin: "0px 0px 24px",
                    boxSizing: "border-box",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontSize: "14px",
                    lineHeight: 1.5715,
                    fontFeatureSettings: '"tnum"',
                    verticalAlign: "top",
                  }}
                >
                  <div
                    className="ant-row ant-form-item-row"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontFamily: "InterTight",
                      flexFlow: "wrap",
                      minWidth: "0px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="ant-col ant-form-item-label"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        overflow: "hidden",
                        display: "inline-block",
                        flexGrow: 0,
                        verticalAlign: "middle",
                        position: "relative",
                        maxWidth: "100%",
                        minHeight: "1px",
                        whiteSpace: "normal",
                        lineHeight: 1.5715,
                        textAlign: "left",
                        padding: "0px",
                      }}
                    >
                      <label
                        className="HoTenKhachHang"
                        htmlFor="CustName"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          touchAction: "manipulation",
                          position: "relative",
                          display: "inline-flex",
                          alignItems: "center",
                          maxWidth: "100%",
                          color: "rgba(0, 0, 0, 0.85)",
                          fontSize: "14px",
                          height: "auto",
                          margin: "0px",
                        }}
                      >
                        <div
                          className="flex"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontFamily: "InterTight",
                            display: "flex",
                          }}
                        >
                          Họ và tên
                          <span
                            className="ml-1 text-base text-[#E12424]"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              marginLeft: "0.25rem",
                              fontSize: "1rem",
                              lineHeight: "1.5rem",
                              color: "rgb(225 36 36/1)",
                            }}
                          >
                            *
                          </span>
                        </div>
                      </label>
                    </div>
                    <div
                      className="ant-col ant-form-item-control"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        position: "relative",
                        maxWidth: "100%",
                        minHeight: "1px",
                        width: "100%",
                      }}
                    >
                      <div
                        className="ant-form-item-control-input"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontFamily: "InterTight",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          minHeight: "32px",
                        }}
                      >
                        <div
                          className="ant-form-item-control-input-content"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontFamily: "InterTight",
                            flex: "1 1 auto",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            className="ant-input-affix-wrapper input-form mobile-input ant-input-affix-wrapper-status-success"
                            style={{
                              boxSizing: "border-box",
                              transition: "all 0.3s ease 0s",
                              position: "relative",
                              width: "100%",
                              minWidth: "0px",
                              color: "rgba(0, 0, 0, 0.85)",
                              fontSize: "14px",
                              lineHeight: 1.5715,
                              backgroundColor: "rgb(255, 255, 255)",
                              backgroundImage: "none",
                              display: "inline-flex",
                              borderColor: "rgb(221, 226, 232)",
                              border: "1px solid rgb(221, 226, 232)",
                              borderRadius: "8px",
                              padding: "6px 16px",
                              height: "44px",
                            }}
                          >
                            <input
                              id="name"
                              className="ant-input"
                              name="name"
                              type="text"
                              value={inputValue.name}
                              onChange={handleChange}
                              style={{
                                overflow: "visible",
                                fontFamily: "inherit",
                                fontVariationSettings: "inherit",
                                fontWeight: "inherit",
                                letterSpacing: "inherit",
                                margin: "0px",
                                fontVariant: "tabular-nums",
                                listStyle: "none",
                                transition: "all 0.3s ease 0s",
                                boxSizing: "border-box",
                                fontFeatureSettings: '"tnum"',
                                position: "relative",
                                display: "inline-block",
                                width: "100%",
                                minWidth: "0px",
                                color: "rgba(0, 0, 0, 0.85)",
                                backgroundImage: "none",
                                borderColor: "rgb(107, 114, 128)",
                                borderWidth: "1px",
                                borderRadius: "0px",
                                backgroundColor: "rgb(255, 255, 255)",
                                fontSize: "1rem",
                                lineHeight: "1.5rem",
                                appearance: "none",
                                touchAction: "manipulation",
                                padding: "0px",
                                border: "none",
                                outline: "none",
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="SoDienThoai"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    fontFamily: "InterTight",
                    padding: "0px",
                    fontVariant: "tabular-nums",
                    listStyle: "none",
                    margin: "0px 0px 24px",
                    boxSizing: "border-box",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontSize: "14px",
                    lineHeight: 1.5715,
                    fontFeatureSettings: '"tnum"',
                    verticalAlign: "top",
                  }}
                >
                  <div
                    className="ant-row ant-form-item-row"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontFamily: "InterTight",
                      flexFlow: "wrap",
                      minWidth: "0px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="ant-col ant-form-item-label"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        overflow: "hidden",
                        display: "inline-block",
                        flexGrow: 0,
                        verticalAlign: "middle",
                        position: "relative",
                        maxWidth: "100%",
                        minHeight: "1px",
                        whiteSpace: "normal",
                        lineHeight: 1.5715,
                        textAlign: "left",
                        padding: "0px",
                      }}
                    >
                      <label
                        className="ant-form-item-required ant-form-item-required-mark-optional"
                        htmlFor="CustMobile"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          touchAction: "manipulation",
                          position: "relative",
                          display: "inline-flex",
                          alignItems: "center",
                          maxWidth: "100%",
                          color: "rgba(0, 0, 0, 0.85)",
                          fontSize: "14px",
                          height: "auto",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontFamily: "InterTight",
                          }}
                        >
                          Số điện thoại
                          <span
                            className="ml-1 text-base text-[#E12424]"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              marginLeft: "0.25rem",
                              fontSize: "1rem",
                              lineHeight: "1.5rem",
                              color: "rgb(225 36 36/1)",
                            }}
                          >
                            *
                          </span>
                        </div>
                      </label>
                    </div>
                    <div
                      className="ant-col ant-form-item-control"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        position: "relative",
                        maxWidth: "100%",
                        minHeight: "1px",
                        width: "100%",
                      }}
                    >
                      <div
                        className="ant-form-item-control-input"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontFamily: "InterTight",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          minHeight: "32px",
                        }}
                      >
                        <div
                          className="ant-form-item-control-input-content"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontFamily: "InterTight",
                            flex: "1 1 auto",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            className="ant-input-affix-wrapper input-form mobile-input mt-1 ant-input-affix-wrapper-status-success"
                            style={{
                              boxSizing: "border-box",
                              transition: "all 0.3s ease 0s",
                              position: "relative",
                              width: "100%",
                              minWidth: "0px",
                              color: "rgba(0, 0, 0, 0.85)",
                              fontSize: "14px",
                              lineHeight: 1.5715,
                              backgroundColor: "rgb(255, 255, 255)",
                              backgroundImage: "none",
                              display: "inline-flex",
                              borderColor: "rgb(221, 226, 232)",
                              border: "1px solid rgb(221, 226, 232)",
                              borderRadius: "8px",
                              marginTop: "0.25rem",
                              padding: "6px 16px",
                              height: "44px",
                            }}
                          >
                            <input
                              id="phone"
                              className="ant-input"
                              name="phone"
                              type="tel"
                              value={inputValue.phone}
                              onChange={handleChange}
                              style={{
                                overflow: "visible",
                                fontFamily: "inherit",
                                fontVariationSettings: "inherit",
                                fontWeight: "inherit",
                                letterSpacing: "inherit",
                                margin: "0px",
                                fontVariant: "tabular-nums",
                                listStyle: "none",
                                transition: "all 0.3s ease 0s",
                                boxSizing: "border-box",
                                fontFeatureSettings: '"tnum"',
                                position: "relative",
                                display: "inline-block",
                                width: "100%",
                                minWidth: "0px",
                                color: "rgba(0, 0, 0, 0.85)",
                                backgroundImage: "none",
                                borderColor: "rgb(107, 114, 128)",
                                borderWidth: "1px",
                                borderRadius: "0px",
                                appearance: "none",
                                backgroundColor: "rgb(255, 255, 255)",
                                fontSize: "1rem",
                                lineHeight: "1.5rem",
                                touchAction: "manipulation",
                                padding: "0px",
                                border: "none",
                                outline: "none",
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="ant-form-item ant-form-item-has-success"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    fontFamily: "InterTight",
                    padding: "0px",
                    fontVariant: "tabular-nums",
                    listStyle: "none",
                    margin: "0px 0px 24px",
                    boxSizing: "border-box",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontSize: "14px",
                    lineHeight: 1.5715,
                    fontFeatureSettings: '"tnum"',
                    verticalAlign: "top",
                  }}
                >
                  <div
                    className="ant-row ant-form-item-row"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontFamily: "InterTight",
                      flexFlow: "wrap",
                      minWidth: "0px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="ant-col ant-form-item-label"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        overflow: "hidden",
                        display: "inline-block",
                        flexGrow: 0,
                        verticalAlign: "middle",
                        position: "relative",
                        maxWidth: "100%",
                        minHeight: "1px",
                        whiteSpace: "normal",
                        lineHeight: 1.5715,
                        textAlign: "left",
                        padding: "0px",
                      }}
                    >
                      <label
                        className="ant-form-item-required ant-form-item-required-mark-optional"
                        htmlFor="email"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          touchAction: "manipulation",
                          position: "relative",
                          display: "inline-flex",
                          alignItems: "center",
                          maxWidth: "100%",
                          color: "rgba(0, 0, 0, 0.85)",
                          fontSize: "14px",
                          height: "auto",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontFamily: "InterTight",
                          }}
                        >
                          Email
                          <span
                            className="ml-1 text-base text-[#E12424]"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              marginLeft: "0.25rem",
                              fontSize: "1rem",
                              lineHeight: "1.5rem",
                              color: "rgb(225 36 36/1)",
                            }}
                          >
                            *
                          </span>
                        </div>
                      </label>
                    </div>
                    <div
                      className="ant-col ant-form-item-control"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        position: "relative",
                        maxWidth: "100%",
                        minHeight: "1px",
                        width: "100%",
                      }}
                    >
                      <div
                        className="ant-form-item-control-input"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontFamily: "InterTight",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          minHeight: "32px",
                        }}
                      >
                        <div
                          className="ant-form-item-control-input-content"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontFamily: "InterTight",
                            flex: "1 1 auto",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            className="ant-input-affix-wrapper input-form mobile-input mt-1 ant-input-affix-wrapper-status-success"
                            style={{
                              boxSizing: "border-box",
                              transition: "all 0.3s ease 0s",
                              position: "relative",
                              width: "100%",
                              minWidth: "0px",
                              color: "rgba(0, 0, 0, 0.85)",
                              fontSize: "14px",
                              lineHeight: 1.5715,
                              backgroundColor: "rgb(255, 255, 255)",
                              backgroundImage: "none",
                              display: "inline-flex",
                              borderColor: "rgb(221, 226, 232)",
                              border: "1px solid rgb(221, 226, 232)",
                              borderRadius: "8px",
                              marginTop: "0.25rem",
                              padding: "6px 16px",
                              height: "44px",
                            }}
                          >
                            <input
                              id="email"
                              className="ant-input"
                              name="email"
                              type="email"
                              value={inputValue.email}
                              onChange={handleChange}
                              style={{
                                overflow: "visible",
                                fontFamily: "inherit",
                                fontVariationSettings: "inherit",
                                fontWeight: "inherit",
                                letterSpacing: "inherit",
                                margin: "0px",
                                fontVariant: "tabular-nums",
                                listStyle: "none",
                                transition: "all 0.3s ease 0s",
                                boxSizing: "border-box",
                                fontFeatureSettings: '"tnum"',
                                position: "relative",
                                display: "inline-block",
                                width: "100%",
                                minWidth: "0px",
                                color: "rgba(0, 0, 0, 0.85)",
                                backgroundImage: "none",
                                borderColor: "rgb(107, 114, 128)",
                                borderWidth: "1px",
                                borderRadius: "0px",
                                appearance: "none",
                                backgroundColor: "rgb(255, 255, 255)",
                                fontSize: "1rem",
                                lineHeight: "1.5rem",
                                touchAction: "manipulation",
                                padding: "0px",
                                border: "none",
                                outline: "none",
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-editor flex h-full flex-1 flex-col text-justify text-sm"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              display: "flex",
              height: "100%",
              flex: "1 1 0%",
              flexDirection: "column",
              textAlign: "justify",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            <p
              className="mb-6 text-center text-base font-medium text-orange"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                marginTop: "0px",
                position: "relative",
                overflowWrap: "break-word",
                marginBottom: "1.5rem",
                textAlign: "center",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                fontWeight: 500,
                color: "rgb(239 82 34/1)",
                fontFamily: "InterTight",
              }}
            >
              ĐIỀU KHOẢN & LƯU Ý
            </p>
            <div
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
              }}
            >
              <p
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "1rem",
                  fontWeight: 500,
                  fontSize: "15px",
                  position: "relative",
                  overflowWrap: "break-word",
                  fontFamily: "InterTight",
                }}
              >
                (*){" "}
                <span
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    marginBottom: "1rem",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "InterTight",
                  }}
                >
                  Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít nhất
                  30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán vé
                  thành công có chứa mã vé được gửi từ hệ thống FUTA BUS LINE.{" "}
                </span>
                Vui lòng liên hệ Trung tâm tổng đài{" "}
                <a
                  className="text-orange"
                  href="tel:19006067"
                  target="_self"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    outline: "none",
                    transition: "color 0.3s ease 0s",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    touchAction: "manipulation",
                    textDecoration: "inherit",
                    color: "rgb(239 82 34/1)",
                  }}
                >
                  <span
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginBottom: "1rem",
                      color: "rgb(239, 82, 34)",
                      fontFamily: "InterTight",
                    }}
                  >
                    1900 6067
                  </span>
                </a>
                <a
                  className="text-orange"
                  href="tel:1900 6067"
                  target="_blank"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    outline: "none",
                    transition: "color 0.3s ease 0s",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    touchAction: "manipulation",
                    textDecoration: "inherit",
                    color: "rgb(239 82 34/1)",
                  }}
                >
                  {" "}
                </a>
                để được hỗ trợ.
              </p>
              <p
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "1rem",
                  fontWeight: 500,
                  fontSize: "15px",
                  position: "relative",
                  overflowWrap: "break-word",
                  textAlign: "justify",
                  fontFamily: "InterTight",
                }}
              >
                (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng
                đài trung chuyển{" "}
                <a
                  className="text-orange"
                  href="tel:19006067"
                  target="_self"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    outline: "none",
                    transition: "color 0.3s ease 0s",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    touchAction: "manipulation",
                    textDecoration: "inherit",
                    color: "rgb(239 82 34/1)",
                  }}
                >
                  <span
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginBottom: "1rem",
                      color: "rgb(239, 82, 34)",
                      fontFamily: "InterTight",
                    }}
                  >
                    1900 6918
                  </span>
                </a>{" "}
                trước khi đặt vé. Chúng tôi không đón/trung chuyển tại những điểm
                xe trung chuyển không thể tới được.
              </p>
            </div>
          </div>
        </div >

        <div
          className="flex w-full"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            fontFamily: "InterTight",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            className="flex w-full flex-col p-4 text-[15px] md:p-6"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              fontSize: "15px",
              padding: "1.5rem",
            }}
          >
            <div
              className="icon-orange flex gap-4 text-xl font-medium text-black"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                display: "flex",
                gap: "1rem",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                fontWeight: 500,
                color: "rgb(0 0 0/1)",
              }}
            >
              Thông tin chuyến đi
              <img
                className="w-6 cursor-pointer text-orange"
                alt="open filter"
                src="https://futabus.vn/images/icons/info_white.svg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  borderStyle: "none",
                  display: "block",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  height: "auto",
                  filter:
                    "invert(47%) sepia(42%) saturate(6373%) hue-rotate(349deg) brightness(96%) contrast(94%)",
                  width: "1.5rem",
                  cursor: "pointer",
                  color: "rgb(239 82 34/1)",
                }}
              />
            </div>
            <div
              className="mt-6 flex gap-6"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "1.5rem",
                display: "flex",
                gap: "1.5rem",
              }}
            >
              <div
                className="flex flex-1 flex-col gap-4"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <span
                  className="text-base font-medium uppercase"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  Điểm đi
                </span>
                <div
                  className="relative flex justify-between"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontFamily: "InterTight",
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="ant-radio-group ant-radio-group-outline"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      fontFamily: "InterTight",
                      margin: "0px",
                      padding: "0px",
                      fontVariant: "tabular-nums",
                      listStyle: "none",
                      boxSizing: "border-box",
                      color: "rgba(0, 0, 0, 0.85)",
                      lineHeight: 1.5715,
                      fontFeatureSettings: '"tnum"',
                      display: "inline-block",
                      fontSize: "0px",
                    }}
                  >
                  </div>
                </div>
                <select
                  name="fromStation"
                  id="fromStation"
                  value={inputValue.fromStation}
                  onChange={handleChange}
                  required
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontFamily: "InterTight",
                    borderRadius: "8px",
                    padding: "9px 16px",
                    borderColor: "rgb(221, 226, 232)",
                    height: "36px",
                    display: "flex",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: "1px",
                    fontSize: "15px",
                  }}
                >
                  <option value="" selected disabled>Chọn điểm đi</option>
                  <option value="SG">Sài Gòn</option>
                  <option value="CT">Cần Thơ</option>
                  <option value="RG">Rạch Giá</option>
                </select>
              </div>
              <div
                className="h-full w-[1px] border-r"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  height: "100%",
                  width: "1px",
                  borderRightWidth: "1px",
                }}
              />
              <div
                className="flex flex-1 flex-col gap-4"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <span
                  className="text-base font-medium uppercase"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  Điểm đến
                </span>
                <div
                  className="relative flex justify-between"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontFamily: "InterTight",
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                </div>
                <select
                  name="toStation"
                  id="toStation"
                  onChange={handleChange}
                  value={inputValue.toStation}
                  required
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontFamily: "InterTight",
                    borderRadius: "8px",
                    padding: "9px 16px",
                    borderColor: "rgb(221, 226, 232)",
                    height: "36px",
                    display: "flex",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: "1px",
                    fontSize: "15px",
                  }}
                >
                  <option value="" selected disabled>Chọn điểm đến</option>
                  <option value="SG">Sài Gòn</option>
                  <option value="DL">Đà Lạt</option>
                  <option value="PT">Phan Thiết</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex w-full"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            fontFamily: "InterTight",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            className="flex w-full flex-col p-4 text-[15px] md:p-6"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              fontSize: "15px",
              padding: "1.5rem",
            }}
          >
            <div
              className="icon-orange flex gap-4 text-xl font-medium text-black"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                display: "flex",
                gap: "1rem",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                fontWeight: 500,
                color: "rgb(0 0 0/1)",
              }}
            >
              Số lượng vé
            </div>
            <div
              className="mt-6 flex gap-6"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "1.5rem",
                display: "flex",
                gap: "1.5rem",
              }}
            >
              <label
                className="flex flex-1 flex-col gap-4"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <select
                  type="number"
                  name="quantity"
                  id="quantity"
                  onChange={handleChange}
                  value={inputValue.quantity}
                  required
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontFamily: "InterTight",
                    borderRadius: "8px",
                    padding: "9px 16px",
                    borderColor: "rgb(221, 226, 232)",
                    height: "36px",
                    display: "flex",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: "1px",
                    fontSize: "15px",
                  }}
                >
                  <option value="0" selected disabled>Chọn số lượng vé</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </label>
              <div
                className="h-full w-[1px] border-r"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  height: "100%",
                  width: "1px",
                  borderRightWidth: "1px",
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="flex w-full"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            fontFamily: "InterTight",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            className="flex w-full flex-col p-4 text-[15px] md:p-6"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              fontSize: "15px",
              padding: "1.5rem",
            }}
          >
            <div
              className="icon-orange flex gap-4 text-xl font-medium text-black"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                display: "flex",
                gap: "1rem",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                fontWeight: 500,
                color: "rgb(0 0 0/1)",
              }}
            >
              Giờ khởi hành
            </div>
            <div
              className="mt-6 flex gap-6"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "1.5rem",
                display: "flex",
                gap: "1.5rem",
              }}
            >
              <label
                className="flex flex-1 flex-col gap-4"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <select
                  type="string"
                  name="departureDate"
                  id="departureDate"
                  onChange={handleChange}
                  value={inputValue.departureDate}
                  required
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontFamily: "InterTight",
                    borderRadius: "8px",
                    padding: "9px 16px",
                    borderColor: "rgb(221, 226, 232)",
                    height: "36px",
                    display: "flex",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: "1px",
                    fontSize: "15px",
                  }}
                >
                  <option value="" selected disabled>Chọn ngày khởi hành</option>
                  <option value="08/05/2024">08/05/2024</option>
                  <option value="09/05/2024">09/05/2024</option>
                  <option value="10/05/2024">10/05/2024</option>
                  <option value="11/05/2024">11/05/2024</option>
                  <option value="12/05/2024">12/05/2024</option>
                  <option value="13/05/2024">13/05/2024</option>
                </select>
              </label>
              <div
                className="h-full w-[1px] border-r"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  height: "100%",
                  width: "1px",
                  borderRightWidth: "1px",
                }}
              />
              <label
                className="flex flex-1 flex-col gap-4"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <select
                  type="string"
                  name="departureTime"
                  id="departureTime"
                  onChange={handleChange}
                  value={inputValue.departureTime}
                  required
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontFamily: "InterTight",
                    borderRadius: "8px",
                    padding: "9px 16px",
                    borderColor: "rgb(221, 226, 232)",
                    height: "36px",
                    display: "flex",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: "1px",
                    fontSize: "15px",
                  }}
                >
                  <option value="" selected disabled>Chọn giờ khởi hành</option>
                  <option value="00:00">00:00</option>
                  <option value="00:30">00:30</option>
                  <option value="01:00">01:00</option>
                  <option value="01:30">01:30</option>
                  <option value="02:00">02:00</option>
                  <option value="02:30">02:30</option>
                </select>
              </label>
              <div
                className="h-full w-[1px] border-r"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  height: "100%",
                  width: "1px",
                  borderRightWidth: "1px",
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="flex items-center p-6"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            fontFamily: "InterTight",
            display: "flex",
            alignItems: "center",
            padding: "1.5rem",
          }}
        >
          <div
            className="flex flex-col"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              className="w-16 rounded-xl bg-[#00613D] py-1 text-center text-xs text-white"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                width: "4rem",
                borderRadius: "0.75rem",
                backgroundColor: "rgb(0 97 61/1)",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                textAlign: "center",
                fontSize: "0.75rem",
                lineHeight: "1rem",
                color: "rgb(255 255 255/1)",
              }}
            >
              FUTAPAY
            </span>
            <span
              className="mt-2 text-2xl font-medium text-black"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                marginTop: "0.5rem",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                fontWeight: 500,
                color: "rgb(0 0 0/1)",
              }}
            >
              {formatMoney(price)} VND
            </span>
          </div>
          <div
            className="flex flex-auto items-center justify-end"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              display: "flex",
              flex: "1 1 auto",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <button
              className="ant-btn ant-btn-round ant-btn-default button-default white mr-6 w-28"
              type="reset"
              style={{
                boxSizing: "border-box",
                overflow: "visible",
                margin: "0px",
                fontFamily: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                letterSpacing: "inherit",
                textTransform: "none",
                whiteSpace: "nowrap",
                transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
                lineHeight: 1.5715,
                position: "relative",
                display: "inline-block",
                fontWeight: 400,
                textAlign: "center",
                boxShadow: "rgba(0, 0, 0, 0.016) 0px 2px 0px",
                cursor: "pointer",
                userSelect: "none",
                touchAction: "manipulation",
                outline: "0px",
                borderRadius: "32px",
                height: "32px",
                fontSize: "14px",
                padding: "0px 20px",
                color: "rgb(239, 82, 34)",
                appearance: "button",
                background: "rgb(255, 255, 255)",
                border: "1px solid rgb(192, 198, 204)",
                backgroundImage: "initial",
                backgroundColor: "rgb(255, 255, 255)",
                marginRight: "1.5rem",
                width: "7rem",
              }}
            >
              <span
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "inline-block",
                }}
              >
                Hủy
              </span>
            </button>
            <button
              className="ant-btn ant-btn-round ant-btn-default button-default active w-28"
              type="submit"
              value="Submit"
              style={{
                boxSizing: "border-box",
                overflow: "visible",
                margin: "0px",
                fontFamily: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                letterSpacing: "inherit",
                textTransform: "none",
                whiteSpace: "nowrap",
                transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
                lineHeight: 1.5715,
                position: "relative",
                display: "inline-block",
                fontWeight: 400,
                textAlign: "center",
                boxShadow: "rgba(0, 0, 0, 0.016) 0px 2px 0px",
                cursor: "pointer",
                userSelect: "none",
                touchAction: "manipulation",
                outline: "0px",
                borderRadius: "32px",
                height: "32px",
                fontSize: "14px",
                border: "none",
                padding: "0px 20px",
                appearance: "button",
                background: "rgb(242, 117, 78)",
                backgroundImage: "initial",
                backgroundColor: "rgb(242, 117, 78)",
                color: "rgb(255, 255, 255)",
                width: "7rem",
              }}
            >
              <span
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "inline-block",
                }}
              >
                Đặt vé
              </span>
            </button>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
html {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  font-family: InterTight;
}

body {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-variant: tabular-nums;
  background-color: rgb(255, 255, 255);
  font-feature-settings: "tnum";
  margin: 0px;
  font-family: InterTight;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(17 17 17/1);
  overflow: overlay;
}
`,
          }}
        />
      </form >
    </>
      );
};

      export default TV;
