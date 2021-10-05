import { DeleteOutline } from "@material-ui/icons";

export const usersColumns = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "avatar",
		headerName: "User",
		renderCell: (params) => (
			<div className="userAvtContaner flexed">
				<img
					src={params.row.avatar}
					alt={params.row.username}
					className="userAvt"
				/>
				{params.row.username}
			</div>
		),
		width: 180,
	},
	{ field: "email", headerName: "Email", width: 230 },
	{
		field: "status",
		headerName: "Status",
		width: 120,
	},
	{
		field: "transaction",
		headerName: "Transaction Amount",
		width: 200,
	},

	{
		field: "action",
		headerName: "Actions",
		sortable: false,
		width: 150,
		renderCell: (params) => (
			<div className="flex-btw">
				<button className="userEditBtn">Edit</button>
				<DeleteOutline className="userDeleteBtn" />
			</div>
		),
	},
];

export const usersRows = [
	{
		id: 1,
		username: "Karlee Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/ayo.jpg",
		email: "klandells0@technorati.com",
	},
	{
		id: 2,
		username: "Dusty Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/brian.jpg",
		email: "dneicho1@networksolutions.com",
	},
	{
		id: 3,
		username: "Harmony Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/christabel.jpg",
		email: "hspain2@nifty.com",
	},
	{
		id: 4,
		username: "Ashton Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/claudia.jpg",
		email: "adymidowski3@etsy.com",
	},
	{
		id: 5,
		username: "Meg Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/inspired.jpg",
		email: "mwhittle4@chronoengine.com",
	},
	{
		id: 6,
		username: "Joelynn Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/jason.jpg",
		email: "jchrishop5@e-recht24.de",
	},
	{
		id: 7,
		username: "Roberto Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/brian.jpg",
		email: "rkonneke6@so-net.ne.jp",
	},
	{
		id: 8,
		username: "Darin Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/christabel.jpg",
		email: "docleary7@privacy.gov.au",
	},
	{
		id: 9,
		username: "Deonne Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/claudia.jpg",
		email: "dellerton8@about.me",
	},
	{
		id: 10,
		username: "Frederigo Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "/users/jason.jpg",
		email: "florent9@godaddy.com",
	},
];
