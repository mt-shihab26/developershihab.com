import type { TType } from '@/content/config';
import type { TNode } from '@/types';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type TTypeTabsValue = TType | 'all';

const TypeTabs = ({ value, children }: { value: TTypeTabsValue; children: TNode }) => {
	return (
		<Tabs value={value}>
			<TabsList className="mb-8">
				<a href="/projects">
					<TabsTrigger value="all">
						All <span className="ml-1 hidden lg:block">Projects</span>
					</TabsTrigger>
				</a>
				<a href="/projects/clients">
					<TabsTrigger value="client">
						Client <span className="ml-1 hidden lg:block">Projects</span>
					</TabsTrigger>
				</a>
				<a href="/projects/demos">
					<TabsTrigger value="demo">
						Demo <span className="ml-1 hidden lg:block">Projects</span>
					</TabsTrigger>
				</a>
				<a href="/projects/tools">
					<TabsTrigger value="tool">Tools</TabsTrigger>
				</a>
			</TabsList>
			<TabsContent value={value}>{children}</TabsContent>
		</Tabs>
	);
};

export default TypeTabs;
