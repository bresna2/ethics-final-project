import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Page = ({ 
    title, 
    children 
}:{
    title:string,
    children:React.ReactNode
}) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", textAlign:'left', pt:2,px:10 }}>
      
      {/* Header */}
      <Box
        sx={{
          padding: "24px",
        //   borderBottom: "1px solid #e0e0e0",
        //   backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Archivo Black", sans-serif',
            textShadow: "2px 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Page Content */}
      <Container sx={{ flex: 1, paddingY: 4 }}>
        {children}
      </Container>

    </Box>
  );
};

export default Page;