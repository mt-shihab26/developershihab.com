import { cn } from "~/lib/utils";

const photos = [
    "https://images.pexels.com/photos/30770767/pexels-photo-30770767/free-photo-of-classic-motorcycle-in-kerala-countryside.jpeg",
    "https://images.pexels.com/photos/17353367/pexels-photo-17353367/free-photo-of-modern-motorbike-near-green-tree-in-mountains-landscape.jpeg",
    "https://images.pexels.com/photos/30822622/pexels-photo-30822622/free-photo-of-elegant-woman-posing-in-black-and-white-shadowed-room.jpeg",
    "https://images.pexels.com/photos/30429390/pexels-photo-30429390/free-photo-of-close-up-of-tree-bark-with-textured-pattern.jpeg",
    "https://images.pexels.com/photos/30683994/pexels-photo-30683994/free-photo-of-serene-marshland-in-moody-autumn-landscape.jpeg"
];

const Photos = () => {
    let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

    return (
        <div class="mt-16 sm:mt-20">
            <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {photos.map((image, imageIndex) => (
                    <div
                        class={cn(
                            "relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <img
                            src={image}
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
