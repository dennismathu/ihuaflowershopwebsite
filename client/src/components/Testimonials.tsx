import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Grace Wanjiku",
      location: "Githunguri",
      initials: "GW",
      rating: 5,
      text: "Absolutely stunning bouquet delivered exactly on time for my mother's birthday. The flowers were fresh and beautifully arranged!"
    },
    {
      name: "Peter Kamau",
      location: "Kiambu",
      initials: "PK",
      rating: 5,
      text: "Their custom arrangement for our office opening was breathtaking. Professional service and attention to detail is outstanding."
    },
    {
      name: "Mary Njeri",
      location: "Ruiru",
      initials: "MN",
      rating: 5,
      text: "Beautiful sympathy arrangement delivered to Githunguri on time. Very respectful and compassionate service during a difficult time."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4">Loved by Our Customers</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 hover:-translate-y-1"
              data-testid={`testimonial-card-${index}`}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-chart-2 text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
