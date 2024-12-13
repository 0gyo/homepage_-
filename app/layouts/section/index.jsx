'use client';

import './styles.css';

// 기본 레이아웃 (단일 컬럼)
function StandardLayout({ children }) {
  return (
    <div className="section-layout-standard">
      {children}
    </div>
  );
}
 
// 분할 레이아웃 (2단 분할)
function SplitLayout({ 
  children, 
  direction = 'horizontal', // horizontal, vertical
  ratio = '2:1' // 1:1, 2:1, 1:2
}) {
  return (
    <div className={`section-layout-split direction-${direction} ratio-${ratio}`}>
      {children}
    </div>
  );
}

// 그리드 레이아웃
function GridLayout({ 
  children, 
  columns = 3, 
  gap = 'medium' // small, medium, large
}) {
  return (
    <div className={`section-layout-grid cols-${columns} gap-${gap}`}>
      {children}
    </div>
  );
}

// 매스너리 레이아웃 (다양한 높이의 그리드)
function MasonryLayout({ 
  children, 
  columns = 3,
  gap = 'medium'
}) {
  return (
    <div className={`section-layout-masonry cols-${columns} gap-${gap}`}>
      {children}
    </div>
  );
}

// 오버랩 레이아웃 (요소들이 겹치는 구조)
function OverlapLayout({ 
  children,
  offset = 'medium' // small, medium, large
}) {
  return (
    <div className={`section-layout-overlap offset-${offset}`}>
      {children}
    </div>
  );
}

// 지그재그 레이아웃
function ZigzagLayout({ children }) {
  return (
    <div className="section-layout-zigzag">
      {children}
    </div>
  );
}

// 캐러셀 레이아웃
function CarouselLayout({ 
  children,
  slidesToShow = 3,
  gap = 'medium'
}) {
  return (
    <div className={`section-layout-carousel slides-${slidesToShow} gap-${gap}`}>
      {children}
    </div>
  );
}

// 타임라인 레이아웃
function TimelineLayout({ 
  children,
  align = 'center' // left, center, right
}) {
  return (
    <div className={`section-layout-timeline align-${align}`}>
      {children}
    </div>
  );
}

// 레이아웃 컴포넌트 매핑
const Layouts = {
  StandardLayout,
  SplitLayout,
  GridLayout,
  MasonryLayout,
  OverlapLayout,
  ZigzagLayout,
  CarouselLayout,
  TimelineLayout
};

// 메인 섹션 레이아웃 컴포넌트
export default function SectionLayout({ 
  id, 
  className = '', 
  theme = 'default',
  layout = 'standard',
  variant = 1,
  children,
  ...layoutProps // 레이아웃별 추가 props
}) {
  // 레이아웃 컴포넌트 선택
  const LayoutComponent = Layouts[`${layout.charAt(0).toUpperCase() + layout.slice(1)}Layout`] || Layouts.StandardLayout;

  return (
    <section 
      id={id} 
      className={`
        section 
        section-theme-${theme} 
        ${className}
      `}
    >
      <LayoutComponent {...layoutProps}>
        {children}
      </LayoutComponent>
    </section>
  );
} 