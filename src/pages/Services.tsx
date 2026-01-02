import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Code, 
  Palette, 
  Megaphone, 
  Settings, 
  Headphones,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Business Consulting",
    description:
      "Strategic guidance to optimize operations, increase efficiency, and drive sustainable growth.",
    features: ["Market Analysis", "Growth Strategy", "Process Optimization"],
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions built with modern technologies to meet your unique requirements.",
    features: ["Web Applications", "Mobile Apps", "API Integration"],
  },
  {
    icon: Palette,
    title: "Design Services",
    description:
      "Creative design solutions that capture your brand essence and engage your audience.",
    features: ["Brand Identity", "UI/UX Design", "Marketing Materials"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to increase visibility and drive conversions.",
    features: ["SEO Optimization", "Social Media", "Content Strategy"],
  },
  {
    icon: Settings,
    title: "IT Solutions",
    description:
      "Comprehensive IT services to keep your infrastructure secure and running smoothly.",
    features: ["Cloud Services", "Security", "Infrastructure"],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Dedicated support services to ensure your customers always have a positive experience.",
    features: ["24/7 Support", "Training", "Documentation"],
  },
];

const Services = () => {
  return (
    <article>
      {/* Hero Section */}
      <section className="section">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 animate-fade-in opacity-0">Our Services</h1>
            <p className="text-body mt-6 animate-slide-up opacity-0 animate-delay-100">
              Comprehensive solutions tailored to meet your business needs and 
              drive success in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-secondary/30">
        <div className="page-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-lg border border-border bg-card p-8 transition-all hover:shadow-md hover:border-foreground/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="heading-3 mt-6">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2">Our Process</h2>
            <p className="text-body mt-4">
              A proven methodology that ensures successful outcomes.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Discovery", "Planning", "Execution", "Delivery"].map((step, index) => (
              <div key={step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="heading-3 mt-6">{step}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {index === 0 && "Understanding your needs and goals"}
                  {index === 1 && "Developing a comprehensive strategy"}
                  {index === 2 && "Implementing the solution"}
                  {index === 3 && "Ensuring successful deployment"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="page-container text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <div className="mt-8">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Services;
