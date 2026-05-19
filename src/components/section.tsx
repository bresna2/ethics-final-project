import React from "react";
import { Typography } from "@mui/material";

const TextSection = ({ 
    header, 
    children,
    underline, 
    removePadding,
}:{
    header:string,
    children:React.ReactNode,
    underline?: boolean,
    removePadding?: boolean,
}) => {
  return (
    <>
        <Typography variant='h5' sx={{pt:removePadding? 0:5,fontWeight: 700}} >
            {underline
                ?<u>{header}</u>    
                : header
            }
        </Typography>
        {children}
    </>
  );
};

export default TextSection;