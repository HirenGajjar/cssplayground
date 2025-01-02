import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { FaCopy } from "react-icons/fa";

function Glassmorphism() {
  const [color, setColor] = useState("transparent");
  const [bgColor, setBgColor] = useState("#f1f1f1");
  const [image, setImage] = useState(null);
  const [blur, setBlur] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [saturation, setSaturation] = useState(100);
  const [textColor, setTextColor] = useState("#000000");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    } else {
      setImage(null);
    }
  };

  const resetDefaults = () => {
    setColor("#ffffff");
    setBgColor("#f1f1f1");
    setImage(null);
    setBlur(0);
    setOpacity(1);
    setSaturation(100);
    setTextColor("#000000");
  };

  const generateCSS = () => {
    return `
      opacity: ${opacity};
      backdrop-filter: blur(${blur}px);
      filter: saturate(${saturation}%);
      background-color: ${bgColor};
      color: ${textColor};
    `;
  };

  const generateTailwind = () => {
    return `
      opacity-${opacity * 100};
      backdrop-blur-${blur};
      saturate-${saturation};
      bg-[${bgColor}];
      text-[${textColor}];
    `;
  };

  const generateSASS = () => {
    return `
      opacity: ${opacity};
      backdrop-filter: blur(${blur}px);
      filter: saturate(${saturation}%);
      background-color: ${bgColor};
      color: ${textColor};
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
          <title>CSS Playground | Glassmorphism</title>
        </Helmet>
        <div className="flex-1 flex justify-center items-center bg-white">
          <div
            className="w-[1000px] h-[600px] flex justify-center items-center border border-black"
            style={{
              backgroundColor: bgColor,
              backgroundImage: image ? `url(${image})` : "none",
              backdropFilter: `blur(${blur}px)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: opacity,
              filter: `saturate(${saturation}%)`,
            }}
          >
            <div
              className="w-[800px] h-[400px] flex justify-center items-center bg-transparent border-white border-2"
              style={{
                backgroundColor: color,
                backdropFilter: `blur(${blur}px)`,
                opacity: opacity,
                filter: `saturate(${saturation}%)`,
              }}
            >
              <span style={{ color: textColor, zIndex: 99, fontSize: "2rem" }}>
                Glassmorphism Effect
              </span>
            </div>
          </div>
        </div>
        <div className="w-72 p-4 bg-gray-100 border-l border-gray-300">
          <label className="block mb-4">
            Color:
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            {image ? (
              <>
                <img src={image} alt="Selected" className="max-w-full mb-2" />
                <button
                  onClick={() => setImage(null)}
                  className="block mt-2 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove Image
                </button>
              </>
            ) : (
              <>
                Background Color:
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="block mt-2"
                />
              </>
            )}
          </label>
          <label className="block mb-4">
            Add an Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Backdrop Filter Blur:
            <input
              type="range"
              min="0"
              max="10"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Opacity:
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={opacity}
              onChange={(e) => setOpacity(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Saturation:
            <input
              type="range"
              min="0"
              max="100"
              value={saturation}
              onChange={(e) => setSaturation(e.target.value)}
              className="block mt-2"
            />
          </label>
          <label className="block mb-4">
            Text Color:
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
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

export default Glassmorphism;

/*
first add right side - side bar that have following inputs
the side bar should be modern in design 

color - for color
add an image 
bgColor - for background color
if user had added an image then show the image and remove the bgColor input otherwise show bgColor input

backdrop-filter blur - range input - 0 to 10px
opacity - range input - 0 to 1
saturation - range input - 0 to 100


for each input make a button to reset as default values
for image if user has uploaded image then make a button to remove the image 


secondly - 

in the remainng area of the screen (so main screen is white - the area for image is by default is white but have a black border and third one is the actually output from inputs)
out of the all area - in the center make a div that shows the image if user uploads one other wise just a simple div - size 1000px by 800px
inside that div make another div (the inner div is small - size 800px by 700px) 

now every time user changes the any of the input values the inner div should change its style according to the inputs and creats the beautiful glassmorphism effect

also add the text "Glsasmorphism effect" in the center - 

on the side bar add the color input to change the color of the text


make sure entire page does not have any scroll bars


*/

/*
now the final change is following

in the bottom area of the page i want three modern design styled cards that each says following
1. CSS
2. TailWind
3. SASS


and each should have the modern copy code icon and when user clicks on the any other card it should copy the text to the clipboard and show a react-hot-toast message that text has been copied

make sure it copies the only styles and right one 

*/
