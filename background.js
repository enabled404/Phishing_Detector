// background.js
// Written by Saad Khalid (enabled404)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'checkURL') {
      const apiKey = 'your_api_key_here'; // Replace with your VirusTotal API key
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

