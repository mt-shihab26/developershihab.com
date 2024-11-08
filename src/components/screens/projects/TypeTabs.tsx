import type { TType } from '@/content/config';
import type { TNode } from '@/types';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type TTypeTabsValue = TType | 'all';

const TypeTabs = ({
	value,
	onChange,
	children
}: {
	value: TTypeTabsValue;
	onChange: (value: TTypeTabsValue) => void;
	children: TNode;
}) => {
	return (
		<Tabs value={value} onValueChange={(value: TTypeTabsValue) => onChange(value)}>
			<TabsList className="mb-8">
				<TabsTrigger value="all">
					All <span className="ml-1 hidden lg:block">Projects</span>
				</TabsTrigger>
				<TabsTrigger value="client">
					Client <span className="ml-1 hidden lg:block">Projects</span>
				</TabsTrigger>
				<TabsTrigger value="demo">
					Demo <span className="ml-1 hidden lg:block">Projects</span>
				</TabsTrigger>
				<TabsTrigger value="tool">Tools</TabsTrigger>
			</TabsList>
			<TabsContent value={value}>{children}</TabsContent>
		</Tabs>
	);
};

export default TypeTabs;
