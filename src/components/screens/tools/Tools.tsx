import tools from '@/config/tools';

import Back from '@/components/elements/Back';
import Tool from './Tool';

const Tools = () => {
	return (
		<div className="w-full">
			<Back href="/" />
			<div className="mt-5 flex w-full flex-col gap-y-10">
				<div>
					<h1 className="mb-1 text-2xl font-bold">Tools</h1>
					<p>Tools & software I use daily</p>
				</div>
				{tools.map((tool) => (
					<div className="flex flex-col gap-y-4 rounded-xl border border-border px-3 py-5 sm:gap-y-6">
						<h2 className="px-2 text-lg font-medium">{tool.label}</h2>
						<div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
							{tool.tools.map((t) => (
								<Tool tool={t} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tools;
