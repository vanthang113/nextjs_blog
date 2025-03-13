import { IcLogoHeader } from "@/public/icons/IcLogoHeader";
import React from "react";
import { Button } from "./Button";

export const Header: React.FC = () => {
  return (
    <div className="mt-3 px-10 flex justify-between items-center absolute w-full">
        <IcLogoHeader width="100px" height="32px" display="flex"/>
        <div className="flex">
            <Button color="primary" width="110px">Sign In</Button>
            {/* <Button color="primary" width="110px">Sign In</Button> */}
        </div>
    </div>
  );
};

export default Header; 
