import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TPackage } from "@/types";

export function PackageCard({ packag }: { packag: TPackage }) {
  return (
    <Link href={"/booking"}>
      <Card className="relative h-full w-full overflow-hidden pt-0 shadow-xs dark:bg-background">
        <AspectRatio className="bg-muted" ratio={16 / 9}>
          <Image
            alt={packag.title}
            className="h-full w-full object-cover"
            fill
            placeholder="blur"
            src={packag.media}
          />
        </AspectRatio>
        <CardHeader>
          <CardTitle className="font-medium text-xl">{packag.title}</CardTitle>
          <CardDescription className="sr-only">
            Description of
            {packag.title}
          </CardDescription>
        </CardHeader>
        <CardFooter className={cn("mt-auto")}>
          <div className="flex items-center gap-2">
            <div
              className={cn(buttonVariants({ size: "icon" }), "rounded-full")}
            >
              <ArrowUpRightIcon />
            </div>
            Book Trip
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
