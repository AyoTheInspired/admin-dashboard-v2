import React from "react";
import styled from "styled-components";

function CreateUser() {
	return (
		<Div>
			<h1 className="newUserTitle">Create New User</h1>

			<form className="newUserForm">
				<div className="newUserItem">
					<label>Username</label>

					<input type="text" placeholder="ayoinspired" />
				</div>
				<div className="newUserItem">
					<label>Full Name</label>

					<input type="text" placeholder="Ayo Abimbola" />
				</div>
				<div className="newUserItem">
					<label>Email</label>

					<input type="email" placeholder="ayoinspired@gmail.com" />
				</div>
				<div className="newUserItem">
					<label>Password</label>

					<input type="password" placeholder="Password" />
				</div>
				<div className="newUserItem">
					<label>Phone</label>

					<input type="number" placeholder="123456789" />
				</div>
				<div className="newUserItem">
					<label>Address</label>

					<input type="email" placeholder="42, Campton Avenue, NY" />
				</div>

				<div className="newUserItem">
					<label>Gender</label>

					<div className="newUserGender">
						<input type="radio" name="gender" id="male" value="male" />
						<label for="male">Male</label>

						<input type="radio" name="gender" id="female" value="female" />
						<label for="female">Female</label>

						<input type="radio" name="gender" id="others" value="others" />
						<label for="others">Others</label>
					</div>
				</div>

				<div className="newUserItem">
					<label>Active</label>
					<select name="active" id="active" className="newUserSelect">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>

				<button className="newUserButton">Create</button>
			</form>
		</Div>
	);
}

export default CreateUser;

const Div = styled.div`
	flex: 4;

	.newUserButton {
		width: 200px;
		border: none;
		background-color: darkblue;
		color: #fff;
		padding: 7px 10px;
		font-weight: 600;
		border-radius: 10px;
		margin-top: 30px;
		cursor: pointer;
	}

	.newUserSelect {
		height: 40px;
		border-radius: 5px;
		padding-left: 5px;
	}

	.newUserForm {
		display: flex;
		flex-wrap: wrap;
	}

	.newUserGender {
		input {
			margin-top: 15px;
		}

		label {
			margin: 10px;
			font-size: 18px;
			color: #555;
		}
	}

	.newUserItem {
		width: 400px;
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		margin-right: 20px;

		input {
			height: 20px;
			padding: 10px;
			border: 1px solid gray;
			border-radius: 5px;
		}

		label {
			margin-bottom: 10px;
			font-size: 14px;
			font-weight: 600;
			color: rgb(151, 150, 150);
		}
	}
`;
