import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TPackage } from "@/types";

export function PackageCard({
  packag,
  isDestination,
}: {
  packag: TPackage;
  isDestination?: boolean;
}) {
  return (
    <Link href={"/packages"}>
      <Card className="relative h-full w-full overflow-hidden pt-0 shadow-xs dark:bg-background">
        {packag.mediaType === "video" ? (
          <AspectRatio className="bg-muted" ratio={16 / 9}>
            <video
              autoPlay
              className="aspect-video h-full w-full object-cover"
              loop
              playsInline
              src={packag.media}
            >
              <track kind="captions" src={packag.media} />
            </video>
          </AspectRatio>
        ) : (
          <AspectRatio className="bg-muted" ratio={16 / 9}>
            <Image
              alt={packag.title}
              className="h-full w-full object-cover"
              fill
              src={packag.media}
            />
          </AspectRatio>
        )}
        <CardHeader>
          <CardTitle className="font-medium text-xl lg:text-2xl">
            {packag.title}
          </CardTitle>
          <CardDescription className="sr-only">
            Description of
            {packag.title}
          </CardDescription>
        </CardHeader>
        <CardFooter className={cn("mt-auto", isDestination && "hidden")}>
          <div className="flex items-center gap-2">
            <Button className="rounded-full" size="icon">
              <ArrowUpRightIcon />
            </Button>
            <span className="uppercase">Book Trip</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
