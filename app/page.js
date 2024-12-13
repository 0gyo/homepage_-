import Image from 'next/image';
import section_1 from '../app/assets/section_1.svg';
import section_2 from '../app/assets/section_2.svg';
import section_3 from '../app/assets/section_3.svg';
import section_4 from '../app/assets/section_4.svg';
import section_5 from '../app/assets/section_5.svg';
import section_6 from '../app/assets/section_6.svg';

export default function Home() {
  return (
    <main style={{ margin: 0, padding: '0 0 20px 0', width: '100%' }}>
      <div className="image-container">
        <Image
          src={section_1}
          alt="Homepage Section 1"
          priority
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0,
            maxWidth: '100vw'
          }}
          sizes="100vw"
        />
      </div>
      <div className="image-container">
        <Image
          src={section_2}
          alt="Homepage Section 2"
          priority
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0,
            maxWidth: '100vw'
          }}
          sizes="100vw"
        />
      </div>
      <div className="image-container">
        <Image
          src={section_3}
          alt="Homepage Section 3"
          priority
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0,
            maxWidth: '100vw'
          }}
          sizes="100vw"
        />
      </div>
      <div className="image-container">
        <Image
          src={section_4}
          alt="Homepage Section 4"
          priority
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0,
            maxWidth: '100vw'
          }}
          sizes="100vw"
        />
      </div>
      <div className="image-container">
        <Image
          src={section_5}
          alt="Homepage Section 5"
          priority
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0,
            maxWidth: '100vw'
          }}
          sizes="100vw"
        />
      </div>
      <div className="image-container">
        <Image
          src={section_6}
          alt="Homepage Section 6"
          priority
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0,
            maxWidth: '100vw'
          }}
          sizes="100vw"
        />
      </div>
    </main>
  );
}