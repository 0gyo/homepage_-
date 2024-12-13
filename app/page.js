import section_1 from '../app/assets/section_1.svg';
import section_2 from '../app/assets/section_2.svg';
import section_3 from '../app/assets/section_3.svg';
import section_4 from '../app/assets/section_4.svg';
import section_5 from '../app/assets/section_5.svg';
import section_6 from '../app/assets/section_6.svg';
import section_test from '../app/assets/section_test.svg';

export default function Home() {
  return (
    <main style={{ margin: 0, padding: '0 0 20px 0', width: '100%' }}>
      <div className="image-container">
        <img
          src={section_1.src}
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
          src={section_test.src}
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
          src={section_3.src}
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
          src={section_4.src}
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
          src={section_5.src}
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
          src={section_6.src}
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