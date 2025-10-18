export default function Contact() {
  return (
    <footer className="bg-card py-12 md:py-16 border-t" id="contact">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Business Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-serif">Ihua Flowers Shop</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted passionate florist. Creating beautiful moments, one bouquet at a time.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-primary"></i>
                <div>
                  <a href="tel:+254735838165" className="hover:text-primary transition-colors" data-testid="link-phone-1">
                    +254 735 838165
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-primary"></i>
                <div>
                  <a href="tel:+254791216273" className="hover:text-primary transition-colors" data-testid="link-phone-2">
                    +254 791 216273
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-primary"></i>
                <div>
                  <a 
                    href="https://wa.me/254735838165" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    data-testid="link-whatsapp"
                  >
                    +254 735 838165
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary"></i>
                <div>
                  <a href="mailto:info@ihuaflowers.com" className="hover:text-primary transition-colors" data-testid="link-email">
                    info@ihuaflowers.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <div>Githunguri, Kiambu</div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors"
                data-testid="link-facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors"
                data-testid="link-twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Business Hours:</p>
              <p>Monday - Saturday: 7:00 AM - 7:00 PM</p>
              <p>Sunday: 2:00 PM - 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ihua Flowers Shop. All rights reserved.</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254735838165"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50 animate-pulse"
        data-testid="button-whatsapp-float"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </footer>
  );
}
