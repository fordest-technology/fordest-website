import Navbar from "@/components/Navbar";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioMarquee from "@/components/PortfolioMarquee";
import PortfolioProjects from "@/components/PortfolioProjects";
import BuildTogether from "@/components/BuildTogether";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen font-sans">
            <Navbar />
            <main>
                <PortfolioHero />
                <PortfolioMarquee />
                <PortfolioProjects />
                <BuildTogether />
            </main>
        </div>
    );
}
