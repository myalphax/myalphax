import React from 'react';
import { Shield, Zap, Wrench, TrendingUp, Lock, ChevronRight, Globe, BarChart2 } from 'lucide-react';

// 通用全宽卡片，去掉硬编码内边距，改用百分比或自适应 gap
const FullWidthCard = ({ children, className = "" }) => (
    <div className={`bg-ui-card border border-ui-border rounded-2xl flex flex-col ${className}`}>
        {children}
    </div>
);

export default function AlphaXFullScreen() {
    return (
        // 强制 100% 宽度，背景铺满
        <div className="w-full min-h-screen bg-[#050505] text-white font-sans antialiased overflow-x-hidden">

            {/* 1. 100% 全宽导航栏 */}
            <nav className="w-full h-20 flex justify-between items-center px-8 border-b border-white/5 sticky top-0 bg-black/90 backdrop-blur-2xl z-50">
                <div className="flex items-center gap-8">
                    <div className="text-2xl font-black italic tracking-tighter">AlphaX</div>
                    <div className="hidden xl:flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/5">
                        {['Trade', 'Markets', 'Academy', 'Community'].map(item => (
                            <a key={item} href="https://www.alphax.com" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition">{item}</a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://www.alphax.com" className="text-sm font-bold text-zinc-400 px-4">Login</a>
                    <a href="https://www.alphax.com" className="bg-white text-black px-8 py-2.5 rounded-full text-sm font-black hover:scale-105 transition">Register</a>
                </div>
            </nav>

            {/* 2. 主体平铺区域 - 使用 w-full 取消限制 */}
            <main className="w-full px-8 py-8">

                {/* 第一行：Hero 宣传区 - 采用 100% 宽度响应式网格 */}
                <section className="w-full grid grid-cols-12 gap-6 mb-8">
                    <div className="col-span-12 lg:col-span-7 py-12 flex flex-col justify-center">
                        <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter mb-6 italic leading-[0.85]">
                            DEFINE YOUR<br />EDGE
                        </h1>
                        <p className="text-xl text-zinc-500 font-medium mb-10 max-w-xl">
                            The ultimate DEX with CEX-level performance. 100x leverage, professional tools, and 100% on-chain custody.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.alphax.com" className="bg-white text-black px-12 py-4 rounded-full font-black text-sm flex items-center gap-2 hover:bg-zinc-200 transition">
                                START TRADING <ChevronRight size={18} />
                            </a>
                            <a href="https://www.alphax.com" className="border border-white/20 px-12 py-4 rounded-full font-black text-sm flex items-center gap-2 hover:bg-white/5 transition">
                                LEARN MORE
                            </a>
                        </div>
                    </div>

                    {/* 右侧：实时数据卡片 (平铺装饰) */}
                    <div className="col-span-12 lg:col-span-5 relative hidden lg:flex items-center justify-center">
                        <div className="w-full h-full border border-white/5 rounded-3xl bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center overflow-hidden">
                            <Globe size={300} strokeWidth={0.5} className="text-white/10 animate-pulse" />
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50"></div>
                        </div>
                    </div>
                </section>

                {/* 第二行：核心交易数据平铺 */}
                <div className="w-full grid grid-cols-12 gap-6 mb-8">

                    {/* 市场列表 - 自动平铺撑开 */}
                    <FullWidthCard className="col-span-12 xl:col-span-9 overflow-hidden">
                        <div className="p-6 border-b border-white/5 flex justify-between items-center">
                            <h3 className="font-black italic tracking-widest text-sm uppercase">Live Markets</h3>
                            <BarChart2 size={18} className="text-zinc-600" />
                        </div>
                        <div className="w-full overflow-x-auto bg-white">
                            <table className="w-full text-left">
                                <thead className="text-zinc-400 border-b border-zinc-100 text-[10px] uppercase tracking-[0.2em]">
                                <tr>
                                    <th className="p-6">Asset Pair</th>
                                    <th className="p-6">Last Price</th>
                                    <th className="p-6">24H Change</th>
                                    <th className="p-6">24H Volume</th>
                                    <th className="p-6 text-right">Action</th>
                                </tr>
                                </thead>
                                <tbody className="text-black font-black">
                                <MarketRow pair="BTC/USDT" price="64,231.50" change="+2.45%" vol="910.5M" />
                                <MarketRow pair="ETH/USDT" price="3,452.12" change="+1.12%" vol="420.1M" />
                                <MarketRow pair="SOL/USDT" price="145.89" change="-0.85%" vol="211.5M" />
                                <MarketRow pair="ARB/USDT" price="1.24" change="+5.67%" vol="85.2M" />
                                </tbody>
                            </table>
                        </div>
                    </FullWidthCard>

                    {/* 杠杆控制区 - 垂直平铺 */}
                    <FullWidthCard className="col-span-12 xl:col-span-3 p-8 bg-zinc-900 justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-12">
                                <h3 className="text-xl font-black italic">ALPHA<br />LEVERAGE</h3>
                                <span className="bg-white/10 text-[10px] px-2 py-1 rounded text-zinc-400">PRO</span>
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Max Leverage</span>
                                    <span className="text-4xl font-black font-mono">100X</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Execution</span>
                                    <span className="text-sm font-black">STP / ECN</span>
                                </div>
                            </div>
                        </div>
                        <a href="https://www.alphax.com" className="w-full py-5 bg-white text-black rounded-xl text-center font-black text-xs uppercase tracking-[0.3em] hover:invert transition-all mt-10">
                            Open Terminal
                        </a>
                    </FullWidthCard>
                </div>

                {/* 第三行：四列全宽功能块 */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureBlock icon={Shield} title="Multi-Chain" desc="BSP, ETH, ARB Support" />
                    <FeatureBlock icon={Zap} title="Speed" desc="CEX-Level Latency" />
                    <FeatureBlock icon={Wrench} title="Tools" desc="Advanced TP/SL Orders" />
                    <FeatureBlock icon={Lock} title="Security" desc="100% On-chain Custody" />
                </div>

            </main>

            {/* 底部全宽信息 */}
            <footer className="w-full mt-20 px-8 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <span className="text-xl font-black italic tracking-tighter">AlphaX</span>
                    <span className="text-[10px] text-zinc-600 tracking-widest">GLOBAL DECENTRALIZED EXCHANGE</span>
                </div>
                <div className="flex gap-10 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                    <a href="https://www.alphax.com" className="hover:text-white transition">Twitter</a>
                    <a href="https://www.alphax.com" className="hover:text-white transition">Telegram</a>
                    <a href="https://www.alphax.com" className="hover:text-white transition">Docs</a>
                </div>
            </footer>
        </div>
    );
}

function MarketRow({ pair, price, change, vol }) {
    return (
        <tr className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors cursor-pointer group">
            <td className="p-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                {pair}
            </td>
            <td className="p-6 font-mono">{price}</td>
            <td className={`p-6 ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{change}</td>
            <td className="p-6 text-zinc-400 font-mono">{vol}</td>
            <td className="p-6 text-right">
                <a href="https://www.alphax.com" className="text-[10px] border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">Trade</a>
            </td>
        </tr>
    )
}

function FeatureBlock({ icon: Icon, title, desc }) {
    return (
        <div className="p-8 border border-white/5 bg-ui-card rounded-2xl hover:border-white/20 transition-all group">
            <Icon size={24} className="mb-6 text-zinc-500 group-hover:text-white transition-colors" />
            <h4 className="text-xs font-black uppercase tracking-widest mb-2 italic">{title}</h4>
            <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-tighter">{desc}</p>
        </div>
    )
}