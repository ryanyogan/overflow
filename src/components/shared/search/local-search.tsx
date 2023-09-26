"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  className?: string;
}

export default function LocalSearch({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rouded-[10px] px-4",
        className
      )}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          className="cursor-pointer"
          alt="search icon"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outlone-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          className="cursor-pointer"
          alt="search icon"
        />
      )}
    </div>
  );
}
