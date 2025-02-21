import { cn } from "~/lib/utils";

import image3 from "~/images/photos/1102.jpg";
import image2 from "~/images/photos/20150716-070618871-3.jpg";
import image5 from "~/images/photos/band.jpg";
import image1 from "~/images/photos/bike.jpg";
import image4 from "~/images/photos/BW013.jpg";

const Photos = () => {
    let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

    return (
        <div class="mt-16 sm:mt-20">
            <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
                    <div
                        class={cn(
                            "relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <img
                            src={image.src}
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            class="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Photos };
