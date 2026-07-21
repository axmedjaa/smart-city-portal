import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Error = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-destructive/10 p-4">
              <AlertTriangle className="h-12 w-12 text-destructive" />
            </div>
          </div>

          <CardTitle className="text-4xl font-bold">404</CardTitle>

          <CardDescription className="text-base mt-2">
            Page Not Found
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <p className="text-muted-foreground">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>

          <Button asChild className="w-full">
            <Link to="/" className="flex items-center justify-center gap-2">
              <Home className="mr-2 h-4 w-4" />
              Back To Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default Error;
