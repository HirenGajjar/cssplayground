import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { FaCopy } from "react-icons/fa";

function HeaderText() {
  const [text, setText] = useState("Header text");
  const [headerSize, setHeaderSize] = useState("h1");
  const [fontWeight, setFontWeight] = useState(400);
  const [isItalic, setIsItalic] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [customFontSize, setCustomFontSize] = useState("");
  const [latestFontSize, setLatestFontSize] = useState("36px");
  const [letterSpacing, setLetterSpacing] = useState(0);

  const handleHeaderSizeChange = (e) => {
    const size = e.target.value;
    setHeaderSize(size);
    setLatestFontSize(
      {
        h1: "36px",
        h2: "30px",
        h3: "24px",
        h4: "20px",
        h5: "18px",
        h6: "16px",
      }[size]
    );
  };

  const handleCustomFontSizeChange = (e) => {
    const size = e.target.value;
    setCustomFontSize(size);
    setLatestFontSize(size);
  };

  const resetDefaults = () => {
    setText("Header text");
    setHeaderSize("h1");
    setFontWeight(400);
    setIsItalic(false);
    setIsUppercase(false);
    setTextColor("#000000");
    setBgColor("#ffffff");
    setCustomFontSize("");
    setLatestFontSize("36px");
    setLetterSpacing(0);
  };

  const headerStyles = {
    fontFamily: "Roboto",
    fontSize: latestFontSize,
    fontWeight: fontWeight,
    fontStyle: isItalic ? "italic" : "normal",
    textTransform: isUppercase ? "uppercase" : "none",
    color: textColor,
    backgroundColor: bgColor,
    letterSpacing: `${letterSpacing}px`,
  };

  const HeaderTag = headerSize;

  const generateCSS = () => {
    return `
      font-family: Roboto;
      font-size: ${headerStyles.fontSize};
      font-weight: ${fontWeight};
      font-style: ${isItalic ? "italic" : "normal"};
      text-transform: ${isUppercase ? "uppercase" : "none"};
      color: ${textColor};
      background-color: ${bgColor};
      letter-spacing: ${letterSpacing}px;
    `;
  };

  const generateTailwind = () => {
    return `
      font-roboto;
      text-${headerSize};
      font-${fontWeight};
      italic-${isItalic ? "italic" : "normal"};
      uppercase-${isUppercase ? "uppercase" : "none"};
      text-${textColor};
      bg-${bgColor};
      tracking-${letterSpacing}px;
    `;
  };

  const generateSASS = () => {
    return `
      font-family: Roboto;
      font-size: ${headerStyles.fontSize};
      font-weight: ${fontWeight};
      font-style: ${isItalic ? "italic" : "normal"};
      text-transform: ${isUppercase ? "uppercase" : "none"};
      color: ${textColor};
      background-color: ${bgColor};
      letter-spacing: ${letterSpacing}px;
    `;
  };

  const copyToClipboard = (type) => {
    let textToCopy = "";
    switch (type) {
      case "CSS":
        textToCopy = generateCSS();
        break;
      case "TailWind":
        textToCopy = generateTailwind();
        break;
      case "SASS":
        textToCopy = generateSASS();
        break;
      default:
        break;
    }
    navigator.clipboard.writeText(textToCopy);
    toast.success("Styles have been copied!");
  };

  return (
    <>
      <Helmet>
        <title>CSS Playground | Header Text</title>
      </Helmet>
      <div className="flex h-screen overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-center bg-white">
          <HeaderTag style={headerStyles}>{text}</HeaderTag>
        </div>
        <div className="w-72 p-4 bg-gray-100 border-l border-gray-300">
          <label className="block mb-4">
            Text:
            <input
              type="text"
              maxLength="20"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="block mt-2 w-full"
            />
          </label>
          <label className="block mb-4">
            Header Size:
            <select
              value={headerSize}
              onChange={handleHeaderSizeChange}
              className="block mt-2 w-full"
            >
              <option value="h1">H1 - 36px</option>
              <option value="h2">H2 - 30px</option>
              <option value="h3">H3 - 24px</option>
              <option value="h4">H4 - 20px</option>
              <option value="h5">H5 - 18px</option>
              <option value="h6">H6 - 16px</option>
            </select>
          </label>
          <label className="block mb-4">
            Custom Font Size (optional):
            <input
              type="text"
              value={customFontSize}
              onChange={handleCustomFontSizeChange}
              placeholder="e.g., 40px"
              className="block mt-2 w-full"
            />
          </label>
          <label className="block mb-4">
            Font Weight: {fontWeight}
            <input
              type="range"
              min="100"
              max="900"
              step="50"
              value={fontWeight}
              onChange={(e) => setFontWeight(e.target.value)}
              className="block mt-2 w-full"
            />
          </label>
          <label className="block mb-4">
            Letter Spacing: {letterSpacing}px
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(e.target.value)}
              className="block mt-2 w-full"
            />
          </label>
          <div className="mb-4">
            <button
              onClick={() => setIsItalic(!isItalic)}
              className={`block mt-2 w-full ${
                isItalic ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Italic
            </button>
          </div>
          <div className="mb-4">
            <button
              onClick={() => setIsUppercase(!isUppercase)}
              className={`block mt-2 w-full ${
                isUppercase ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Uppercase
            </button>
            <button
              onClick={() => setIsUppercase(false)}
              className={`block mt-2 w-full ${
                !isUppercase ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Lowercase
            </button>
          </div>
          <label className="block mb-4">
            Text Color:
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="block mt-2 w-full"
            />
          </label>
          <label className="block mb-4">
            Background Color:
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="block mt-2 w-full"
            />
          </label>
          <button
            onClick={resetDefaults}
            className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Reset to Default
          </button>
          <div className="fixed bottom-4 left-[50%] -translate-x-[50%]">
            <div className="flex gap-10 justify-around mt-5">
              <div
                className="w-36 h-24 flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => copyToClipboard("CSS")}
              >
                <FaCopy className="text-2xl mb-2" />
                <p>CSS</p>
              </div>
              <div
                className="w-36 h-24 flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => copyToClipboard("TailWind")}
              >
                <FaCopy className="text-2xl mb-2" />
                <p>TailWind</p>
              </div>
              <div
                className="w-36 h-24 flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => copyToClipboard("SASS")}
              >
                <FaCopy className="text-2xl mb-2" />
                <p>SASS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderText;

/*

take a text input max length is 20 characters

call free api for the fonts - may be google 

dropdown for fonts

header size - drop down (size from h1 to h6)

bold, italic - as a buttons

uppercase/lowercase - as a button

text color - color picker

bg color - color picker



*/
