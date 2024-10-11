import React from "react";

function Logo({ className }) {
  return (
    <div>
      <img
        src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
        alt=""
        className={`w-[50px] rounded-xl ${className} || "" `}
      />
    </div>
  );
}

export default Logo;
