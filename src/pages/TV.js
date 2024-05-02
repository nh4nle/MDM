import "./TV.css";

const TV = () => {
  return (
    <>
      <div
        className="2lg:content 2lg:layout hidden h-20 2lg:flex"
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
           <div
        className="flex w-full flex-col gap-6 pt-0 2lg:flex-row 2lg:pt-8"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          fontFamily: "InterTight",
          display: "flex",
          width: "100%",
          gap: "1.5rem",
          flexDirection: "row",
          paddingTop: "2rem",
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
            className="flex w-full flex-col rounded-xl border bg-white"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              borderRadius: "0.75rem",
              borderWidth: "1px",
              backgroundColor: "rgb(255 255 255/1)",
            }}
          >
            <div
              className="flex justify-between"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="flex-1"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "InterTight",
                  flex: "1 1 0%",
                }}
              >
                <div
                  className="min-w-sm mx-auto flex w-[100%] max-w-2xl flex-col px-3 py-1 sm:px-6 2lg:mx-0 2lg:w-auto"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontFamily: "InterTight",
                    display: "flex",
                    maxWidth: "42rem",
                    flexDirection: "column",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    marginLeft: "0px",
                    marginRight: "0px",
                    width: "auto",
                  }}
                >
                  <div
                    className="flex max-w-xs items-start justify-between pt-5 text-xl font-medium text-black"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontFamily: "InterTight",
                      display: "flex",
                      maxWidth: "20rem",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      paddingTop: "1.25rem",
                      fontSize: "1.25rem",
                      lineHeight: "1.75rem",
                      fontWeight: 500,
                      color: "rgb(0 0 0/1)",
                    }}
                  >
                    <p
                      className="flex flex-col"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      Chọn ghế
                    </p>
                    <div
                      className="cursor-pointer text-sm text-blue-400 underline"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        color: "rgb(96 165 250/1)",
                        textDecorationLine: "underline",
                      }}
                    >
                      Thông tin xe
                    </div>
                  </div>
                  <div
                    className="my-4 flex flex-row text-center font-medium gap-4 sm:gap-6"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      fontFamily: "InterTight",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      display: "flex",
                      flexDirection: "row",
                      textAlign: "center",
                      fontWeight: 500,
                      gap: "1.5rem",
                    }}
                  >
                    <div
                      className="flex min-w-[50%] flex-col md:min-w-[153px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "153px",
                      }}
                    >
                      <div
                        className="icon-gray flex w-full justify-center p-2 text-sm"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontFamily: "InterTight",
                          display: "flex",
                          width: "100%",
                          justifyContent: "center",
                          padding: "0.5rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.25rem",
                        }}
                      >
                        <span
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          Tầng dưới
                        </span>
                        <img
                          className="block 2lg:hidden"
                          alt="dropdown"
                          src="https://futabus.vn/images/icons/icon_form_droplist.svg"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "auto",
                            filter:
                              "brightness(0) saturate(100%) invert(77%) sepia(5%) saturate(471%) hue-rotate(167deg) brightness(88%) contrast(89%)",
                            display: "none",
                          }}
                        />
                      </div>
                      <div
                        className="divide mb-4 2lg:hidden"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontFamily: "InterTight",
                          background: "rgba(0, 0, 0, 0.1)",
                          width: "100%",
                          height: "0.5px",
                          marginBottom: "1rem",
                          display: "none",
                        }}
                      />
                      <table
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          textIndent: "0px",
                          borderCollapse: "collapse",
                        }}
                      >
                        <tbody
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_selecting.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(17 17 17/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A01
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A02
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A03
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A04
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A05
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A06
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A07
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A08
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A09
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A10
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A11
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A12
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A13
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A14
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A15
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A16
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                A17
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="flex min-w-[50%] flex-col md:min-w-[153px]"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "153px",
                      }}
                    >
                      <div
                        className="icon-gray flex w-full justify-center p-2 text-sm"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontFamily: "InterTight",
                          display: "flex",
                          width: "100%",
                          justifyContent: "center",
                          padding: "0.5rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.25rem",
                        }}
                      >
                        <span
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          Tầng trên
                        </span>
                        <img
                          className="block 2lg:hidden"
                          alt="dropdown"
                          src="https://futabus.vn/images/icons/icon_form_droplist.svg"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "auto",
                            filter:
                              "brightness(0) saturate(100%) invert(77%) sepia(5%) saturate(471%) hue-rotate(167deg) brightness(88%) contrast(89%)",
                            display: "none",
                          }}
                        />
                      </div>
                      <div
                        className="divide mb-4 2lg:hidden"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontFamily: "InterTight",
                          background: "rgba(0, 0, 0, 0.1)",
                          width: "100%",
                          height: "0.5px",
                          marginBottom: "1rem",
                          display: "none",
                        }}
                      />
                      <table
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          borderColor: "inherit",
                          textIndent: "0px",
                          borderCollapse: "collapse",
                        }}
                      >
                        <tbody
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B01
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B02
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B03
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B04
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B05
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B06
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B07
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B08
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B09
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B10
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B11
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B12
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B13
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B14
                              </span>
                            </td>
                          </tr>
                          <tr
                            className="flex items-center gap-1 justify-between"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.25rem",
                            }}
                          >
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B15
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B16
                              </span>
                            </td>
                            <td
                              className="relative w-6"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                width: "1.5rem",
                              }}
                            />
                            <td
                              className="relative mt-1 flex justify-center text-center cursor-pointer"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                boxSizing: "border-box",
                                position: "relative",
                                marginTop: "0.25rem",
                                display: "flex",
                                cursor: "pointer",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <img
                                width={32}
                                alt="seat icon"
                                src="https://futabus.vn/images/icons/seat_active.svg"
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
                                className="absolute text-sm font-semibold lg:text-[10px] text-[#339AF4] top-1"
                                style={{
                                  border: "0px solid rgb(229, 231, 235)",
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  top: "0.25rem",
                                  lineHeight: "1.25rem",
                                  fontWeight: 600,
                                  color: "rgb(51 154 244/1)",
                                  fontSize: "10px",
                                }}
                              >
                                B17
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="ml-4 mt-5 flex flex-col gap-4 text-[13px] font-normal"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        marginLeft: "1rem",
                        marginTop: "1.25rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        fontSize: "13px",
                        fontWeight: 400,
                      }}
                    >
                      <span
                        className="mr-8 flex items-center"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          marginRight: "2rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="mr-2 h-4 w-4 rounded bg-[#D5D9DD] border-[#C0C6CC]"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontFamily: "InterTight",
                            marginRight: "0.5rem",
                            height: "1rem",
                            width: "1rem",
                            borderRadius: "0.25rem",
                            borderColor: "rgb(192 198 204/1)",
                            backgroundColor: "rgb(213 217 221/1)",
                          }}
                        />
                        Đã bán
                      </span>
                      <span
                        className="mr-8 flex items-center"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          marginRight: "2rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="mr-2 h-4 w-4 rounded bg-[#DEF3FF] border-[#96C5E7]"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontFamily: "InterTight",
                            marginRight: "0.5rem",
                            height: "1rem",
                            width: "1rem",
                            borderRadius: "0.25rem",
                            borderColor: "rgb(150 197 231/1)",
                            backgroundColor: "rgb(222 243 255/1)",
                          }}
                        />
                        Còn trống
                      </span>
                      <span
                        className="flex items-center"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="mr-2 h-4 w-4 rounded bg-[#FDEDE8] border-[#F8BEAB]"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            fontFamily: "InterTight",
                            marginRight: "0.5rem",
                            height: "1rem",
                            width: "1rem",
                            borderRadius: "0.25rem",
                            borderColor: "rgb(248 190 171/1)",
                            backgroundColor: "rgb(253 237 232/1)",
                          }}
                        />
                        Đang chọn
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="divide py-[2px]"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                background: "rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "0.5px",
                paddingTop: "2px",
                paddingBottom: "2px",
              }}
            />
            <div
              className="flex w-full flex-col gap-6 px-6 py-4 text-[15px] sm:flex-row"
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
                <form
                  className="ant-form ant-form-vertical form-item-custom mt-6"
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
                            className="ant-form-item-required ant-form-item-required-mark-optional"
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
                                  id="CustName"
                                  className="ant-input"
                                  name="name"
                                  type="text"
                                  defaultValue="Lê Minh Nhân"
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
                                <span
                                  className="ant-input-suffix"
                                  style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    flex: "0 0 auto",
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "4px",
                                  }}
                                >
                                  <span
                                    className="ant-input-clear-icon"
                                    role="button"
                                    tabIndex="-1"
                                    style={{
                                      border: "0px solid rgb(229, 231, 235)",
                                      boxSizing: "border-box",
                                      touchAction: "manipulation",
                                      margin: "0px",
                                      transition: "color 0.3s ease 0s",
                                      color: "rgba(0, 0, 0, 0.25)",
                                      fontSize: "12px",
                                      verticalAlign: "-1px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <span
                                      className="anticon anticon-close-circle"
                                      aria-label="close-circle"
                                      role="img"
                                      style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        display: "inline-block",
                                        color: "inherit",
                                        fontStyle: "normal",
                                        lineHeight: 0,
                                        textAlign: "center",
                                        textTransform: "none",
                                        verticalAlign: "-0.125em",
                                        textRendering: "optimizelegibility",
                                        WebkitFontSmoothing: "antialiased",
                                      }}
                                    >
                                      <svg
                                        height="1em"
                                        width="1em"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        focusable="false"
                                        viewBox="64 64 896 896"
                                        style={{
                                          border:
                                            "0px solid rgb(229, 231, 235)",
                                          boxSizing: "border-box",
                                          verticalAlign: "middle",
                                          lineHeight: 1,
                                          display: "inline-block",
                                        }}
                                      >
                                        <path
                                          d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
                                          style={{
                                            border:
                                              "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                          }}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </span>
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
                                  id="CustMobile"
                                  className="ant-input"
                                  type="tel"
                                  defaultValue="0837690937"
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
                                <span
                                  className="ant-input-suffix"
                                  style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    flex: "0 0 auto",
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "4px",
                                  }}
                                >
                                  <span
                                    className="ant-input-clear-icon"
                                    role="button"
                                    tabIndex="-1"
                                    style={{
                                      border: "0px solid rgb(229, 231, 235)",
                                      boxSizing: "border-box",
                                      touchAction: "manipulation",
                                      margin: "0px",
                                      transition: "color 0.3s ease 0s",
                                      color: "rgba(0, 0, 0, 0.25)",
                                      fontSize: "12px",
                                      verticalAlign: "-1px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <span
                                      className="anticon anticon-close-circle"
                                      aria-label="close-circle"
                                      role="img"
                                      style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        display: "inline-block",
                                        color: "inherit",
                                        fontStyle: "normal",
                                        lineHeight: 0,
                                        textAlign: "center",
                                        textTransform: "none",
                                        verticalAlign: "-0.125em",
                                        textRendering: "optimizelegibility",
                                        WebkitFontSmoothing: "antialiased",
                                      }}
                                    >
                                      <svg
                                        height="1em"
                                        width="1em"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        focusable="false"
                                        viewBox="64 64 896 896"
                                        style={{
                                          border:
                                            "0px solid rgb(229, 231, 235)",
                                          boxSizing: "border-box",
                                          verticalAlign: "middle",
                                          lineHeight: 1,
                                          display: "inline-block",
                                        }}
                                      >
                                        <path
                                          d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
                                          style={{
                                            border:
                                              "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                          }}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </span>
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
                            htmlFor="CustEmail"
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
                                  id="CustEmail"
                                  className="ant-input"
                                  type="email"
                                  defaultValue="lenhann10802@gmail.com"
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
                                <span
                                  className="ant-input-suffix"
                                  style={{
                                    border: "0px solid rgb(229, 231, 235)",
                                    boxSizing: "border-box",
                                    flex: "0 0 auto",
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "4px",
                                  }}
                                >
                                  <span
                                    className="ant-input-clear-icon"
                                    role="button"
                                    tabIndex="-1"
                                    style={{
                                      border: "0px solid rgb(229, 231, 235)",
                                      boxSizing: "border-box",
                                      touchAction: "manipulation",
                                      margin: "0px",
                                      transition: "color 0.3s ease 0s",
                                      color: "rgba(0, 0, 0, 0.25)",
                                      fontSize: "12px",
                                      verticalAlign: "-1px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <span
                                      className="anticon anticon-close-circle"
                                      aria-label="close-circle"
                                      role="img"
                                      style={{
                                        border: "0px solid rgb(229, 231, 235)",
                                        boxSizing: "border-box",
                                        display: "inline-block",
                                        color: "inherit",
                                        fontStyle: "normal",
                                        lineHeight: 0,
                                        textAlign: "center",
                                        textTransform: "none",
                                        verticalAlign: "-0.125em",
                                        textRendering: "optimizelegibility",
                                        WebkitFontSmoothing: "antialiased",
                                      }}
                                    >
                                      <svg
                                        height="1em"
                                        width="1em"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        focusable="false"
                                        viewBox="64 64 896 896"
                                        style={{
                                          border:
                                            "0px solid rgb(229, 231, 235)",
                                          boxSizing: "border-box",
                                          verticalAlign: "middle",
                                          lineHeight: 1,
                                          display: "inline-block",
                                        }}
                                      >
                                        <path
                                          d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
                                          style={{
                                            border:
                                              "0px solid rgb(229, 231, 235)",
                                            boxSizing: "border-box",
                                          }}
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
                      Quý khách vui lòng có mặt tại bến xuất phát của xe trước
                      ít nhất 30 phút giờ xe khởi hành, mang theo thông báo đã
                      thanh toán vé thành công có chứa mã vé được gửi từ hệ
                      thống FUTA BUS LINE.{" "}
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
                    (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ
                    Tổng đài trung chuyển{" "}
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
                    trước khi đặt vé. Chúng tôi không đón/trung chuyển tại những
                    điểm xe trung chuyển không thể tới được.
                  </p>
                </div>
              </div>
            </div>
            <label
              className="ant-checkbox-wrapper px-6 pb-4"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                touchAction: "manipulation",
                margin: "0px",
                padding: "0px",
                fontVariant: "tabular-nums",
                listStyle: "none",
                boxSizing: "border-box",
                color: "rgba(0, 0, 0, 0.85)",
                fontSize: "14px",
                fontFeatureSettings: '"tnum"',
                display: "inline-flex",
                alignItems: "baseline",
                lineHeight: "unset",
                cursor: "pointer",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingBottom: "1rem",
              }}
            >
              <span
                className="ant-checkbox"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  fontVariant: "tabular-nums",
                  listStyle: "none",
                  whiteSpace: "nowrap",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "rgba(0, 0, 0, 0.85)",
                  fontSize: "14px",
                  fontFeatureSettings: '"tnum"',
                  position: "relative",
                  top: "0.2em",
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                <input
                  className="ant-checkbox-input"
                  type="checkbox"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    overflow: "visible",
                    margin: "0px",
                    fontFamily: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    fontSize: "100%",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                    letterSpacing: "inherit",
                    inset: "0px",
                    position: "absolute",
                    zIndex: 1,
                    cursor: "pointer",
                    opacity: 0,
                    borderColor: "rgb(107, 114, 128)",
                    borderWidth: "1px",
                    appearance: "none",
                    WebkitPrintColorAdjust: "exact",
                    display: "inline-block",
                    verticalAlign: "middle",
                    backgroundOrigin: "border-box",
                    userSelect: "none",
                    flexShrink: 0,
                    height: "1rem",
                    width: "1rem",
                    color: "rgb(37, 99, 235)",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: "0px",
                    transform: "scale(1.25)",
                    touchAction: "manipulation",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                />
                <span
                  className="ant-checkbox-inner"
                  style={{
                    boxSizing: "border-box",
                    border: "1px solid rgb(217, 217, 217)",
                    borderRadius: "2px",
                    transition: "all 0.3s ease 0s",
                    position: "relative",
                    top: "0px",
                    left: "0px",
                    display: "block",
                    width: "16px",
                    height: "16px",
                    direction: "ltr",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderCollapse: "separate",
                    transform: "scale(1.25)",
                  }}
                />
              </span>
              <span
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  paddingRight: "8px",
                  paddingLeft: "8px",
                }}
              >
                <span
                  className="cursor-pointer text-orange underline"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    color: "rgb(239 82 34/1)",
                    textDecorationLine: "underline",
                  }}
                >
                  Chấp nhận điều khoản
                </span>{" "}
                đặt vé & chính sách bảo mật thông tin của FUTABusline
              </span>
            </label>
            <div
              className="divide py-[2px]"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                background: "rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "0.5px",
                paddingTop: "2px",
                paddingBottom: "2px",
              }}
            />
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
                  Thông tin đón trả
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
                      Điểm đón
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
                        <label
                          className="ant-radio-wrapper ant-radio-wrapper-checked"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            touchAction: "manipulation",
                            padding: "0px",
                            fontVariant: "tabular-nums",
                            listStyle: "none",
                            margin: "0px 8px 0px 0px",
                            boxSizing: "border-box",
                            fontSize: "14px",
                            lineHeight: 1.5715,
                            fontFeatureSettings: '"tnum"',
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "baseline",
                            cursor: "pointer",
                            color: "rgb(239, 82, 34)",
                            fontWeight: 500,
                          }}
                        >
                          <span
                            className="ant-radio ant-radio-checked"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              margin: "0px",
                              padding: "0px",
                              fontVariant: "tabular-nums",
                              listStyle: "none",
                              outline: "none",
                              boxSizing: "border-box",
                              color: "rgba(0, 0, 0, 0.85)",
                              fontSize: "14px",
                              lineHeight: 1.5715,
                              fontFeatureSettings: '"tnum"',
                              position: "relative",
                              top: "0.2em",
                              display: "inline-block",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              className="ant-radio-input"
                              type="radio"
                              value="0"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                overflow: "visible",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontFeatureSettings: "inherit",
                                fontVariationSettings: "inherit",
                                fontSize: "100%",
                                fontWeight: "inherit",
                                lineHeight: "inherit",
                                letterSpacing: "inherit",
                                inset: "0px",
                                position: "absolute",
                                zIndex: 1,
                                cursor: "pointer",
                                opacity: 0,
                                borderWidth: "1px",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                display: "inline-block",
                                verticalAlign: "middle",
                                backgroundOrigin: "border-box",
                                userSelect: "none",
                                flexShrink: 0,
                                height: "1rem",
                                width: "1rem",
                                color: "rgb(37, 99, 235)",
                                borderRadius: "100%",
                                touchAction: "manipulation",
                                padding: "0px",
                                boxSizing: "border-box",
                                borderColor: "transparent",
                                backgroundPosition: "50% center",
                                backgroundColor: "currentcolor",
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                                backgroundImage:
                                  "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")",
                              }}
                            />
                            <span
                              className="ant-radio-inner"
                              style={{
                                boxSizing: "border-box",
                                border: "1px solid rgb(217, 217, 217)",
                                borderRadius: "50%",
                                transition: "all 0.3s ease 0s",
                                position: "relative",
                                top: "0px",
                                left: "0px",
                                display: "block",
                                width: "16px",
                                height: "16px",
                                backgroundColor: "rgb(255, 255, 255)",
                                borderColor: "rgb(239, 82, 34)",
                              }}
                            />
                          </span>
                          <span
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              paddingRight: "8px",
                              paddingLeft: "8px",
                            }}
                          >
                            Điểm đón
                          </span>
                        </label>
                        <label
                          className="ant-radio-wrapper"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            touchAction: "manipulation",
                            padding: "0px",
                            fontVariant: "tabular-nums",
                            listStyle: "none",
                            margin: "0px 8px 0px 0px",
                            boxSizing: "border-box",
                            color: "rgba(0, 0, 0, 0.85)",
                            fontSize: "14px",
                            lineHeight: 1.5715,
                            fontFeatureSettings: '"tnum"',
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "baseline",
                            cursor: "pointer",
                          }}
                        >
                          <span
                            className="ant-radio"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              margin: "0px",
                              padding: "0px",
                              fontVariant: "tabular-nums",
                              listStyle: "none",
                              outline: "none",
                              boxSizing: "border-box",
                              color: "rgba(0, 0, 0, 0.85)",
                              fontSize: "14px",
                              lineHeight: 1.5715,
                              fontFeatureSettings: '"tnum"',
                              position: "relative",
                              top: "0.2em",
                              display: "inline-block",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              className="ant-radio-input"
                              type="radio"
                              value="1"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                overflow: "visible",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontFeatureSettings: "inherit",
                                fontVariationSettings: "inherit",
                                fontSize: "100%",
                                fontWeight: "inherit",
                                lineHeight: "inherit",
                                letterSpacing: "inherit",
                                inset: "0px",
                                position: "absolute",
                                zIndex: 1,
                                cursor: "pointer",
                                opacity: 0,
                                borderColor: "rgb(107, 114, 128)",
                                borderWidth: "1px",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                display: "inline-block",
                                verticalAlign: "middle",
                                backgroundOrigin: "border-box",
                                userSelect: "none",
                                flexShrink: 0,
                                height: "1rem",
                                width: "1rem",
                                color: "rgb(37, 99, 235)",
                                backgroundColor: "rgb(255, 255, 255)",
                                borderRadius: "100%",
                                touchAction: "manipulation",
                                padding: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                            <span
                              className="ant-radio-inner"
                              style={{
                                boxSizing: "border-box",
                                border: "1px solid rgb(217, 217, 217)",
                                borderRadius: "50%",
                                transition: "all 0.3s ease 0s",
                                position: "relative",
                                top: "0px",
                                left: "0px",
                                display: "block",
                                width: "16px",
                                height: "16px",
                                backgroundColor: "rgb(255, 255, 255)",
                              }}
                            />
                          </span>
                          <span
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              paddingRight: "8px",
                              paddingLeft: "8px",
                            }}
                          >
                            Trung chuyển
                          </span>
                        </label>
                      </div>
                    </div>
                    <div
                      className="input-form flex w-full cursor-pointer items-center justify-between border text-[15px]"
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
                      <span
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      >
                        BX Mien Tay
                      </span>
                      <div
                        className="icon-gray"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontFamily: "InterTight",
                        }}
                      >
                        <img
                          alt="dropdown"
                          src="https://futabus.vn/images/icons/icon_form_droplist.svg"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            borderStyle: "none",
                            display: "block",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "auto",
                            filter:
                              "brightness(0) saturate(100%) invert(77%) sepia(5%) saturate(471%) hue-rotate(167deg) brightness(88%) contrast(89%)",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="flex flex-wrap gap-1"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontFamily: "InterTight",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.25rem",
                      }}
                    >
                      <span
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      >
                        Quý khách vui lòng có mặt tại Bến xe/Văn Phòng
                      </span>
                      <span
                        className="font-semibold"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 600,
                        }}
                      >
                        BX Mien Tay
                      </span>
                      <span
                        className="font-semibold text-red-500"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 600,
                          color: "rgb(239 68 68/1)",
                        }}
                      >
                        Trước 03:45 25/05/2024
                      </span>
                      <span
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      >
                        để được trung chuyển hoặc kiểm tra thông tin trước khi
                        lên xe.
                      </span>
                    </div>
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
                      Điểm trả
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
                        <label
                          className="ant-radio-wrapper ant-radio-wrapper-checked"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            touchAction: "manipulation",
                            padding: "0px",
                            fontVariant: "tabular-nums",
                            listStyle: "none",
                            margin: "0px 8px 0px 0px",
                            boxSizing: "border-box",
                            fontSize: "14px",
                            lineHeight: 1.5715,
                            fontFeatureSettings: '"tnum"',
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "baseline",
                            cursor: "pointer",
                            color: "rgb(239, 82, 34)",
                            fontWeight: 500,
                          }}
                        >
                          <span
                            className="ant-radio ant-radio-checked"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              margin: "0px",
                              padding: "0px",
                              fontVariant: "tabular-nums",
                              listStyle: "none",
                              outline: "none",
                              boxSizing: "border-box",
                              color: "rgba(0, 0, 0, 0.85)",
                              fontSize: "14px",
                              lineHeight: 1.5715,
                              fontFeatureSettings: '"tnum"',
                              position: "relative",
                              top: "0.2em",
                              display: "inline-block",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              className="ant-radio-input"
                              type="radio"
                              value="0"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                overflow: "visible",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontFeatureSettings: "inherit",
                                fontVariationSettings: "inherit",
                                fontSize: "100%",
                                fontWeight: "inherit",
                                lineHeight: "inherit",
                                letterSpacing: "inherit",
                                inset: "0px",
                                position: "absolute",
                                zIndex: 1,
                                cursor: "pointer",
                                opacity: 0,
                                borderWidth: "1px",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                display: "inline-block",
                                verticalAlign: "middle",
                                backgroundOrigin: "border-box",
                                userSelect: "none",
                                flexShrink: 0,
                                height: "1rem",
                                width: "1rem",
                                color: "rgb(37, 99, 235)",
                                borderRadius: "100%",
                                touchAction: "manipulation",
                                padding: "0px",
                                boxSizing: "border-box",
                                borderColor: "transparent",
                                backgroundPosition: "50% center",
                                backgroundColor: "currentcolor",
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                                backgroundImage:
                                  "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")",
                              }}
                            />
                            <span
                              className="ant-radio-inner"
                              style={{
                                boxSizing: "border-box",
                                border: "1px solid rgb(217, 217, 217)",
                                borderRadius: "50%",
                                transition: "all 0.3s ease 0s",
                                position: "relative",
                                top: "0px",
                                left: "0px",
                                display: "block",
                                width: "16px",
                                height: "16px",
                                backgroundColor: "rgb(255, 255, 255)",
                                borderColor: "rgb(239, 82, 34)",
                              }}
                            />
                          </span>
                          <span
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              paddingRight: "8px",
                              paddingLeft: "8px",
                            }}
                          >
                            Điểm trả
                          </span>
                        </label>
                        <label
                          className="ant-radio-wrapper"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            touchAction: "manipulation",
                            padding: "0px",
                            fontVariant: "tabular-nums",
                            listStyle: "none",
                            margin: "0px 8px 0px 0px",
                            boxSizing: "border-box",
                            color: "rgba(0, 0, 0, 0.85)",
                            fontSize: "14px",
                            lineHeight: 1.5715,
                            fontFeatureSettings: '"tnum"',
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "baseline",
                            cursor: "pointer",
                          }}
                        >
                          <span
                            className="ant-radio"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              margin: "0px",
                              padding: "0px",
                              fontVariant: "tabular-nums",
                              listStyle: "none",
                              outline: "none",
                              boxSizing: "border-box",
                              color: "rgba(0, 0, 0, 0.85)",
                              fontSize: "14px",
                              lineHeight: 1.5715,
                              fontFeatureSettings: '"tnum"',
                              position: "relative",
                              top: "0.2em",
                              display: "inline-block",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              className="ant-radio-input"
                              type="radio"
                              value="1"
                              style={{
                                border: "0px solid rgb(229, 231, 235)",
                                overflow: "visible",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontFeatureSettings: "inherit",
                                fontVariationSettings: "inherit",
                                fontSize: "100%",
                                fontWeight: "inherit",
                                lineHeight: "inherit",
                                letterSpacing: "inherit",
                                inset: "0px",
                                position: "absolute",
                                zIndex: 1,
                                cursor: "pointer",
                                opacity: 0,
                                borderColor: "rgb(107, 114, 128)",
                                borderWidth: "1px",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                display: "inline-block",
                                verticalAlign: "middle",
                                backgroundOrigin: "border-box",
                                userSelect: "none",
                                flexShrink: 0,
                                height: "1rem",
                                width: "1rem",
                                color: "rgb(37, 99, 235)",
                                backgroundColor: "rgb(255, 255, 255)",
                                borderRadius: "100%",
                                touchAction: "manipulation",
                                padding: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                            <span
                              className="ant-radio-inner"
                              style={{
                                boxSizing: "border-box",
                                border: "1px solid rgb(217, 217, 217)",
                                borderRadius: "50%",
                                transition: "all 0.3s ease 0s",
                                position: "relative",
                                top: "0px",
                                left: "0px",
                                display: "block",
                                width: "16px",
                                height: "16px",
                                backgroundColor: "rgb(255, 255, 255)",
                              }}
                            />
                          </span>
                          <span
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              paddingRight: "8px",
                              paddingLeft: "8px",
                            }}
                          >
                            Trung chuyển
                          </span>
                        </label>
                      </div>
                    </div>
                    <div
                      className="input-form flex w-full cursor-pointer items-center justify-between border text-[15px]"
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
                      <span
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      >
                        Da Lat
                      </span>
                      <div
                        className="icon-gray"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontFamily: "InterTight",
                        }}
                      >
                        <img
                          alt="dropdown"
                          src="https://futabus.vn/images/icons/icon_form_droplist.svg"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            borderStyle: "none",
                            display: "block",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "auto",
                            filter:
                              "brightness(0) saturate(100%) invert(77%) sepia(5%) saturate(471%) hue-rotate(167deg) brightness(88%) contrast(89%)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="divide py-[2px]"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                background: "rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "0.5px",
                paddingTop: "2px",
                paddingBottom: "2px",
              }}
            />
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
                  0đ
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
                  type="button"
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
                    transition:
                      "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
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
                  type="button"
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
                    transition:
                      "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
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
                    Thanh toán
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mx-auto flex min-w-[345px] flex-col gap-6"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            fontFamily: "InterTight",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            minWidth: "345px",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div
            className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              width: "100%",
              borderRadius: "0.75rem",
              borderWidth: "1px",
              borderColor: "rgb(221 226 232/1)",
              backgroundColor: "rgb(255 255 255/1)",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              fontSize: "15px",
            }}
          >
            <p
              className="icon-orange flex gap-4 text-xl font-medium text-black"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                display: "flex",
                gap: "1rem",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                fontWeight: 500,
                color: "rgb(0 0 0/1)",
              }}
            >
              Thông tin lượt đi
            </p>
            <div
              className="mt-4 flex justify-between"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                className="text-gray w-20"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(99, 114, 128)",
                  width: "5rem",
                }}
              >
                Tuyến xe
              </span>
              <span
                className="text-right text-black"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "right",
                  color: "rgb(0 0 0/1)",
                }}
              >
                BX Mien Tay ⇒ Da Lat
              </span>
            </div>
            <div
              className="mt-1 flex items-center justify-between"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                className="text-gray w-30"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(99, 114, 128)",
                }}
              >
                Thời gian xuất bến
              </span>
              <span
                className="text-[#00613D]"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(0 97 61/1)",
                }}
              >
                04:00 25-05-2024
              </span>
            </div>
            <div
              className="mt-1 flex items-center justify-between"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                className="text-gray w-28"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(99, 114, 128)",
                  width: "7rem",
                }}
              >
                Số lượng ghế
              </span>
              <span
                className="text-black"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(0 0 0/1)",
                }}
              >
                0 Ghế
              </span>
            </div>
            <div
              className="mt-1 flex items-center justify-between"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                className="text-gray w-28"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(99, 114, 128)",
                  width: "7rem",
                }}
              >
                Số ghế
              </span>
              <span
                className="text-[#00613D]"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(0 97 61/1)",
                }}
              />
            </div>
            <div
              className="mt-1 flex items-center justify-between"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                className="text-gray"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(99, 114, 128)",
                }}
              >
                Tổng tiền lượt đi
              </span>
              <span
                className="text-[#00613D]"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(0 97 61/1)",
                }}
              >
                0đ
              </span>
            </div>
          </div>
          <div
            className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              fontFamily: "InterTight",
              width: "100%",
              borderRadius: "0.75rem",
              borderWidth: "1px",
              borderColor: "rgb(221 226 232/1)",
              backgroundColor: "rgb(255 255 255/1)",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              fontSize: "15px",
            }}
          >
            <div
              className="icon-orange flex gap-2 text-xl font-medium text-black"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                display: "flex",
                gap: "0.5rem",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                fontWeight: 500,
                color: "rgb(0 0 0/1)",
              }}
            >
              Chi tiết giá{" "}
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
              className="mt-4 flex items-center justify-between"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                className="text-gray"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(99, 114, 128)",
                }}
              >
                Giá vé lượt đi
              </span>
              <span
                className="text-orange"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(239 82 34/1)",
                }}
              >
                0đ
              </span>
            </div>
            <div
              className="mt-1 flex items-center justify-between"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                className="text-gray"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(99, 114, 128)",
                }}
              >
                Phí thanh toán
              </span>
              <span
                className="text-black"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(0 0 0/1)",
                }}
              >
                0đ
              </span>
            </div>
            <div
              className="divide my-3"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                background: "rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "0.5px",
                marginTop: "0.75rem",
                marginBottom: "0.75rem",
              }}
            />
            <div
              className="flex items-center justify-between"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontFamily: "InterTight",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                className="text-gray"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(99, 114, 128)",
                }}
              >
                Tổng tiền
              </span>
              <span
                className="text-orange"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(239 82 34/1)",
                }}
              >
                0đ
              </span>
            </div>
          </div>
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
    </>
  );
};

export default TV;
