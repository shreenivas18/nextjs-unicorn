"use client";
import { useEffect } from "react";

export default function UnicornStudioWidget() {
  useEffect(() => {
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.22/dist/unicornStudio.umd.js";
      script.onload = function () {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      overflowX: "hidden", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      margin: 0,
      padding: 0,
      marginBottom: "-100px"
    }}>
      <div 
        data-us-project="KhXh3oeWDClErWCM4KPD" 
        style={{ 
          width: "100vw", 
          height: "100vh", 
          marginTop: "-200px",
          marginBottom: "-40px"
        }}
      ></div>
    </div>
  );
}