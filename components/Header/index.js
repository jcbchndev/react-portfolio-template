import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";
// Local Data
import data from "../../yourData";
import myresume from './files/resume.pdf';

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {

  const router = useRouter();
  return (
    <div className="mt-10 flex flex-row items-center justify-between sticky bg-white top-0 z-10">
      <h1
        onClick={() => router.push("/")}
        className="font-medium cursor-pointer mob:p-2 laptop:p-0">
        {data.name}.
      </h1>
      {
        <div className="flex">
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={() => window.open(myresume)}>Resume</Button> 
          <Button onClick={() => window.open("mailto:jcbchndev@proton.me")}>
            Contact
          </Button>
        </div>}
    </div>
  );
};

export default Header;
