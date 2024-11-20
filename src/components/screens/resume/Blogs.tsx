import type { TBlog } from '@/content/config';

import FormattedDate from '@/components/FormattedDate';
import More from './More';
import Section from './Section';

const Item = ({ withDesc = false, blog }: { withDesc?: boolean; blog: TBlog }) => {
	const {
		data: { title, description, date, draft },
		slug
	} = blog;

	const displayDate = date.updated ?? date.publish;

	return (
		<li className="flex flex-col gap-2 sm:flex-row sm:gap-x-4 [&_q]:basis-full">
			<FormattedDate date={displayDate} className="min-w-[120px] text-muted-foreground" />
			<div>
				{draft && <span className="text-red-500">(Draft) </span>}
				<a href={`/blogs/${slug}?back=/`} className="transition-all hover:text-muted-foreground">
					{title}
				</a>
				{withDesc && (
					<p className="line-clamp-3 block text-sm italic text-muted-foreground">{description}</p>
				)}
			</div>
		</li>
	);
};

const Blogs = ({ blogs }: { blogs: TBlog[] }) => {
	return (
		<>
			{blogs.length > 0 && (
				<Section title="Posts">
					<ul className="flex flex-col gap-y-2">
						{blogs.map((blog) => (
							<li className="flex flex-col gap-x-2 sm:flex-row">
								<Item blog={blog} />
							</li>
						))}
					</ul>
					<div className="flex justify-end">
						<More href="/blogs">See all blogs</More>
					</div>
				</Section>
			)}
		</>
	);
};

export default Blogs;
