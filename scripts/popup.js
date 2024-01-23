function sendCatifyMsg() {
  // TODO: Write a function to send a message to the active tab to 'catify' it
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Finds tabs that are active in the current window
    chrome.tabs.sendMessage(tabs[0].id, { action: 'catify' }); // Sends a message (object) to the first tab (tabs[0])
  });
}

// TODO: Add an event listener to trigger the function above when clicking the 'catify' button
const catifyBtn = document.querySelector("#catify")
catifyBtn.addEventListener('click', (event) => {
  sendCatifyMsg()
})
