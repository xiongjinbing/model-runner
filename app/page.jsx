"use client";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("等待输入...");

  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'sans-serif', 
      textAlign: 'center',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh' 
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '10px', 
        display: 'inline-block',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#333' }}>🚀 AI 模型运行器已上线！</h1>
        <p style={{ color: '#666' }}>当前状态：{status}</p>
        <button 
          onClick={() => setStatus("运行正常！✅")}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          点击检查系统
        </button>
      </div>
    </div>
  );
}
