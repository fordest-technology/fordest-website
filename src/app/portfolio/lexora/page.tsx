import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyOverview from "@/components/CaseStudyOverview";
import BuildTogether from "@/components/BuildTogether";

export default function LexoraCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <CaseStudyHero
                    title="Lexora"
                    subtitle="Legal Tech Solutions"
                    description="Streamlining legal workflows and document management for modern law firms."
                    image="/lexora.svg"
                />

                <CaseStudyOverview
                    overview="Lexora is a specialized legal technology platform that digitizes law firm operations, focusing on efficient document management, case tracking, and secure client communication."
                    challenge={{
                        title: "Law firms faced:",
                        items: [
                            "Drowning in physical paperwork and unorganized digital files.",
                            "Risks associated with insecure communication channels.",
                            "Inefficient time tracking and billing processes.",
                            "Difficulty in collaborative work across different law offices."
                        ]
                    }}
                    solution={{
                        title: "We implemented:",
                        items: [
                            "Secure, encrypted cloud storage with version control.",
                            "Automated legal document generation and e-signatures.",
                            "Integrated time-tracking and transparent billing modules.",
                            "Collaborative workspaces for cross-team case management."
                        ]
                    }}
                    results={{
                        title: "The outcome:",
                        items: [
                            "40% increase in billable hour efficiency.",
                            "Full compliance with legal data security standards.",
                            "Significant reduction in physical storage costs.",
                            "Faster case turnaround times and improved client satisfaction."
                        ]
                    }}
                    image="/lexora.svg"
                />

                <BuildTogether />
            </main>
        </div>
    );
}
