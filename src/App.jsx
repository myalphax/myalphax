import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, BarChart3, Globe, Gift, Users, ChevronRight } from 'lucide-react';

const Nav = () => (
    <nav className="flex justify-between items-center py-6 px-8 border-b border-white/10 bg-dark sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter">AlphaX</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="https://www.alphax.com" className="hover:text-white">市场</a>
            <a href="https://www.alphax.com" className="hover:text-white">合约</a>
            <a href="https://www.alphax.com" className="hover:text-white">安全审计</a>
            <a href="https://www.alphax.com" className="hover:text-white">福利中心</a>
        </div>
        <div className="flex gap-4">
            <a href="https://www.alphax.com" className="px-5 py-2 text-sm border border-white/20 rounded-full hover:bg-white hover:text-black transition">登录</a>
            <a href="https://www.alphax.com" className="px-5 py-2 text-sm bg-white text-black rounded-full font-bold hover:bg-gray-200 transition">立即注册</a>
        </div>
    </nav>
);

const Hero = () => (
    <section className="py-24 px-8 text-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-dark">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">DEFINE YOUR EDGE</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            CEX 的极致体验 × DEX 的绝对安全。支持 100x 杠杆，资金全量链上托管。
        </p>
        <div className="flex justify-center gap-6">
            <a href="https://www.alphax.com" className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full text-lg font-bold hover:scale-105 transition">
                开始交易 <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </a>
        </div>
    </section>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <div className="p-8 bg-card border border-white/5 rounded-2xl hover:border-white/20 transition cursor-default">
        <Icon size={32} className="mb-4 text-white" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

const ComparisonTable = () => (
    <div className="py-20 px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">行业对比：为什么选择 AlphaX</h2>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="border-b border-white/10 text-gray-400">
                    <th className="py-4 px-4">特性</th>
                    <th className="py-4 px-4">传统 CEX (Binance/Bybit)</th>
                    <th className="py-4 px-4 text-white">AlphaX</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-white/5">
                    <td className="py-6 px-4 font-medium">资产归属</td>
                    <td className="py-6 px-4 text-gray-500 text-sm">平台托管 (有冻结风险)</td>
                    <td className="py-6 px-4 text-white font-bold italic">链上托管 (私钥归您)</td>
                </tr>
                <tr className="border-b border-white/5">
                    <td className="py-6 px-4 font-medium">交易工具</td>
                    <td className="py-6 px-4 text-gray-500 text-sm">丰富</td>
                    <td className="py-6 px-4 text-white">全功能 (含移动止盈止损)</td>
                </tr>
                <tr className="border-b border-white/5">
                    <td className="py-6 px-4 font-medium">杠杆倍数</td>
                    <td className="py-6 px-4 text-gray-500 text-sm">最高 100x-125x</td>
                    <td className="py-6 px-4 text-white">100x 丝滑合约</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
);

const App = () => {
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-white selection:text-black">
            <Nav />
            <Hero />

            <main className="max-w-7xl mx-auto px-8">
                {/* 核心功能网格 */}
                <div className="grid md:grid-cols-3 gap-6 py-20">
                    <FeatureCard
                        icon={ShieldCheck}
                        title="绝对安全"
                        desc="资金全部托管于 BSP/ETH/ARB 链上智能合约，L1/L2 快速出入金，无需担心平台风险。"
                    />
                    <FeatureCard
                        icon={Zap}
                        title="极致性能"
                        desc="支持将近 100 个币对的合约流畅交易，100x 杠杆，限价、市价、移动止盈一应俱全。"
                    />
                    <FeatureCard
                        icon={Gift}
                        title="福利馈赠"
                        desc="丰富的活动、新人礼、及邀请伙伴丰厚奖励，让每一笔交易都带有额外价值。"
                    />
                </div>

                <ComparisonTable />

                {/* 底部行动号召 */}
                <section className="py-20 mb-20 bg-white text-black rounded-3xl text-center px-8 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                    <h2 className="text-4xl font-bold mb-6 italic">READY TO SCALE?</h2>
                    <p className="text-lg mb-8 font-medium">立即加入 AlphaX，体验 CEX 的便捷与 DEX 的纯粹。</p>
                    <a href="https://www.alphax.com" className="inline-block px-10 py-4 bg-black text-white rounded-full font-black hover:invert transition uppercase tracking-widest">
                        进入官网 https://alphax.com
                    </a>
                </section>
            </main>

            <footer className="py-12 border-t border-white/10 text-center text-gray-600 text-sm">
                <p>© 2026 AlphaX Protocol. Built on Decentralization.</p>
            </footer>
        </div>
    );
};

export default App;