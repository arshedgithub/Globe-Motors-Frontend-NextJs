'use client'

import { useEffect, useState } from "react";
import SideNavLayout from "./SideNav";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { jwtDecode } from "jwt-decode"; 'jwt-decode';
import { AppBar } from "@mui/material";

export default function Navigation({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                console.log(decodedToken)
                setIsAdmin(decodedToken.isAdmin);
            } catch (error) {
                console.error('Invalid token or decoding failed', error);
            }
        }
    }, []);

    return (
        <>
            {isAdmin ? <SideNavLayout children={children} /> : (<body className={inter.className}><AppBar />{children}</body>)}
        </>
    );

}