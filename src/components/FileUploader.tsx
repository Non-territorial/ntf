"use client";
import { useState } from "react";
import Image from "next/image";

export default function FileUploader() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const { url } = await res.json();
    setImageUrl(url); // Store the uploaded image URL
  }

  return (
    <div className="p-4 border rounded-lg">
      <input type="file" onChange={handleUpload} />
      
      {imageUrl && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <Image
            src={imageUrl}
            alt="Uploaded"
            width={800}
            height={600}
            className="w-full max-w-md mt-2"
          />
          <p className="text-sm text-gray-400 break-all">{imageUrl}</p>
        </div>
      )}
    </div>
  );
}
