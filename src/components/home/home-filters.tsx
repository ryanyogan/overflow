"use client";

import { HomePageFilters } from "@/constants/filters";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function HomeFilters() {
  const pathname = usePathname();
  const isActive = false;

  return (
    <div className="mt-10 flex-wrap gap-3 md:flex hidden">
      {HomePageFilters.map((item) => (
        <Button
          className={cn(
            "body-medium rounded-lg px-6 py-3 capitalize shadow-none",
            isActive
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500 dark:bg-dark-300 dark:text-light-500"
          )}
          key={item.value}
          onClick={() => {}}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
