import { Link } from "react-router-dom";
import { Target, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To deliver innovative solutions that empower businesses to achieve their full potential and create lasting value.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the most trusted partner for businesses seeking growth, innovation, and sustainable success.",
  },
  {
    icon: Award,
    title: "Values",
    description:
      "Integrity, excellence, collaboration, and continuous improvement guide everything we do.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <article>
      {/* Hero Section */}
      <section className="section">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 animate-fade-in opacity-0">About Us</h1>
            <p className="text-body mt-6 animate-slide-up opacity-0 animate-delay-100">
              We are a team of passionate professionals dedicated to helping 
              businesses thrive in an ever-evolving marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-secondary/30">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <span className="text-4xl font-bold text-muted-foreground">Our Story</span>
            </div>
            <div>
              <h2 className="heading-2">Building Success Together</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to bridge the gap between ambition and 
                  achievement, our company has grown from a small team to a 
                  full-service organization serving clients worldwide.
                </p>
                <p>
                  We believe that every business deserves access to professional 
                  expertise that can transform challenges into opportunities. 
                  Our approach combines strategic thinking with practical 
                  execution to deliver results that matter.
                </p>
                <p>
                  Today, we continue to evolve and adapt, staying ahead of 
                  industry trends while maintaining the personal touch that 
                  sets us apart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2">What Drives Us</h2>
            <p className="text-body mt-4">
              Our core principles guide every decision and interaction.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-lg border border-border bg-card"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="heading-3 mt-6">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="page-container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold lg:text-5xl">{stat.value}</div>
                <div className="mt-2 text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="page-container text-center">
          <h2 className="heading-2">Want to Work With Us?</h2>
          <p className="text-body mx-auto mt-4 max-w-2xl">
            We're always looking to connect with businesses that share our 
            passion for excellence.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
