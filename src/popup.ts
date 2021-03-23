import "popup.scss";
import "button.scss";

// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    if (changeColor) {
        changeColor.style.backgroundColor = color;
    }
});

// When the button is clicked, inject setPageBackgroundColor into current page
if (changeColor) {
    changeColor.addEventListener("click", async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        if (tab.id) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: setPageBackgroundColor,
            });
        }
    });
}

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}

document.body.className = "black-cat";
