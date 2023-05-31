import Image from "next/image";

// localhost:3000/

export default function Home() {
  return (
    <main className="relative flex-col min-h-screen items-center justify-between">
      <h1 className="flex h-24 bg-gradient-to-r from-green-400 to-purple-600 w-full text-4xl font-bold float-left .h1">Home</h1>
      <video autoPlay muted loop className="flex object-cover .video">
        <source src="/vbg.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
