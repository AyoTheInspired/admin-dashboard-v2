import React from "react";
import styled from "styled-components";
import { transactions } from "../app-data/transactions";

function LargeWidget() {
	return (
		<Div>
			<h3 className="title">Latest Transactions</h3>
			<table>
				<tr>
					<th>Client's Name</th>
					<th>Date</th>
					<th>Amount</th>
					<th>Status</th>
				</tr>
				{transactions.map(
					({ id, clientName, imgSrc, date, amount, status }) => (
						<tr key={id}>
							<td className="user">
								<img src={imgSrc} alt={clientName} />
								<span className="userName"> {clientName} </span>
							</td>
							<td className="date"> {date} </td>
							<td className="amount">${amount}</td>
							<td className="status">
								<StyledButton status={status}>{status}</StyledButton>
							</td>
						</tr>
					)
				)}
			</table>
		</Div>
	);
}

export default LargeWidget;

const Div = styled.div`
	flex: 0.72;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	padding: 0 20px;

	.title {
		font-size: 25px;
		font-weight: bold;
	}

	img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
		margin-right: 13px;
	}

	table {
		width: 100%;
		border-spacing: 20px;

		th {
			text-align: left;
		}

		.user {
			display: flex;
			align-items: center;
			font-weight: 600;
		}

		.date,
		.amount {
			font-weight: 300;
		}
	}
`;

const StyledButton = styled.button`
	background-color: #e5faf2;
	padding: 5px 7px;
	border: none;
	border-radius: 10px;
	color: ${({ status }) =>
		status === "Approved"
			? "#3bb077"
			: status === "Pending"
			? "#2a7ade"
			: "#d94087"};
`;
