import heroImage from "@assets/gemini image to the side_1760013525409.png";

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hello Ihua Flowers Shop! 🌸\n\n" +
    "I would like to order flowers. Here are my details:\n\n" +
    "1. Type of flowers I want:\n" +
    "2. When I need them ready:\n" +
    "3. Delivery location (or mention 'in-shop visit'):\n\n" +
    "Thank you!"
  );
  const whatsappUrl = `https://wa.me/254735838165?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful fresh flower arrangements at Ihua Flowers Shop Githunguri"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="font-serif">Ihua Flowers Shop</span>
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl font-light mb-2">
          Handcrafted Bouquets for Every Moment
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-95">
          Creating beautiful moments, one bouquet at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary hover-elevate active-elevate-2 px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 transition-transform"
            data-testid="button-order-now"
          >
            <i className="fas fa-shopping-cart"></i>
            Order Flowers Now
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-md text-white border-2 border-white hover-elevate active-elevate-2 px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 transition-transform"
            data-testid="button-custom-bouquet"
          >
            <i className="fas fa-palette"></i>
            Custom Arrangements
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white z-10">
        <i className="fas fa-chevron-down text-3xl opacity-75"></i>
      </div>
    </section>
  );
}
