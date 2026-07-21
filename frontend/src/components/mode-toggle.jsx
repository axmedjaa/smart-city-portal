import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
export function ModeToggle() {
  const {setTheme , resolvedTheme} = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <Button
      variant="outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {
        isDark ? (
          <SunIcon className="w-4 h-4" />
        ) : (
          <MoonIcon className="w-4 h-4" />
        )
      }
    </Button>
  );
}