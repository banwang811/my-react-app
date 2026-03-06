import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

// 1. 定义三个简单的“页面组件”
const Home = () => <h2>这是首页 🏠</h2>;
const About = () => <h2>关于我们：一个正在变复杂的 React 应用 🚀</h2>;

const QuotePage = () => {
  const [quote, setQuote] = useState("点击获取...");
  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data.content);
  };
  return (
    <div>
      <h2>随机名人名言页 💡</h2>
      <p>{quote}</p>
      <button onClick={fetchQuote}>换一句</button>
    </div>
  );
};

// 2. 主程序：配置路由
function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        {/* 使用 Link 而不是 <a>，这样页面才不会刷新 */}
        <Link to="/" style={{ marginRight: '10px' }}>首页</Link>
        <Link to="/quotes" style={{ marginRight: '10px' }}>名言</Link>
        <Link to="/about">关于</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        {/* 根据当前 URL 地址，决定渲染哪个组件 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<QuotePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;