import section_1 from '../public/images/section_1.svg';
import section_2 from '../public/images/section_2.svg';
import section_3 from '../public/images/section_3.svg';
import section_4 from '../public/images/section_4.svg';
import section_5 from '../public/images/section_5.svg';
import section_6 from '../public/images/section_6.svg';

export default function Home() {
  return (
    <main style={{ margin: 0, padding: '0 0 20px 0', width: '100%' }}>
      <div className="image-container">
        <img
          src="/images/section_1.svg"
          alt="Homepage Section 1"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0
          }}
        />
      </div>
      <div className="image-container">
        <img
          src="/images/section_2.svg"
          alt="Homepage Section 2"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0
          }}
        />
      </div>
      <div className="image-container">
        <img
          src="/images/section_3.svg"
          alt="Homepage Section 3"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0
          }}
        />
      </div>
      <div className="image-container">
        <img
          src="/images/section_4.svg"
          alt="Homepage Section 4"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0
          }}
        />
      </div>
      <div className="image-container">
        <img
          src="/images/section_5.svg"
          alt="Homepage Section 5"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0
          }}
        />
      </div>
      <div className="image-container">
        <img
          src="/images/section_6.svg"
          alt="Homepage Section 6"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0
          }}
        />
      </div>
    </main>
  );
}