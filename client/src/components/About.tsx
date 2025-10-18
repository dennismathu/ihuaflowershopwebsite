import { Button } from "@/components/ui/button";
import coupleImage from "@assets/stock_images/black_couple_florist_8859d3d6.jpg";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-muted" id="about">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Trusted Local Florist
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Ihua Flowers Shop, we're a family-run business proudly serving Githunguri, Kiambu, Nairobi and environs. 
                With years of expertise in floral design, we bring passion and artistry to every bouquet we create.
              </p>
              <p>
                From joyful celebrations to moments of remembrance, we understand the importance of flowers in life's 
                most meaningful occasions. Our team of skilled florists carefully selects only the freshest blooms to 
                ensure your arrangements are as beautiful as your sentiments.
              </p>
              <p>
                Whether you need a romantic surprise, a birthday celebration, corporate event florals, or dignified 
                sympathy arrangements, we're here to help you express what words cannot.
              </p>
            </div>
            <Button size="lg" className="mt-8" asChild data-testid="button-discover-bouquets">
              <a href="#showcase">Discover Our Bouquets</a>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img 
                src={coupleImage} 
                alt="Family-run flower shop owners in Githunguri"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-xl font-semibold">Family-Run Business</p>
                <p className="text-white/90 mt-1">Serving Githunguri, Kiambu, Nairobi and environs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
