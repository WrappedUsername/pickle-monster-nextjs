import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-between">
      <Image
        src="assets/icons/loader.svg"
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
