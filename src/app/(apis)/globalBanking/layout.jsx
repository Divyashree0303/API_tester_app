"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import "./styles.css";


export default function Layout({ children }) {

   

    return (
        
            <main>{children}</main>

    );
}
