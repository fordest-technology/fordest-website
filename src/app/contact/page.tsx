import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import BuildTogether from "@/components/BuildTogether";

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-20 pb-24">
                <ContactSection />
                <BuildTogether />
            </main>
        </div>
    );
}
