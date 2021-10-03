import React from "react";
import { ArrowDownward } from "@material-ui/icons";
import styled from "styled-components";

function FeaturedInfo() {
	return (
		<Div>
			<div className="featuredItem">
				<span className="featuredTitle">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$ 2,415</span>
					<span className="featuredMoneyRate">
						{" "}
						-11.4 <ArrowDownward />
					</span>
				</div>

				<span className="featuredSub">Compared to last month</span>
			</div>
		</Div>
	);
}

export default FeaturedInfo;

const Div = styled.div``;
