import React from 'react';
import '../../css/common/Header.css'; // CSSファイルをインポート

function Header() {
  return (
    <header className="header">
      <div className="title">
        <h3>ポートフォリオ</h3>
      </div>
      <nav className="link">
        <ul>
          <li><a href="home">ホーム</a></li>
          <li><a href="blog">ブログ</a></li>
          <li><a href="sns">SNS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;