import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { FaCopy } from "react-icons/fa";

function Border() {
  const [borderType, setBorderType] = useState("solid");
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderRadiusTopLeft, setBorderRadiusTopLeft] = useState(0);
  const [borderRadiusTopRight, setBorderRadiusTopRight] = useState(0);
  const [borderRadiusBottomLeft, setBorderRadiusBottomLeft] = useState(0);
  const [borderRadiusBottomRight, setBorderRadiusBottomRight] = useState(0);

  const resetDefaults = () => {
    setBorderType("solid");
    setBorderColor("#000000");
    setBorderWidth(1);
    setBorderRadius(0);
    setBorderRadiusTopLeft(0);
    setBorderRadiusTopRight(0);
    setBorderRadiusBottomLeft(0);
    setBorderRadiusBottomRight(0);
  };

  const generateCSS = () => {
    return `
      border: ${borderWidth}px ${borderType} ${borderColor};
      border-radius: ${borderRadius}%;
      border-top-left-radius: ${borderRadiusTopLeft}%;
      border-top-right-radius: ${borderRadiusTopRight}%;
      border-bottom-left-radius: ${borderRadiusBottomLeft}%;
      border-bottom-right-radius: ${borderRadiusBottomRight}%;
    `;
  };

  const generateTailwind = () => {
    return `
      border-${borderWidth};
      border-${borderType};
      border-${borderColor};
      rounded-${borderRadius}%;
      rounded-tl-${borderRadiusTopLeft}%;
      rounded-tr-${borderRadiusTopRight}%;
      rounded-bl-${borderRadiusBottomLeft}%;
      rounded-br-${borderRadiusBottomRight}%;
    `;
  };

  const generateSASS = () => {
    return `
      border: ${borderWidth}px ${borderType} ${borderColor};
      border-radius: ${borderRadius}%;
      border-top-left-radius: ${borderRadiusTopLeft}%;
      border-top-right-radius: ${borderRadiusTopRight}%;
      border-bottom-left-radius: ${borderRadiusBottomLeft}%;
      border-bottom-right-radius: ${borderRadiusBottomRight}%;
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
      <div className="flex h-screen overflow-hidden">
        <Helmet>
          <title>CSS Playground | Border</title>
        </Helmet>
        <div className="flex-1 flex justify-center items-center bg-white">
          <div
            className="w-[500px] h-[500px] flex justify-center items-center bg-transparent border-white border-2"
            style={{
              border: `${borderWidth}px ${borderType} ${borderColor}`,
              borderRadius: `${borderRadius}%`,
              borderTopLeftRadius: `${borderRadiusTopLeft}%`,
              borderTopRightRadius: `${borderRadiusTopRight}%`,
              borderBottomLeftRadius: `${borderRadiusBottomLeft}%`,
              borderBottomRightRadius: `${borderRadiusBottomRight}%`,
            }}
          >
            <span style={{ color: borderColor, zIndex: 99, fontSize: "2rem" }}>
              Border Effect
            </span>
          </div>
        </div>

        <div className="w-72 p-4 bg-gray-100 border-l border-gray-300">
          <label className="block mb-4">
            Border Type:
            <select
              value={borderType}
              onChange={(e) => setBorderType(e.target.value)}
              className="block mt-2"
            >
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
              <option value="double">Double</option>
              <option value="groove">Groove</option>
              <option value="ridge">Ridge</option>
              <option value="inset">Inset</option>
              <option value="outset">Outset</option>
            </select>
          </label>
          <label className="block mb-4">
            Border Color: {borderColor}
            <input
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Border Width: {borderWidth}px
            <input
              type="range"
              min="1"
              max="10"
              value={borderWidth}
              onChange={(e) => setBorderWidth(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Border Radius: {borderRadius}%
            <input
              type="range"
              min="0"
              max="100"
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Border Radius Top Left: {borderRadiusTopLeft}%
            <input
              type="range"
              min="0"
              max="100"
              value={borderRadiusTopLeft}
              onChange={(e) => setBorderRadiusTopLeft(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Border Radius Top Right: {borderRadiusTopRight}%
            <input
              type="range"
              min="0"
              max="100"
              value={borderRadiusTopRight}
              onChange={(e) => setBorderRadiusTopRight(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Border Radius Bottom Left: {borderRadiusBottomLeft}%
            <input
              type="range"
              min="0"
              max="100"
              value={borderRadiusBottomLeft}
              onChange={(e) => setBorderRadiusBottomLeft(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Border Radius Bottom Right: {borderRadiusBottomRight}%
            <input
              type="range"
              min="0"
              max="100"
              value={borderRadiusBottomRight}
              onChange={(e) => setBorderRadiusBottomRight(e.target.value)}
              className="block mt-2"
            />
          </label>
          <button
            onClick={resetDefaults}
            className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Reset to Default
          </button>
        </div>
      </div>
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
    </>
  );
}

export default Border;

/*


border type - dropdown menu
border color - color 
border width - range 1px to 10px
border radius for all in one -range 
border radius for right-bottom -range 
border radius for left-bottom -range 
border radius for top-right -range 
border radius for left-top -range 


*/
