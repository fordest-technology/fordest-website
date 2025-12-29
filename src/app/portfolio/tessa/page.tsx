import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyOverview from "@/components/CaseStudyOverview";
import BuildTogether from "@/components/BuildTogether";

export default function TessaCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <CaseStudyHero
                    title="Tessa."
                    subtitle="Support Agent"
                    description="AI-powered support agent for automated customer queries."
                    image="/tessa.svg"
                />

                <CaseStudyOverview
                    overview="Tessa is a cutting-edge AI support agent designed to automate customer interactions, providing instant and accurate responses while freeing up human teams for complex tasks."
                    challenge={{
                        title: "Support teams faced:",
                        items: [
                            "High volume of repetitive customer inquiries.",
                            "Long response times during peak hours.",
                            "Inconsistent support quality across different agents.",
                            "Scalability issues as customer base expanded."
                        ]
                    }}
                    solution={{
                        title: "We implemented:",
                        items: [
                            "Advanced NLP engine for understanding complex queries.",
                            "Seamless integration with existing CRM and helpdesk tools.",
                            "Auto-learning capabilities from historical support data.",
                            "Multilingual support for global customer reach."
                        ]
                    }}
                    results={{
                        title: "The outcome:",
                        items: [
                            "70% reduction in average ticket response time.",
                            "45% of support queries resolved entirely by AI.",
                            "Consistent 4.8/5 CSAT score for AI interactions.",
                            "Significant reduction in operational support costs."
                        ]
                    }}
                    image="/tessa.svg"
                />

                <BuildTogether />
            </main>
        </div>
    );
}
