import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-6xl mb-5">Estudio Contable Mugica</h1>
      <Image
        src="/banner.webp"
        alt="woman calculating taxes"
        width={880}
        height={575}
        priority={true}
      />
    </main>
  );
}
