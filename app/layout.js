export const metadata = {
  title: '뉴런소프트',
  description: '회사 소개 페이지입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" style={{ margin: 0, padding: 0, width: '100%' }}>
      <body style={{ margin: 0, padding: 0, width: '100%' }}>
        {children}
      </body>
    </html>
  );
}
