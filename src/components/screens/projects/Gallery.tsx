import type { TImage } from '@/content/config';
import { cn } from '@/lib/utils';

import { useState } from 'react';

const Gallery = ({ images }: { images: TImage[] }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectedImage = images[selectedIndex];

	return (
		<div className="flex h-full w-full flex-col gap-2 lg:flex-row lg:gap-4">
			<div>
				<img
					src={selectedImage.src.src}
					alt={selectedImage.alt}
					className="overflow-hidden rounded-md object-contain"
				/>
			</div>
			<div className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
				{images.map((image, index) => (
					<img
						key={index}
						src={image.src.src}
						alt={image.alt}
						className={cn('w-[100px] overflow-hidden rounded-md object-contain lg:w-[500px]', {
							'border-2 border-green-500': index === selectedIndex
						})}
						onClick={() => setSelectedIndex(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default Gallery;
