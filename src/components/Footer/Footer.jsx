import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundImage: "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
        }}
        className="pt-[10px]"
      >
        <div className="outfit text-[#EEE5FFBD] py-[10px] text-center text-[14px]">
          Motion Art Effect Clone Created By{" "}
          <a
            className="underline"
            href="https://www.github.com/AmmarTheDeveloper"
            target="_blank"
          >
            AmmarTheDeveloper
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
