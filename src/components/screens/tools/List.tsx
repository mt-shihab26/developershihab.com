import tools from '@/config/tools';

import Back from '@/components/Back';

const List = () => {
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
								<a
									className="group relative hover:bg-transparent"
									href={t.href}
									id={t.name}
									target="_blank"
								>
									<div className="relative flex flex-row items-center gap-x-4 px-2 py-0.5 transition-all">
										<div className="absolute -inset-0 z-10 rounded-lg border border-border bg-muted opacity-0 transition-all group-hover:opacity-50" />
										<t.icon className="z-20 h-10 w-10 rounded-lg bg-muted p-2" />
										<div className="z-20 flex flex-col">
											<h3 className="font-medium">{t.name}</h3>
											<p className="text-muted-foreground">{t.description}</p>
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default List;
