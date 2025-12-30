import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyOverview from "@/components/CaseStudyOverview";
import BuildTogether from "@/components/BuildTogether";

export default function EchoNodeCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <CaseStudyHero
                    title="EchoNode."
                    subtitle="Web3 Notification System for Traders."
                    description="A real-time blockchain notification platform helping traders stay informed on Hyperliquid."
                    image="/echonode-hero.svg"
                />

                <CaseStudyOverview
                    overview="Echonode is a Web3-native notification system designed to solve the problem of missing or delayed trading alerts for decentralized traders on Hyperliquid."
                    challenge={{
                        title: "Traders lacked:",
                        items: [
                            "Real-time notifications for important trading events.",
                            "Centralized alert systems in decentralized environments.",
                            "Efficient ways to track multiple on-chain activities.",
                            "Real-time notifications for important trading events."
                        ]
                    }}
                    solution={{
                        title: "We implemented:",
                        items: [
                            "A high-performance indexing engine for real-time data.",
                            "Multi-channel alerts via Telegram, Discord, and Web Push.",
                            "Customizable alert rules for whale moves and liquidations.",
                            "User-friendly dashboard for managing notification flows."
                        ]
                    }}
                    results={{
                        title: "The outcome:",
                        items: [
                            "99.9% uptime for delivery of critical trading alerts.",
                            "Over 10,000 active traders using the platform daily.",
                            "Average latency reduced to under 200ms for on-chain events.",
                            "Significant increase in community engagement through alerts."
                        ]
                    }}
                    image="/echonode-combine.svg"
                />

                <BuildTogether />
            </main>
        </div>
    );
}
