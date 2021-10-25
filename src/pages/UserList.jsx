import { useState } from "react";
import styled from "styled-components";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { usersRows } from "../app-data/users-list";

function UserList() {
	const [data, setData] = useState(usersRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const usersColumns = [
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
					<Link to={`/user/${params.row.id}`}>
						<button className="userEditBtn">Edit</button>
					</Link>
					<DeleteOutline
						className="userDeleteBtn"
						onClick={() => handleDelete(params.row.id)}
					/>
				</div>
			),
		},
	];

	return (
		<Div>
			<DataGrid
				rows={data}
				columns={usersColumns}
				disableSelectionOnClick
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
			/>
		</Div>
	);
}

export default UserList;

const Div = styled.div`
	flex: 4;
	padding: 25px 10px 0px 10px;

	.userAvt {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
		margin-right: 8px;
	}

	.userEditBtn {
		border: none;
		border-radius: 10px;
		padding: 5px 10px;
		background-color: #3bb077;
		color: #fff;
		cursor: pointer;
		margin-right: 20px;
	}

	.userDeleteBtn {
		color: red;
		cursor: pointer;
	}
`;
