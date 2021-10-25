import {
	MailOutlined,
	CalendarToday,
	LocationSearching,
	PermIdentity,
	PhoneAndroid,
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
				<div className="userUpdate"></div>
			</div>
		</Div>
	);
}

export default SingleUser;

const Div = styled.div`
	flex: 4;
	padding: 20px;

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
