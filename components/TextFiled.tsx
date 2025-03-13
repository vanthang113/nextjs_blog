import { ReactNode } from "react";

type Props ={
    color: 'accent'|'primary'
    width?: string;
    height?:string;
    value?: string;
    placeholder?: string;
    startIcon?:ReactNode;
    onChange?: (e: string) => void
}

const BG_COLOR:Record<Props['color'], string> = {
    "accent":"#F9F9FC",
    "primary": "#f5f5f5",
}

export const TextFiled = ({
    color,
    width = '100%',
    height = '40px',
    value,
    placeholder,
    startIcon,
    onChange,
}:Props) => {
    return(
        <div className="relative">
            <div className="absolute" style={{top: '8px', left:'12.5px'}}>{startIcon}</div>
            <input
            style={{
                background: BG_COLOR[color],
                width: width,
                height: height,
                borderRadius: '50px',
                paddingLeft: startIcon? '45px' : '20px'

            }}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value) }
            />
        </div>
    )
};