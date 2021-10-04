import {
	LineStyle,
	Timeline,
	TrendingUp,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	WorkOutline,
	Report,
} from "@material-ui/icons";

export const sidebarItems = [
	{
		id: 1,
		title: "DashBoard",
		subItems: [
			{ Icon: LineStyle, text: "Home", selected: true },
			{ Icon: Timeline, text: "Analytics" },
			{ Icon: TrendingUp, text: "Sales" },
		],
	},
	{
		id: 2,
		title: "Quick Menu",
		subItems: [
			{ Icon: LineStyle, text: "Users" },
			{ Icon: Storefront, text: "Products" },
			{ Icon: AttachMoney, text: "Transactions" },
			{ Icon: BarChart, text: "Reports" },
		],
	},
	{
		id: 3,
		title: "Notifications",
		subItems: [
			{ Icon: MailOutline, text: "Mail" },
			{ Icon: DynamicFeed, text: "Feedback" },
			{ Icon: ChatBubbleOutline, text: "Messages" },
		],
	},
	{
		id: 4,
		title: "Staff",
		subItems: [
			{ Icon: WorkOutline, text: "Manage" },
			{ Icon: Timeline, text: "Analytics" },
			{ Icon: Report, text: "Reports" },
		],
	},
];

export const featuredItems = [
	{ id: Math.random(), title: "Revenue", amount: "2,415", margin: -11.4 },
	{ id: Math.random(), title: "Sales", amount: "4,415", margin: -1.4 },
	{ id: Math.random(), title: "Cost", amount: "2,225", margin: "+2.4" },
];
