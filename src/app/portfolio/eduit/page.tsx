import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyOverview from "@/components/CaseStudyOverview";
import BuildTogether from "@/components/BuildTogether";

export default function EduitCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <CaseStudyHero
                    title="Eduit"
                    subtitle="Transform School Management"
                    description="Comprehensive platform for educational institution management."
                    image="/eduit.svg"
                />

                <CaseStudyOverview
                    overview="Eduit provides a centralized digital ecosystem for schools, managing everything from student enrollment and curriculum planning to financial tracking and parent communication."
                    challenge={{
                        title: "Schools struggled with:",
                        items: [
                            "Fragmented data across multiple disconnected systems.",
                            "Manually intensive administrative processes.",
                            "Poor communication flow between teachers and parents.",
                            "Difficulty in tracking student progress and institutional KPIs."
                        ]
                    }}
                    solution={{
                        title: "We implemented:",
                        items: [
                            "Unified database for students, staff, and academics.",
                            "Automated financial management and fee collection system.",
                            "Interactive parent-teacher communication portal.",
                            "Real-time analytics dashboard for institutional performance."
                        ]
                    }}
                    results={{
                        title: "The outcome:",
                        items: [
                            "50% reduction in administrative workload.",
                            "Improved data accuracy and institutional transparency.",
                            "Enhanced parent engagement and satisfaction levels.",
                            "Easier compliance reporting for educational regulatory bodies."
                        ]
                    }}
                    image="/eduit.svg"
                />

                <BuildTogether />
            </main>
        </div>
    );
}
