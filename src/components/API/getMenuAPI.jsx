import {React, useState} from 'react';

export async function getMenuAPI() {
    try {
        const res = await fetch("https://menus-api.vercel.app/");
        const data = await res.json();
        return data;

    } catch {
        console.error('trouble fetching data')
    }
  }