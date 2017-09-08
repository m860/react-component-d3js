/**
 * Created by jean.h.ma on 2/6/17.
 */
import React from "react";
import BasePage from "./BasePage";
import LayoutWithNav from "../components/LayoutWithNavigation";
import {getDefinedPaths} from "../config/routes.config";
import {Link} from "react-router";

export default class Index extends BasePage {
	constructor(props) {
		super(props);
		this._paths = getDefinedPaths().reverse();
	}

	render() {
		return (
			<LayoutWithNav>
				<ol>
					{this._paths.map((p, i)=>(
						<li key={i} style={{listStyle:"inherit"}}>
							<Link to={p.url}>{p.name}</Link>
						</li>
					))}
				</ol>
			</LayoutWithNav>
		);
	}
}
