"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1901424623614003"); //don't forget to change this
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
};
