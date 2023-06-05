import React from "react";

export default function ThirdwebGuideFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 200,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() =>
          window.open("https://www.linkedin.com/in/ali-ibrahim-mohammed-a18389239/", "_blank")
        }
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        
        <img
          src={"/src/github.png"}
          width={50}
          height={50}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ali-ibrahim-mohammed-a18389239/",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}
