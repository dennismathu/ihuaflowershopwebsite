export default function TrustStrip() {
  const trustItems = [
    { icon: "fa-truck", text: "Same-Day Delivery" },
    { icon: "fa-dove", text: "Funeral Flowers Available" },
    { icon: "fa-palette", text: "Custom Bouquets" },
    { icon: "fa-map-marker-alt", text: "Local Nairobi Service" }
  ];

  return (
    <section className="bg-muted py-8 md:py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-3"
              data-testid={`trust-item-${index}`}
            >
              <i className={`fas ${item.icon} text-4xl text-primary`}></i>
              <span className="text-sm md:text-base font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
