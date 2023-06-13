import Image from "next/image";

// localhost:3000/

export default function Home() {
  return (
    <main className='relative min-h-screen flex-col items-center justify-between'>
      <h1 className='absolute h-24 w-full flex-row text-normal font-normal text-white text-center bottom-0 animate-bounce .h1'>Please, scroll down</h1>
      <video autoPlay muted loop className='flex object-cover .video'>
        <source src='/vbg.mp4' type='video/mp4' />
      </video>
      <div className='flex h-screen w-flex-fit text-4xl font-bold'>
        Home
        </div>
    </main>
  );
}
