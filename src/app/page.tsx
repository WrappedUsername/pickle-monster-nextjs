// localhost:3000/

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-between pt-64 text-4xl font-bold md:pt-12'>
      <video autoPlay muted loop className='.video flex object-cover'>
        <source src='/vbg.mp4' type='video/mp4' />
      </video>
      <video autoPlay muted loop className='.video flex object-cover'>
        <source src='/intro.mp4' type='video/mp4' />
      </video>
    </div>
  );
}
