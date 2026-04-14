// @ts-nocheck
import FooterOne from "@/components/ui/footer-1";

export default function DemoOne() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-black text-[#0096c7]">Tourism Footer Demo</h1>
        <p className="mt-3 text-slate-600">
          This demo renders the reusable footer component with your project-specific copy and placeholder personal links.
        </p>
      </div>

      <FooterOne
        authorName="JOSE RAPHAEL PIDO"
        projectName="Countries I Wanted To Visit"
        projectPurpose="A personal tourism showcase about the Maldives, sharing the places, food, and island lifestyle I hope to experience."
        personalLinks={[
          { label: "Portfolio", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "Instagram", href: "#" },
        ]}
      />
    </main>
  );
}
