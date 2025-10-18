import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const whatsappMessage = encodeURIComponent(
    "Hello Ihua Flowers Shop! 🌸\n\n" +
    "I would like to order flowers. Here are my details:\n\n" +
    "1. Type of flowers I want:\n" +
    "2. When I need them ready:\n" +
    "3. Delivery location (or mention 'in-shop visit'):\n\n" +
    "Thank you!"
  );
  const whatsappUrl = `https://wa.me/254735838165?text=${whatsappMessage}`;

  const services = [
    {
      icon: "fa-heart",
      title: "Bouquets for All Occasions",
      description: "Birthdays, anniversaries, congratulations - we have the perfect arrangement for every moment.",
      gradient: "from-primary to-primary/80",
      action: "Order Now"
    },
    {
      icon: "fa-magic",
      title: "Custom / Signature Bouquets",
      description: "Let our expert florists create something uniquely beautiful just for you or your special someone.",
      gradient: "from-primary to-chart-2",
      action: "Order Now"
    },
    {
      icon: "fa-dove",
      title: "Sympathy & Funeral Flowers",
      description: "Thoughtful tributes to honor loved ones. We provide dignified arrangements with respectful service.",
      gradient: "from-chart-2 to-chart-2/70",
      action: "Order Now"
    },
    {
      icon: "fa-handshake",
      title: "Corporate & Event Florals",
      description: "Transform your corporate events and special occasions with our professional floral designs.",
      gradient: "from-chart-4 to-chart-4/80",
      action: "Order Now"
    },
    {
      icon: "fa-sync-alt",
      title: "Floral Subscriptions",
      description: "Keep your space fresh with weekly or monthly flower deliveries. Perfect for offices and homes.",
      gradient: "from-chart-5 to-primary",
      action: "Order Now"
    },
    {
      icon: "fa-store",
      title: "Visit Our Storefront",
      description: "Experience our full collection in person in Githunguri. See, smell, and select your perfect bouquet.",
      gradient: "from-primary to-chart-3",
      action: "#contact",
      isLink: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="services">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4">Our Services</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 hover:-translate-y-2"
              data-testid={`service-card-${index}`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center`}>
                  <i className={`fas ${service.icon} text-3xl text-white`}></i>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
              <CardFooter className="justify-center">
                {service.isLink ? (
                  <Button variant="outline" asChild data-testid={`button-service-${index}`}>
                    <a href={service.action}>Visit Us</a>
                  </Button>
                ) : (
                  <Button variant="outline" asChild data-testid={`button-service-${index}`}>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {service.action}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
