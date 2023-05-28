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
    <div>
      <h1>{art.title}Test</h1>
    </div>
  );
};

export default GalleryPage;
