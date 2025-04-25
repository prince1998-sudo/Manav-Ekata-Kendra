import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white";
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = "md", 
  color = "primary" 
}) => {
  // Size mapping
  const sizeMap = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10"
  };
  
  // Color mapping
  const colorMap = {
    primary: "text-primary",
    white: "text-white"
  };
  
  return (
    <div className={cn("flex items-center", className)}>
      <svg 
        className={cn(sizeMap[size], colorMap[color])} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M4 10c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z"></path>
        <path d="M12 4v6"></path>
        <path d="M8 9v1"></path>
        <path d="M16 9v1"></path>
        <path d="M9 16s1 1 3 1 3-1 3-1"></path>
      </svg>
      <span className={cn(
        "font-bold", 
        color === "primary" ? "text-primary-600" : "text-white",
        size === "sm" ? "ml-1.5 text-lg" : "ml-2 text-xl"
      )}>
        HelpingHands
      </span>
    </div>
  );
};

export default Logo;
