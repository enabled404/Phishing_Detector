// popup.js
// Written by Saad Khalid (enabled404)

document.getElementById('checkUrlButton').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;

  chrome.runtime.sendMessage({
      type: 'checkURL',
      url: url
  }, (response) => {
      if (response.error) {
          console.error('Error:', response.error);
          document.getElementById('result').textContent = 'Error checking URL.';
      } else {
          const result = response.data;
          document.getElementById('result').textContent = `URL Status: ${result.positives} positive detections out of ${result.total} scans.`;
      }
  });
});
