# Phishing Detector Chrome Extension

Phishing Detector is a simple Chrome Extension that allows users to check URLs for phishing threats using VirusTotal's API. This extension helps users identify malicious URLs, ensuring safer browsing and protecting against phishing attacks.

## Features

- **Real-time Phishing Detection**: Quickly scans URLs using the VirusTotal API to detect phishing and other malicious activity.
- **User-Friendly Interface**: Modern, clean, and intuitive design for easy interaction.
- **VirusTotal Integration**: Get detailed results about a URL with the number of detections.
- **Fully Customizable**: Replace with your own VirusTotal API key and modify as needed.

## Installation

Follow these steps to install the Phishing Detector Chrome Extension:

1. Clone or download this repository to your local machine.

    ```bash
    git clone https://github.com/enabled404/Phishing_Detector.git
    ```

2. Open Chrome and go to the Extensions page (`chrome://extensions/`).

3. Enable **Developer mode** by toggling the switch in the top-right corner.

4. Click the "Load unpacked" button and select the folder where you downloaded the repository.

5. The extension will now be loaded and ready for use!

## Usage

1. Click the extension icon in your Chrome toolbar.
2. Enter the URL you want to check.
3. Click the **Check URL** button.
4. The results from VirusTotal will display below, showing whether the URL is safe or not.

## Technologies Used

- **JavaScript**: For core functionality and API interactions.
- **HTML/CSS**: For the user interface.
- **VirusTotal API**: For checking URLs against a comprehensive database of known malicious sites.

## Files and Directory Structure

```bash
phishing_detector_extension/
│
├── manifest.json             # Chrome extension manifest file
├── background.js             # Main JavaScript logic for API interactions
├── popup.html                # HTML for the extension's popup window
├── popup.js                  # JavaScript for handling the popup interaction
├── style.css                 # Styling for the popup
└── icons/                    # Folder containing the icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```
## Configuration

To use this extension, you must configure your own VirusTotal API key.

1. Sign up for a free API key from [VirusTotal](https://www.virustotal.com/gui/join-us).

2. After obtaining your API key, open the `background.js` file and replace `your_api_key_here` with your actual API key:

```javascript
const API_KEY = 'your_api_key_here';
```
---

## Installation Instructions

1. Clone the repository to your local machine using:
   ```bash
   git clone https://github.com/enabled404/Phishing_Detector.git
## Load the unpacked extension into Chrome:

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer Mode** by toggling the switch in the top right.
3. Click **Load unpacked** and select the directory where the extension files are located.
4. Replace the placeholder API key with your own in `background.js` file:

   ```javascript
   const API_KEY = 'your_api_key_here';
   ```
## Contributing
- **Contributions are welcome! If you have any improvements or suggestions, feel free to submit a pull request or open an issue**.

Author
- **Saad Khalid (enabled404)**.
 
- **Cybersecurity Enthusiast and Developer**.

Feel free to reach out for collaborations or suggestions.

## Contact
- **Email: saadkhalid@example.com**.
- **GitHub: enabled404**

## Disclaimer
This extension uses a third-party API (VirusTotal) to check URLs for phishing threats. Use at your own risk. Make sure to comply with VirusTotal’s API usage policy.
