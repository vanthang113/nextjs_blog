'use client'
import { IcSpinner } from "@/public/icons/IcSpinner";
import { ReactNode, use, useId, useState } from "react";

type Props ={
    color:'accent' | 'primary';
    width?: string;
    height?:string;
    loading?:boolean;
    children?:ReactNode;
    onClick?: () => void; 
}

const BG_HOVER: Record<Props['color'], string> = {
    "accent":"#244de3",
    "primary": "#FFFFFF",
}

const BG_COLOR:Record<Props['color'], string> = {
    "accent":"#2C59FF",
    "primary": "#f5f5f5",
}

const TEXT_COLOR: Record<Props['color'], string> = {
    "accent":"#FFFFFF",
    "primary": "#2C59FF",
}

export const Button = ({
    width = '100%',
    height = '42px',
    color = 'accent',
    loading,
    children,
    onClick,
}: Props) => {

    const [isHover, setIsHover] = useState(false);

    const handLeMouseEnter = () =>{
        setIsHover(true);
    } 

    const handLeMouseLeave = () =>{
        setIsHover(false);
    }
    
    
    
    return (
        <button
        style={{
            width: width,
            height: height,
            background: isHover ? BG_COLOR[color] :BG_HOVER[color],
            color:TEXT_COLOR[color],
            fontSize:'14px',
            fontWeight: 300,
            borderRadius: '50px',
            zIndex: 1,
        }}
        onMouseEnter={handLeMouseEnter}
        onMouseLeave={handLeMouseEnter}
        disabled={loading}
        onClick={() => onClick && onClick()}
        >
            {!loading
            ? children
            : <div className="flex items-center justity-center gap-x-0.5">
              <IcSpinner width="32px" height="32px"/>
              <div>{children}</div>
            </div>
            }
        </button>
    )
}