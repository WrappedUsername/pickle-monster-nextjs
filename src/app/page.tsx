import Image from "next/image";

// localhost:3000/

export default function Home() {
  return (
    <div className='flex flex-col w-full h-screen text-4xl font-bold items-center justify-between pt-64 md:pt-12'>
      <video autoPlay muted loop className='.video flex object-cover'>
        <source src='/vbg.mp4' type='video/mp4' />
  </video>
    </div>
  );
}
