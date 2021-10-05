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
	// { field: "username", headerName: "Username", width: 180 },
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
		headerName: "Action",
		width: 150,
		renderCell: (params) => (
			<div>
				<button className="userEditBtn">Edit</button>
				<button className="userDeleteBtn">
					<DeleteOutline />
				</button>
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
		avatar: "https://robohash.org/idestest.png?size=50x50&set=set1",
		email: "klandells0@technorati.com",
	},
	{
		id: 2,
		username: "Dusty Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "https://robohash.org/eosexrecusandae.png?size=50x50&set=set1",
		email: "dneicho1@networksolutions.com",
	},
	{
		id: 3,
		username: "Harmony Snow",
		status: "active",
		transaction: "$120.00",
		avatar:
			"https://robohash.org/voluptatibusetpossimus.png?size=50x50&set=set1",
		email: "hspain2@nifty.com",
	},
	{
		id: 4,
		username: "Ashton Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "https://robohash.org/rationeindistinctio.png?size=50x50&set=set1",
		email: "adymidowski3@etsy.com",
	},
	{
		id: 5,
		username: "Meg Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "https://robohash.org/consequunturvelquasi.png?size=50x50&set=set1",
		email: "mwhittle4@chronoengine.com",
	},
	{
		id: 6,
		username: "Joelynn Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "https://robohash.org/occaecatiiustoet.png?size=50x50&set=set1",
		email: "jchrishop5@e-recht24.de",
	},
	{
		id: 7,
		username: "Roberto Snow",
		status: "active",
		transaction: "$120.00",
		avatar:
			"https://robohash.org/suntrecusandaequibusdam.png?size=50x50&set=set1",
		email: "rkonneke6@so-net.ne.jp",
	},
	{
		id: 8,
		username: "Darin Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "https://robohash.org/quirerumomnis.png?size=50x50&set=set1",
		email: "docleary7@privacy.gov.au",
	},
	{
		id: 9,
		username: "Deonne Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "https://robohash.org/porroetvoluptatem.png?size=50x50&set=set1",
		email: "dellerton8@about.me",
	},
	{
		id: 10,
		username: "Frederigo Snow",
		status: "active",
		transaction: "$120.00",
		avatar: "https://robohash.org/eteligendifacilis.png?size=50x50&set=set1",
		email: "florent9@godaddy.com",
	},
];
