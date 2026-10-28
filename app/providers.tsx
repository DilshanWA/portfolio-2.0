"use client"
import React from "react";
import { ThemeProvider } from "next-themes";

export default function Provide({ 
    children 
}: { 
    children: React.ReactNode 
}) {
  return (
    <ThemeProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem
    >
      {children}
    </ThemeProvider>
  );
}