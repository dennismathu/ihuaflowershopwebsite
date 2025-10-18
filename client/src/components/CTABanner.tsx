import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-chart-2 text-white">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Flowers for Any Occasion?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-95">
          We're Here to Help - Call or WhatsApp Us Today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg" 
            asChild
            data-testid="button-contact-whatsapp"
          >
            <a href="https://wa.me/254735838165" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp text-xl mr-2"></i>
              WhatsApp Us
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary" 
            asChild
            data-testid="button-contact-call"
          >
            <a href="tel:+254735838165">
              <i className="fas fa-phone text-xl mr-2"></i>
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
