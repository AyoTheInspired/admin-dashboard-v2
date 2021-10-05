import React from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { usersColumns, usersRows } from "../app-data/users-list";

function UserList() {
	return (
		<Div>
			<DataGrid
				rows={usersRows}
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
	padding: 25px 10px;

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
