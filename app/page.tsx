import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <h1 className="text-6xl">Estudio Contable Mugica</h1>
      <Image
        src="/banner.webp"
        alt="woman calculating taxes"
        width={1100}
        height={719}
        priority={true}
      />
    </main>
  );
}
