"use client"

import React, { useState, useEffect } from 'react';
import "./styles.css";


export default function Layout({ children }) {


    return (
        <div >

            <main >{children}</main>
        </div>

    );
}



