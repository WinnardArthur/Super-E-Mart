import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";

type GalleryTabProps = {
  image: ImageType;
};

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative aspect-square flex items-center justify-center cursor-pointer rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>

          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
