import Image from 'next/image';
import homepage from '../public/homepage.svg';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Image
        src={homepage}
        alt="Homepage"
        className="w-full h-full"
        priority
      />
    </main>
  );
}