import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import roseImage from "@assets/stock_images/red_roses_romantic_b_cea10873.jpg";
import birthdayImage from "@assets/birthday_flowers_1760615187530.webp";
import liliesImage from "@assets/special day package small 2_1760616312790.png";
import sympathyImage from "@assets/red-and-white-cross_1760615338596.jpg";
import sunflowerImage from "@assets/stock_images/bright_sunflowers_bo_02032ec7.jpg";

export default function FeaturedBouquets() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const whatsappMessage = encodeURIComponent(
    "Hello Ihua Flowers Shop! 🌸\n\n" +
    "I would like to order flowers. Here are my details:\n\n" +
    "1. Type of flowers I want:\n" +
    "2. When I need them ready:\n" +
    "3. Delivery location (or mention 'in-shop visit'):\n\n" +
    "Thank you!"
  );
  const whatsappUrl = `https://wa.me/254735838165?text=${whatsappMessage}`;

  const bouquets = [
    {
      image: roseImage,
      title: "Romantic Rose Bouquet",
      description: "Premium red roses with lots of love",
      price: "KES 2,500"
    },
    {
      image: birthdayImage,
      title: "Birthday Celebration Mix",
      description: "Colorful flowers with cheerful ribbon for the birthday",
      price: "KES 3,200"
    },
    {
      image: liliesImage,
      title: "Special Day Package",
      description: "Flowers, a gift and a card to celebrate a special day",
      price: "KES 4,500"
    },
    {
      image: sympathyImage,
      title: "Sympathy and Funerals Flowers",
      description: "Peaceful, thoughtful tributes and respectful sympathy arrangements",
      price: "KES 3,800"
    },
    {
      image: sunflowerImage,
      title: "Sunny Day Special",
      description: "Bright sunflowers with complementary blooms",
      price: "KES 2,800"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bouquets.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bouquets.length) % bouquets.length);
  };

  return (
    <section className="py-16 md:py-24 bg-muted" id="showcase">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4">Featured Bouquets</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-12 rounded-full"></div>

        {/* Desktop: Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bouquets.map((bouquet, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-2"
              data-testid={`bouquet-card-${index}`}
            >
              <div className="relative h-64">
                <img 
                  src={bouquet.image} 
                  alt={bouquet.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {bouquet.price}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{bouquet.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{bouquet.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild data-testid={`button-shop-bouquet-${index}`}>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Shop This Bouquet
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile: Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {bouquets.map((bouquet, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="overflow-hidden" data-testid={`bouquet-card-mobile-${index}`}>
                    <div className="relative h-64">
                      <img 
                        src={bouquet.image} 
                        alt={bouquet.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {bouquet.price}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{bouquet.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{bouquet.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          Shop This Bouquet
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 rounded-full shadow-lg"
            onClick={prevSlide}
            data-testid="button-carousel-prev"
          >
            <i className="fas fa-chevron-left"></i>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full shadow-lg"
            onClick={nextSlide}
            data-testid="button-carousel-next"
          >
            <i className="fas fa-chevron-right"></i>
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {bouquets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
