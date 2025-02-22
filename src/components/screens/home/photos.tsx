import { rotated_photos } from "~/config/rotated_photos";
import { cn } from "~/lib/utils";

const Photos = () => {
    let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

    return (
        <div class="mt-16 sm:mt-20">
            <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {rotated_photos.map((image, imageIndex) => (
                    <div
                        class={cn(
                            "relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <img
                            src={image.src}
                            alt=""
                            loading="lazy"
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
