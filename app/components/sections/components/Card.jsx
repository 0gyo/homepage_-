import React from 'react';
import './styles.css';

export default function Card({ 
  icon, 
  image, 
  title, 
  description, 
  link,
  className = ''
}) {
  return (
    <div className={`section-card ${className}`}>
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
            {link.text}
            <span className="arrow">→</span>
          </a>
        )}
      </div>
    </div>
  );
} 