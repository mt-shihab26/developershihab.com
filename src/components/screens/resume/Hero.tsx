import { socials } from '@/config/site';

import { CompanyIcon, LinkedinIcon, LocationIcon } from '@/components/composite/icons';

import portrait from '@/assets/portrait.jpg';

import B from '@/components/elements/B';
import ContactEmail from '@/components/elements/ContactEmail';
import I from '@/components/elements/I';

import Label from './Label';

const Hero = () => {
	return (
		<section className="flex flex-col items-center gap-y-7">
			<img
				src={portrait.src}
				alt="Shihab Mahamud Profile"
				className="h-28 w-auto rounded-full bg-[#FFBE98] p-2"
				loading="eager"
			/>
			<div className="flex flex-col items-center gap-y-4">
				<p className="text-[10px] text-muted-foreground lg:text-base">
					Programmer | Problem Solver | Full-stack Developer
				</p>
				<p className="mb-5 px-2 text-center text-xl lg:w-3/4 lg:px-0 lg:text-3xl">
					<B>Hello, I'm Shihab.</B> I'm a <B>full-stack developer</B> with <B>3 years</B> of
					experience, and I enjoy building for <I>the web</I>. My focus is <I>Laravel</I> &{' '}
					<I>React</I>
				</p>
				<ContactEmail />
				<div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
					<Label title="Finnext.co" href="https://finnext.co" target="_blank">
						<CompanyIcon className="h-5 w-5" />
					</Label>
					<Label title="Dhaka, Bangladesh">
						<LocationIcon className="h-5 w-5" />
					</Label>
					<Label title="Connect on Linkedin" href={socials.linkedin} target="_blank">
						<LinkedinIcon className="h-5 w-5 text-foreground/75" />
					</Label>
				</div>
			</div>
		</section>
	);
};

export default Hero;
