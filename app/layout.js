import './theme/colors/variables.css';
import './theme/spacing/variables.css';

export const metadata = {
  title: '회사 소개',
  description: '회사 소개 페이지입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
