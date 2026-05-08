"use client";

import { usePathname } from "next/navigation";
import { routes } from "@/resources";
import NotFound from "@/app/not-found";

function checkRouteEnabled(pathname: string | null): boolean {
  if (!pathname) return false;

  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }

  const dynamicRoutes = ["/blog", "/work"] as const;
  for (const route of dynamicRoutes) {
    if (pathname.startsWith(route) && routes[route]) {
      return true;
    }
  }

  return false;
}

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();

  // Avoid swapping in a stub view while pathname hydrates — that changes document height
  // mid-navigation and interferes with scroll position.
  if (!pathname || !checkRouteEnabled(pathname)) {
    return !pathname ? <>{children}</> : <NotFound />;
  }

  return <>{children}</>;
};

export { RouteGuard };
