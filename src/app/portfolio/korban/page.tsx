import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyOverview from "@/components/CaseStudyOverview";
import BuildTogether from "@/components/BuildTogether";

export default function KorbanCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <CaseStudyHero
                    title="Korban"
                    subtitle="Blockchain Asset Management"
                    description="Secure and efficient platform for managing digital assets and on-chain portfolios."
                    image="/korban-cover.svg"
                />

                <CaseStudyOverview
                    overview="Korban is a institutional-grade asset management platform that provides professional investors with the tools needed to manage complex digital asset portfolios across multiple blockchains."
                    challenge={{
                        title: "Investors needed:",
                        items: [
                            "Unified view of assets held across multiple different chains.",
                            "Robust security for managing private keys and access.",
                            "Advanced analytics for tracking portfolio performance.",
                            "Easy-to-use interface for complex on-chain operations."
                        ]
                    }}
                    solution={{
                        title: "We implemented:",
                        items: [
                            "Multi-chain indexing for real-time balance tracking.",
                            "Enterprise-level security including multi-sig integration.",
                            "Advanced portfolio analytics and tax reporting tools.",
                            "Simplified transaction execution and staking modules."
                        ]
                    }}
                    results={{
                        title: "The outcome:",
                        items: [
                            "25% more efficient portfolio rebalancing.",
                            "Zero security incidents for over $500M in assets under tracking.",
                            "Significantly reduced complexity for on-chain management.",
                            "High adoption rate among institutional crypto funds."
                        ]
                    }}
                    image="/korban-cover.svg"
                />

                <BuildTogether />
            </main>
        </div>
    );
}
