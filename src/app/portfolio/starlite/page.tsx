import Navbar from "@/components/Navbar";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyOverview from "@/components/CaseStudyOverview";
import BuildTogether from "@/components/BuildTogether";

export default function StarliteCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <CaseStudyHero
                    title="Starlite."
                    subtitle="Healthcare Management Platform"
                    description="A robust system for managing healthcare delivery and patient records with precision."
                    image="/starlite-cover.svg"
                />

                <CaseStudyOverview
                    overview="Starlite provides a secure and intuitive platform for hospitals and clinics to manage patient data, appointment scheduling, and clinical workflows with high reliability."
                    challenge={{
                        title: "Hospitals struggled with:",
                        items: [
                            "Slow access to critical patient medical histories.",
                            "High rate of administrative errors in scheduling and billing.",
                            "Lack of data interoperability between departments.",
                            "Security concerns regarding sensitive patient information."
                        ]
                    }}
                    solution={{
                        title: "We implemented:",
                        items: [
                            "Centralized Electronic Health Record (EHR) system.",
                            "Intelligent patient scheduling and reminder system.",
                            "Secure, HIPAA-compliant data infrastructure.",
                            "Automated insurance verification and claims processing."
                        ]
                    }}
                    results={{
                        title: "The outcome:",
                        items: [
                            "30% improvement in patient throughput efficiency.",
                            "90% reduction in documentation and billing errors.",
                            "Enhanced patient care through rapid data availability.",
                            "Full regulatory compliance and data breach prevention."
                        ]
                    }}
                    image="/starlite-cover.svg"
                />

                <BuildTogether />
            </main>
        </div>
    );
}
