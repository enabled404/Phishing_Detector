// background.js
// Written by Saad Khalid (enabled404)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'checkURL') {
      const apiKey = '7ad2fa019c6d22218192aef13d4eba36eeb34d7f64dd4c541506defc49770d3b'; // Replace with your VirusTotal API key
      const urlToCheck = message.url;
      const apiURL = `https://www.virustotal.com/vtapi/v2/url/report?apikey=${apiKey}&resource=${encodeURIComponent(urlToCheck)}`;

      fetch(apiURL, {
          method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
          sendResponse({ data });
      })
      .catch(error => {
          console.error('Error fetching data from VirusTotal:', error);
          sendResponse({ error });
      });

      // To indicate that we will send a response asynchronously
      return true;
  }
});

