import Image from "next/image";

// localhost:3000/

export default function Home() {
  return (
    <main className='relative min-h-screen flex-col items-center justify-between'>
      <video autoPlay muted loop className='.video flex object-cover'>
        <source src='/vbg.mp4' type='video/mp4' />
      </video>
    </main>
  );
}
