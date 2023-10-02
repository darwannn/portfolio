import React from "react";

function Footer({ text }) {
  return (
    <footer>
      <div className="w-full bg-white py-4 font-semibold text-center">
        {text}
      </div>
    </footer>
  );
}

export default Footer;
