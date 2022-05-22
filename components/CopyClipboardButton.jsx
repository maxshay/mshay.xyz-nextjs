import { useState, useRef, useEffect } from "react";

const CopyClipboardButton = () => {
  const [copied, setCopied] = useState(false);
  const ref = useRef();

  const handleCopy = () => {
    console.log(navigator.clipboard);

    var copyText = document.getElementById("myInput");
    // let copyText = document.querySelector("#input");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    const success = navigator.clipboard.writeText(copyText.value);
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText("<empty clipboard>").then(
        function () {
          /* clipboard successfully set */
        },
        function () {
          /* clipboard write failed */
        }
      );
      if (!success) {
        alert("waa waah");
      } else {
        setCopied(true);
      }
    }
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

  return (
    <button
      ref={ref}
      onClick={handleCopy}
      className="projectsLink w-36 capitalize font-semibold inline-block px-3 py-1.5 border rounded bg-cyan-500 border-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-white"
    >
      <input
        hidden
        type="text"
        readOnly
        value="maksimshaynyuk@gmail.com"
        id="myInput"
      />
      {copied === true ? (
        <>Copied Email!</>
      ) : (
        <>
          Contact Me <span className="arrowHover">📬</span>
        </>
      )}
    </button>
  );
};

export default CopyClipboardButton;
