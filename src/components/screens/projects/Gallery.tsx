import type { TImage } from "@/content/config";

import { cn } from "@/lib/utils";
import { useState } from "react";

const Gallery = ({ images }: { images: TImage[] }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectedImage = images[selectedIndex];

    return (
        <div className="flex h-full w-full flex-col gap-2 lg:flex-row lg:gap-4">
            <div className="w-full">
                <img
                    src={selectedImage.src.src}
                    alt={selectedImage.alt}
                    className="h-auto w-full rounded-md object-contain"
                />
            </div>
            {images.length > 1 && (
                <div className="relative w-full lg:w-[150px]">
                    <div className="scrollbar-hide flex overflow-x-auto lg:h-full lg:flex-col lg:overflow-y-auto">
                        <div className="flex gap-4 p-1 lg:flex-col">
                            {images.map((image, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <img
                                        src={image.src.src}
                                        alt={image.alt}
                                        className={cn(
                                            "w-20 cursor-pointer rounded-md object-cover lg:w-full",
                                            "ring-2 ring-white ring-offset-2 transition-opacity hover:opacity-90",
                                            {
                                                "ring-green-500": index === selectedIndex
                                            }
                                        )}
                                        onClick={() => setSelectedIndex(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
