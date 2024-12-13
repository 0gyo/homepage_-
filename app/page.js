import section_1 from '../app/assets/section_1.png';
import section_2 from '../app/assets/section_2.png';
import section_3 from '../app/assets/section_3.png';
import section_4 from '../app/assets/section_4.png';
import section_5 from '../app/assets/section_5.png';
import section_6 from '../app/assets/section_6.png';
import section_7 from '../app/assets/section_7.png';

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
          src={section_2.src}
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
      <div className="image-container">
        <img
          src={section_7.src}
          alt="Homepage Section 7"
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