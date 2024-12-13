'use client';

import './styles.css';

// 제목 컴포넌트
export function Heading({ title, subtitle, align = 'center' }) {
  return (
    <div className={`section-heading align-${align}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

// 카드 컴포넌트
export function Card({ title, description, icon, image, link }) {
  return (
    <div className="section-card">
      {icon && <div className="card-icon">{icon}</div>}
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link.href} className="card-link">
            {link.text} <span className="arrow">→</span>
          </a>
        )}
      </div>
    </div>
  );
}

// 미디어 컴포넌트
export function Media({ src, alt, type = 'image', ratio = '16/9' }) {
  return (
    <div className={`section-media ratio-${ratio}`}>
      {type === 'video' ? (
        <video src={src} controls />
      ) : (
        <img src={src} alt={alt} />
      )}
    </div>
  );
}

// 목록 컴포넌트
export function List({ items, type = 'default' }) {
  return (
    <ul className={`section-list type-${type}`}>
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item.icon && <span className="item-icon">{item.icon}</span>}
          <div className="item-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// 폼 컴포넌트
export function Form({ fields = [], submitText = '제출하기' }) {
  return (
    <form className="section-form">
      {fields.map((field, index) => (
        <div key={index} className="form-group">
          <label htmlFor={field.id}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              name={field.id}
              rows={5}
              required={field.required}
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit" className="form-submit">
        {submitText}
      </button>
    </form>
  );
}

// 통계 컴포넌트
export function Stats({ items }) {
  return (
    <div className="section-stats">
      {items.map((item, index) => (
        <div key={index} className="stat-item">
          <div className="stat-value">{item.value}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

// 아이콘 블록 컴포넌트
export function IconBlock({ icon, title, description }) {
  return (
    <div className="section-icon-block">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// 버튼 컴포넌트
export function Button({ text, href, variant = 'primary', size = 'medium' }) {
  return (
    <a href={href} className={`section-button ${variant} ${size}`}>
      {text}
    </a>
  );
}