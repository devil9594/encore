import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Streamlined processes that save you time and resources.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Industry-leading security practices to protect your business.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals committed to your success.",
  },
];

const benefits = [
  "Professional expertise at competitive rates",
  "Tailored solutions for your unique needs",
  "24/7 dedicated support",
  "Proven track record of success",
];

const Home = () => {
  return (
    <article>
      {/* Hero Section */}
      <section className="section">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 animate-fade-in opacity-0">
              Professional Solutions for Modern Business
            </h1>
            <p className="text-body mt-6 animate-slide-up opacity-0 animate-delay-100">
              We deliver exceptional services that drive growth and innovation. 
              Partner with us to transform your business and achieve your goals.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up opacity-0 animate-delay-200">
              <Button asChild size="lg">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-secondary/30">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2">Why Choose Us</h2>
            <p className="text-body mt-4">
              We combine expertise with innovation to deliver results that matter.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="heading-3 mt-6">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="heading-2">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-body mt-4">
                Our commitment to excellence has earned us the trust of clients 
                across industries. We focus on building lasting partnerships 
                that drive mutual success.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-foreground" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold">500+</div>
                <div className="mt-2 text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="page-container text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Contact us today to discuss how we can help your business grow.
          </p>
          <div className="mt-8">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;
