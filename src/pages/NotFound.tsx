import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="page-container text-center">
        <div className="animate-fade-in opacity-0">
          <span className="text-8xl font-bold text-muted-foreground/30 sm:text-9xl">
            404
          </span>
        </div>
        <h1 className="heading-2 mt-4 animate-slide-up opacity-0 animate-delay-100">
          Page Not Found
        </h1>
        <p className="text-body mx-auto mt-4 max-w-md animate-slide-up opacity-0 animate-delay-200">
          Sorry, we couldn't find the page you're looking for. It might have 
          been moved or doesn't exist.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up opacity-0 animate-delay-300">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
