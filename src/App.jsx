
import React, { useState,useEffect } from 'react';
import { Shield, Zap, Wrench, ChevronRight, Clock, Code, Copy, Trash2, CheckCircle2 , Lock,  Gift, Star, Users, Database, Activity, ArrowLeft } from 'lucide-react';

// --- 工具组件：JSON Parser ---
const JsonParser = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');

    const handleParse = () => {
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed, null, 2));
            setError('');
        } catch (e) {
            setError('Invalid JSON format');
            setOutput('');
        }
    };

    return (
        <div className="space-y-4">
      <textarea
          className="w-full h-40 bg-black border border-white/10 rounded-xl p-4 font-mono text-sm focus:border-white/30 outline-none transition"
          placeholder="粘贴 JSON 字符串..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
      />
            <div className="flex gap-2">
                <button onClick={handleParse} className="px-6 py-2 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-zinc-200">Parse & Format</button>
                <button onClick={() => {setInput(''); setOutput(''); setError('');}} className="p-2 border border-white/10 rounded-full hover:bg-white/5"><Trash2 size={16}/></button>
            </div>
            {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
            {output && (
                <pre className="w-full h-64 bg-zinc-900/50 border border-white/5 rounded-xl p-4 font-mono text-xs overflow-auto text-green-400">
          {output}
        </pre>
            )}
        </div>
    );
};

// --- 工具组件：时间戳转换 ---
const TimestampConverter = () => {
    const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000).toString());
    const [result, setResult] = useState('');

    const convertToDate = () => {
        const date = new Date(parseInt(timestamp) * (timestamp.length === 13 ? 1 : 1000));
        setResult(date.toLocaleString());
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Unix Timestamp (Seconds/ms)</label>
                <input
                    type="text"
                    className="bg-black border border-white/10 rounded-xl p-4 font-mono focus:border-white/30 outline-none"
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                />
            </div>
            <button onClick={convertToDate} className="w-full py-4 bg-zinc-800 text-white rounded-xl font-bold text-xs uppercase tracking-[0.3em] hover:bg-zinc-700 transition">Convert to Local Time</button>
            {result && (
                <div className="p-4 bg-white/5 border border-dashed border-white/20 rounded-xl text-center">
                    <p className="text-zinc-500 text-xs uppercase mb-1">Resulting Date</p>
                    <p className="text-xl font-black font-mono">{result}</p>
                </div>
            )}
        </div>
    );
};


// 通用：深色质感卡片
const PremiumCard = ({ children, className = "", title }) => (
    <div className={`bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md hover:border-white/10 transition-all ${className}`}>
        {title && <h3 className="text-xs font-black italic tracking-[0.2em] text-zinc-500 mb-8 uppercase flex items-center gap-2">
            <div className="w-1 h-1 bg-zinc-500 rounded-full" /> {title}
        </h3>}
        {children}
    </div>
);

export default function AlphaXProDashboard() {

    const [currentPage, setCurrentPage] = useState('home');

    // 自动滚回顶部
    useEffect(() => { window.scrollTo(0, 0); }, [currentPage]);

    if (currentPage === 'tools') {
        return (
            <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
                <nav className="border-b border-white/5 sticky top-0 bg-black/80 backdrop-blur-xl z-50">
                    <div className="max-w-[1440px] mx-auto flex justify-between items-center py-6 px-10">
                        <div className="text-2xl font-black italic tracking-tighter cursor-pointer" onClick={() => setCurrentPage('home')}>AlphaX</div>
                        <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition">
                            <ArrowLeft size={14} /> Back to Exchange
                        </button>
                    </div>
                </nav>

                <main className="max-w-[1200px] mx-auto px-10 py-20">
                    <div className="mb-16">
                        <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-4 leading-none">Developer <br /><span className="text-zinc-700">Toolbox</span></h2>
                        <div className="w-20 h-1 bg-white" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <section className="bg-zinc-900/40 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-md">
                            <div className="flex items-center gap-4 mb-8">
                                <Code className="text-zinc-600" size={28} />
                                <h3 className="text-sm font-black uppercase tracking-[0.2em]">JSON Formatter</h3>
                            </div>
                            <JsonParser />
                        </section>

                        <section className="bg-zinc-900/40 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-md">
                            <div className="flex items-center gap-4 mb-8">
                                <Clock className="text-zinc-600" size={28} />
                                <h3 className="text-sm font-black uppercase tracking-[0.2em]">Timestamp Converter</h3>
                            </div>
                            <TimestampConverter />
                        </section>
                    </div>
                </main>
            </div>
        );
    }
    return (
        <div className="w-full min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-white selection:text-black pb-20">

            {/* 1. 导航栏 - 居中锁定 */}
            <nav className="w-full border-b border-white/5 sticky top-0 bg-black/80 backdrop-blur-xl z-50">
                <div className="max-w-[1440px] mx-auto flex justify-between items-center py-5 px-10">
                    <div className="text-2xl font-black italic tracking-tighter">AlphaX</div>
                    <div className="hidden lg:flex items-center gap-10 bg-white/5 px-10 py-2.5 rounded-full border border-white/5">
                        {['Trade', 'Markets', 'Academy', 'Community'].map(item => (
                            <a key={item} href="https://www.alphax.com" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition">{item}</a>
                        ))}
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="text-xs font-bold text-zinc-400">Login</button>
                        <a href="https://www.alphax.com" className="bg-white text-black px-8 py-2.5 rounded-full text-xs font-black hover:scale-105 transition">Register</a>
                    </div>
                </div>
            </nav>

            {/* 2. 主体内容 - 严格居中限制宽度 */}
            <main className="max-w-[1440px] mx-auto px-10 pt-16">

                {/* Hero Section - 左右布局 */}
                <section className="grid lg:grid-cols-2 gap-12 items-center mb-24 relative">
                    <div className="z-10">
                        <h1 className="text-[6rem] font-black tracking-tighter italic leading-[0.85] mb-8">
                            DEFINE YOUR<br />EDGE
                        </h1>
                        <p className="text-xl text-zinc-500 font-medium mb-12 max-w-md">
                            CEX Experience, DEX Security. Professional tools for professional traders.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.alphax.com" className="bg-white text-black px-12 py-4 rounded-full font-black text-sm flex items-center gap-2 hover:invert transition">
                                START TRADING <ChevronRight size={18} />
                            </a>
                            <a href="https://www.alphax.com" className="border border-white/20 px-12 py-4 rounded-full font-black text-sm flex items-center gap-2 hover:bg-white/5 transition">
                                LEARN MORE
                            </a>
                        </div>
                    </div>

                    {/* 右侧：复刻设计稿的几何图形装饰 */}
                    <div className="hidden lg:flex justify-center relative">
                        <div className="w-[480px] h-[480px] border border-white/5 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                            <div className="w-[380px] h-[380px] border border-white/10 rounded-full border-dashed flex items-center justify-center relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-white/5 blur-[80px] rounded-full animate-pulse" />
                                </div>
                                <Database size={80} strokeWidth={0.5} className="text-white/20" />
                            </div>
                        </div>
                        {/* 浮动的六角装饰块效果 */}
                        <div className="absolute top-10 right-10 w-16 h-16 border border-white/10 rotate-45 backdrop-blur-sm" />
                        <div className="absolute bottom-10 left-10 w-12 h-12 border border-white/10 -rotate-12" />
                    </div>
                </section>

                {/* 3. 特性模块 - 四列平铺 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    <FeatureBadge icon={Shield} title="Decentralization & Security" />
                    <FeatureBadge icon={Zap} title="Ultimate Performance" />
                    <FeatureBadge icon={Activity} title="Market Liquidity" />
                    <FeatureBadge icon={Wrench} title="Professional Tools" />
                </div>

                {/* 4. 核心交易面板 - 左右 8:4 布局 */}
                <div className="grid grid-cols-12 gap-6 mb-20">
                    {/* 左：市场列表 */}
                    <PremiumCard title="TOP MARKETS?" className="col-span-12 xl:col-span-8 !p-0 overflow-hidden bg-white">
                        <table className="w-full text-left">
                            <thead className="text-zinc-400 border-b border-zinc-100 text-[10px] uppercase tracking-[0.2em]">
                            <tr>
                                <th className="p-6">Pair</th>
                                <th className="p-6">Price</th>
                                <th className="p-6">Change (24H)</th>
                                <th className="p-6">Volume</th>
                                <th className="p-6 text-right">Trend</th>
                            </tr>
                            </thead>
                            <tbody className="text-black font-black text-sm">
                            <MarketRow pair="BTC/USDT" price="64,231.50" change="+2.45%" vol="910.5M" />
                            <MarketRow pair="ETH/USDT" price="3,452.12" change="+1.12%" vol="420.1M" />
                            <MarketRow pair="SOL/USDT" price="145.89" change="-0.85%" vol="211.5M" />
                            <MarketRow pair="ARB/USDT" price="1.24" change="+5.67%" vol="85.2M" />
                            </tbody>
                        </table>
                    </PremiumCard>

                    {/* 右：杠杆控制区 */}
                    <PremiumCard title="ALPHA LEVERAGE" className="col-span-12 xl:col-span-4 flex flex-col justify-between">
                        <div className="space-y-10">
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                                <div className="text-[10px] text-zinc-500 mb-3 font-bold uppercase tracking-widest">MAX LEVERAGE</div>
                                <div className="text-6xl font-black font-mono tracking-tighter">100X</div>
                            </div>
                            <div className="space-y-4 px-2">
                                {['Perpetual Swaps', 'Automated Orders', 'Stop Loss / Take Profit'].map(t => (
                                    <div key={t} className="text-[10px] text-zinc-500 uppercase flex items-center gap-4 font-bold tracking-widest italic leading-none">
                                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full" /> {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a href="https://www.alphax.com" className="w-full py-5 bg-zinc-800 text-white rounded-2xl text-center font-black text-xs uppercase tracking-[0.4em] mt-10 hover:bg-zinc-700 transition">
                            Trace Now
                        </a>
                    </PremiumCard>
                </div>

                {/* 5. 跨链与对比区 (补全缺失元素) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
                    <PremiumCard className="flex flex-col items-center py-16 text-center">
                        <div className="w-24 h-24 bg-white/5 rounded-[40px] flex items-center justify-center mb-8 border border-white/5">
                            <Lock size={40} className="text-zinc-500" />
                        </div>
                        <h4 className="text-2xl font-black italic uppercase mb-4 tracking-tighter">Cross-Chain & Custody</h4>
                        <p className="text-xs text-zinc-500 max-w-xs mb-10 leading-relaxed uppercase font-bold tracking-widest">BSP, ETH, ARB Assets fully held on smart contracts. Transparent and Secure.</p>
                        <button className="px-12 py-4 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition">Learn More</button>
                    </PremiumCard>

                    <PremiumCard title="ALPHAX VS. THE REST" className="flex flex-col">
                        <div className="space-y-8 mt-4 pr-10">
                            {[
                                '100% On-chain Asset Custody',
                                'Institutional Grade Liquidity',
                                'CEX Experience with Zero Latency',
                                'Multi-chain Smart Contract Audited'
                            ].map(item => (
                                <div key={item} className="flex items-center gap-5 text-xs font-bold text-zinc-500 group cursor-default">
                                    <div className="w-2.5 h-2.5 border-2 border-white/10 rounded-full group-hover:border-white transition-all" />
                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </PremiumCard>
                </div>

                {/* 6. 奖励中心 (补全缺失元素) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <RewardItem icon={Gift} title="New User Perks" />
                    <RewardItem icon={Star} title="Loyalty Program" />
                    <RewardItem icon={Users} title="Referral Bonus" />
                </div>

            </main>

            {/* 页脚 - 按钮放在这里 */}
            <footer className="w-full border-t border-white/5 py-20 bg-black">
                <div className="max-w-[1440px] mx-auto px-10">
                    <div className="grid md:grid-cols-4 gap-12 mb-20">
                        <div className="col-span-2">
                            <div className="text-2xl font-black italic tracking-tighter mb-6">AlphaX</div>
                            <p className="text-xs text-zinc-600 max-w-xs leading-relaxed uppercase font-bold tracking-widest">
                                The next generation decentralized exchange. Professional tools for professional traders.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                            <span className="text-white mb-2">Platform</span>
                            <a href="https://alphax.com" className="hover:text-white">Exchange</a>
                            <a href="https://alphax.com" className="hover:text-white">API Docs</a>
                            <a href="https://alphax.com" className="hover:text-white">Audit</a>
                        </div>
                        <div className="flex flex-col gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                            <span className="text-white mb-2">Utility</span>
                            {/* 核心入口：放在这里 */}
                            <button
                                onClick={() => setCurrentPage('tools')}
                                className="text-left hover:text-white flex items-center gap-2 text-zinc-300"
                            >
                                <Wrench size={12} /> Dev Tools
                            </button>
                            <a href="https://alphax.com" className="hover:text-white">Status</a>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-10 border-t border-white/5 opacity-30 text-[9px] font-black uppercase tracking-[0.3em]">
                        <span>© 2026 AlphaX Protocol</span>
                        <div className="flex gap-10">
                            <a href="https://alphax.com">Terms</a>
                            <a href="https://alphax.com">Privacy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// 子组件：小徽章
function FeatureBadge({ icon: Icon, title }) {
    return (
        <div className="flex flex-col items-center p-6 rounded-3xl hover:bg-white/5 transition group">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-zinc-600 group-hover:text-white transition">
                <Icon size={24} strokeWidth={1} />
            </div>
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 text-center leading-tight group-hover:text-white">{title}</h4>
        </div>
    )
}

// 子组件：市场行
function MarketRow({ pair, price, change, vol }) {
    return (
        <tr className="border-b border-zinc-50 hover:bg-zinc-50 transition cursor-pointer group">
            <td className="p-6 font-black tracking-tighter">{pair}</td>
            <td className="p-6 font-mono">{price}</td>
            <td className={`p-6 ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{change}</td>
            <td className="p-6 text-zinc-400 font-mono">{vol}</td>
            <td className="p-6 text-right">
                <div className="inline-block w-16 h-6 bg-zinc-100 rounded group-hover:bg-zinc-200 transition" />
            </td>
        </tr>
    )
}

// 子组件：奖励块
function RewardItem({ icon: Icon, title }) {
    return (
        <div className="bg-zinc-900/40 border border-white/5 p-10 rounded-[40px] flex flex-col items-center group hover:bg-white transition duration-500">
            <Icon size={36} className="mb-6 text-white group-hover:text-black transition" />
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-black">{title}</h4>
            <div className="mt-8 text-[10px] font-black underline opacity-0 group-hover:opacity-100 group-hover:text-black transition uppercase tracking-widest">Claim Now</div>
        </div>
    )
}