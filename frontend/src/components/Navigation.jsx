import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, LogOut, LayoutDashboard } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ModeToggle } from "@/components/mode-toggle";

import { useAuth } from "@/hooks/useAuth";

const navItems = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export default function Navigation() {
  const { user, logout } = useAuth();

  const location = useLocation();

  const [open, setOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const getDashboardLink = () => {
    if (!user) return "/login";

    if (user.role === "ADMIN") return "/admin";

    if (user.role === "OFFICER") return "/officer";

    return "/citizen";
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const closeMobile = () => {
    setOpen(false);
  };

  return (
    <header
      className="
      sticky top-0 z-50 
      w-full 
      border-b 
      bg-background/95 
      backdrop-blur
      "
    >
      <div
        className="
        flex 
        items-center 
        justify-between 
        px-4 
        md:px-6 
        py-3
        "
      >
        {/* Logo */}

        <Link
          to="/"
          className="
          font-bold 
          text-xl 
          whitespace-nowrap
          "
        >
          Smart City
        </Link>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-5">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link to={item.path}>
                    <Button variant={isActive(item.path) ? "default" : "ghost"}>
                      {item.label}
                    </Button>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />

          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="
                w-10
                h-10
                rounded-full
                bg-primary
                text-primary-foreground
                flex
                items-center
                justify-center
                font-bold
                "
              >
                {user.fullName?.charAt(0).toUpperCase()}
              </button>

              {profileOpen && (
                <>
                  <div
                    className="
                  absolute
                  right-0
                  mt-3
                  w-64
                  rounded-lg
                  border
                  bg-background
                  shadow-lg
                  z-50
                  "
                  >
                    <div
                      className="
                    p-4
                    border-b
                    "
                    >
                      <p className="font-semibold">{user.fullName}</p>

                      <p
                        className="
                      text-xs
                      text-muted-foreground
                      "
                      >
                        {user.email}
                      </p>
                    </div>

                    <Link
                      to={getDashboardLink()}
                      onClick={() => setProfileOpen(false)}
                      className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-3
                    hover:bg-accent
                    "
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>

                    <button
                      onClick={() => {
                        logout();

                        setProfileOpen(false);
                      }}
                      className="
                    w-full
                    flex
                    items-center
                    gap-2
                    px-4
                    py-3
                    text-red-500
                    hover:bg-accent
                    "
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>

                  <div
                    className="
                  fixed
                  inset-0
                  z-40
                  "
                    onClick={() => setProfileOpen(false)}
                  />
                </>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>

              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile */}

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
              flex
              flex-col
              gap-5
              pt-8
              "
            >
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={closeMobile}>
                  <Button
                    className="w-full justify-start"
                    variant={isActive(item.path) ? "default" : "ghost"}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}

              <ModeToggle />

              {user ? (
                <div className="flex flex-col gap-3">
                  <div
                    className="
                    border
                    rounded-lg
                    p-4
                    text-center
                    "
                  >
                    <div
                      className="
                      w-14
                      h-14
                      mx-auto
                      rounded-full
                      bg-primary
                      text-primary-foreground
                      flex
                      items-center
                      justify-center
                      text-xl
                      font-bold
                      "
                    >
                      {user.fullName?.charAt(0).toUpperCase()}
                    </div>

                    <p className="font-semibold mt-2">{user.fullName}</p>

                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>

                  <Link to={getDashboardLink()} onClick={closeMobile}>
                    <Button variant="outline" className="w-full">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>

                  <Button
                    onClick={() => {
                      logout();

                      closeMobile();
                    }}
                    variant="destructive"
                    className="w-full"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/login" onClick={closeMobile}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>

                  <Link to="/register" onClick={closeMobile}>
                    <Button className="w-full">Register</Button>
                  </Link>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
