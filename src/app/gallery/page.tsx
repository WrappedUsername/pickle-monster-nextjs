"use client";
import React, { useEffect, useState } from "react";

const GalleryPage: React.FC = () => {
    const [art, setArt] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const getArt = async () => {
            try {
                const res = await fetch(`/gallery/${art}`);
                const data = await res.json();
                setArt(data);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }
        getArt();
    }, 
    [art]);
   
  return (
    <div className="relative flex-col min-h-screen items-center justify-between .div">
      <h1 className="flex w-full text-4xl font-bold float-left .h1">
        {art.title}Gallery
      </h1>
    </div>
  );
};

export default GalleryPage;
