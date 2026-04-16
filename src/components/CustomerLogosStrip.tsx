import sunonixLogo from "@/assets/clients/sunonix.png";
import oromoLogo from "@/assets/clients/oromo.png";
import grameenaLogo from "@/assets/clients/grameena.png";
import raddisLogo from "@/assets/clients/raddis.png";
import kenaiLogo from "@/assets/clients/kenai.png";
import vihangaLogo from "@/assets/clients/vihanga.png";

const logos = [
  { src: sunonixLogo, alt: "Sunonix — TalentSpotify customer" },
  { src: oromoLogo, alt: "Oromo Legacy Leadership — TalentSpotify customer" },
  { src: grameenaLogo, alt: "Grameena Vikas Kendram — TalentSpotify customer" },
  { src: raddisLogo, alt: "Raddis Cotton — TalentSpotify customer" },
  { src: kenaiLogo, alt: "Kenai — TalentSpotify customer" },
  { src: vihangaLogo, alt: "Vihanga — TalentSpotify customer" },
];

const CustomerLogosStrip = ({ className = "" }: { className?: string }) => (
  <div className={`py-10 ${className}`}>
    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium text-center mb-6">Trusted by HR leaders across industries</p>
    <div className="flex flex-wrap justify-center gap-10 items-center">
      {logos.map(l => (
        <img key={l.alt} src={l.src.src} alt={l.alt} className="h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all" loading="lazy" />
      ))}
    </div>
  </div>
);

export default CustomerLogosStrip;
