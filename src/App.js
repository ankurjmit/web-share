import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const shareButton = document.querySelector(".share-button");
    const qrcode = document.querySelector("#qrcode");
    const qrContainer = document.querySelector(".qr");
    const getQRCodeButton = document.querySelector(".qr-code-button");
    const shareDialog = document.querySelector(".share-dialog");
    const closeButton = document.querySelector(".close-button");
    shareButton.addEventListener("click", (event) => {
      if (navigator.share) {
        navigator
          .share({
            title: "WebShare API Demo",
            url: window.location.href,
          })
          .then(() => {
            console.log("Thanks for sharing!");
          })
          .catch(console.error);
      } else {
        shareDialog.classList.add("is-open");
      }
    });
    getQRCodeButton.addEventListener("click", () => {
      fetch(
        "https://chart.apis.google.com/chart?cht=qr&chs=254x254&chld=Q%7C0&chl=https%3A%2F%2Fdev-th.fwdxt.com%2Fabout-us"
      )
        .then(function (data) {
          return data.blob();
        })
        .then(function (img) {
          var dd = URL.createObjectURL(img);
          var outputImg = document.createElement("img");
          outputImg.src = dd;
          qrContainer.appendChild(outputImg);
          getQRCodeButton.disabled = true;
          qrcode.innerHTML = "Scan this QR code in WeChat app to share";
        });
    });

    closeButton.addEventListener("click", (event) => {
      shareDialog.classList.remove("is-open");
    });
  }, []);

  return (
    <>
      <div className="App">
        <div class="share-dialog">
          <header>
            <h3 class="dialog-title">
              To Share it on WeChat, use browser share option
            </h3>
            <button class="close-button">
              <svg>
                <use href="#close"></use>
              </svg>
            </button>
          </header>
        </div>
        <h3 className="mobile-view">Mobile view </h3>
        <button class="share-button" type="button" title="Share this article">
          <svg>
            <use href="#share-icon"></use>
          </svg>
          <span>Share</span>
        </button>
        <svg class="hidden">
          <defs>
            <symbol
              id="share-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-share"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </symbol>
            <symbol
              id="close"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x-square"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </symbol>
          </defs>
        </svg>
      </div>
      <div className="qr">
        <button class="qr-code-button" type="button">
          Share on WeChat
        </button>
        <div id="qrcode">Qr code will come below</div>
      </div>
    </>
  );
}

export default App;
