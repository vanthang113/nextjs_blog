'use client'
import { IcLogoHeader } from "@/public/icons/IcLogoHeader";
import React from "react";
import { Button } from "./Button";
import { useRouter, } from "next/navigation";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="mt-3 px-10 flex justify-between items-center absolute w-full">
      {/* /*đuòng dẫn quay lại trang chủ */}
      <button onClick={() => router.push("/")}>
      <IcLogoHeader width="100px" height="32px" display="flex" />
      </button>
      {/* đường dẫn đên form đăng kí dăng nhập*/}
      <div className="flex">
        <Button color="primary" width="110px" onClick={() => router.push("/auth")}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
