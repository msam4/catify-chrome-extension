function sendCatifyMsg() {
  // TODO: Write a function to send a message to the active tab to activate the extensio
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Finds tabs that are active in the current window
    chrome.tabs.sendMessage(tabs[0].id, { action: 'catify' }); // Sends a message (object) to the first tab (tabs[0])
  });
}

// Add an event listener to trigger the function above when clicking the button
const catifyBtn = document.querySelector("#catify")
catifyBtn.addEventListener('click', (event) => {
  sendCatifyMsg()
})
