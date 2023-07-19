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
      <h1 className="flex flex-col min-h-screen w-full text-4xl font-bold text-center justify-between overflow-hidden .h1 p-12">
        {art.title}Gallery
      </h1>
  );
};

export default GalleryPage;
