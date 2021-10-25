import {
	MailOutlined,
	CalendarToday,
	LocationSearching,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from "@material-ui/icons";
import styled from "styled-components";

function SingleUser() {
	return (
		<Div>
			<div className="userTitleContainer flex-btw">
				<h1 className="userTitle">Edit User</h1>

				<button className="userAddButton">Create</button>
			</div>

			<div className="userContainer ">
				<div className="userShow">
					<div className="userShowTop">
						<img src="/users/ayo.jpg" alt="user" />

						<div className="userShowTopTitle">
							<span className="userShowUsername">Ayo Abimbola</span>
							<span className="userShowUserTitle">Web Developer</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>

						<div className="userShowInfo">
							<PermIdentity className="userShowIcon" />
							<span className="userShowInfoTitle">ayotheinspired</span>
						</div>

						<span className="userShowTitle">Contact Details</span>

						<div className="userShowInfo">
							<CalendarToday className="userShowIcon" />
							<span className="userShowInfoTitle">08134327417</span>
						</div>

						<div className="userShowInfo">
							<PhoneAndroid className="userShowIcon" />
							<span className="userShowInfoTitle">10/12/1990</span>
						</div>

						<div className="userShowInfo">
							<MailOutlined className="userShowIcon" />
							<span className="userShowInfoTitle">
								ayotheinspired@gmail.com
							</span>
						</div>

						<div className="userShowInfo">
							<LocationSearching className="userShowIcon" />
							<span className="userShowInfoTitle">42, Campton Avenue, NY</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>

					<form action="" className="userUpdateForm">
						<div className="userFormLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="ayotheinspired"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input
									type="text"
									placeholder="ayoinspired@gmail.com"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Phone</label>
								<input
									type="text"
									placeholder="08134327417"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Address</label>
								<input
									type="text"
									placeholder="42, Campton Avenue, NY"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userFormRight">
							<div className="userUpdateUpload">
								<img
									src="/users/ayo.jpg"
									className="userUpdateImg"
									alt="user"
								/>

								<label htmlFor="file">
									{" "}
									<Publish className="userUpdateIcon" />{" "}
								</label>
								<input type="file" style={{ display: "none" }} id="file" />
							</div>

							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</Div>
	);
}

export default SingleUser;

const Div = styled.div`
	flex: 4;
	padding: 20px;

	.userUpdateButton {
		border-radius: 5px;
		border: none;
		padding: 5px;
		cursor: pointer;
		background-color: darkblue;
		color: #fff;
		font-weight: bold;
	}

	.userUpdateIcon {
		cursor: pointer;
	}

	.userUpdateUpload {
		display: flex;
		align-items: center;
	}

	.userFormRight {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.userUpdateItem {
		display: flex;
		flex-direction: column;
		margin-top: 10px;

		label {
			margin-bottom: 5px;
			font-size: 14px;
		}

		input {
			border: none;
			width: 250px;
			border-bottom: 1px solid gray;
			height: 30px;

			&:focus {
				outline-width: 0;
			}
		}
	}

	.userUpdateTitle {
		font-size: 24px;
		font-weight: 600;
	}

	.userUpdateForm {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}

	.userUpdateImg {
		width: 100px;
		height: 100px;
		border-radius: 10px;
		object-fit: cover;
		margin-right: 20px;
	}

	.userShowInfo {
		display: flex;
		align-items: center;
		margin: 20px 0px;
		color: #444;
	}

	.userShowIcon {
		font-size: 16px !important;
	}

	.userShowInfoTitle {
		margin-left: 10px;
	}

	.userShowBottom {
		margin-top: 20px;
	}

	.userShowTitle {
		font-size: 14px;
		font-weight: 600;
		color: rgb(175, 170, 170);
	}

	.userShowTop {
		display: flex;
		align-items: center;

		img {
			width: 40px;
			height: 38px;
			border-radius: 50%;
			object-fit: cover;
		}

		.userShowTopTitle {
			display: flex;
			flex-direction: column;
			margin-left: 20px;
		}

		.userShowUsername {
			font-weight: 600;
			margin-bottom: 7px;
		}

		.userShowUserTitle {
			font-weight: 300;
		}
	}

	.userContainer {
		display: flex;
		margin-top: 20px;
	}

	.userShow {
		flex: 1;
		padding: 20px;
		box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	}

	.userUpdate {
		flex: 2;
		margin-left: 20px;
		padding: 20px;
		box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	}

	.userAddButton {
		width: 80px;
		border: none;
		padding: 5px;
		background: teal;
		border-radius: 5px;
		cursor: pointer;
		color: #fff;
		font-size: 16px;
	}
`;
