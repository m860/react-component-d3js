/**
 * Created by jean.h.ma on 24/07/2017.
 */
import React from 'react'
import BasePage from './BasePage'
import Layout from '../components/LayoutWithNavigation'
import * as d3 from 'd3'

export default class Shapes extends BasePage{
	render(){
		return (
			<Layout>
				<svg id="chart"></svg>
			</Layout>
		);
	}
	componentDidMount(){
		super.componentDidMount();
		const chart=d3.select('#chart')
			.attr('width',800)
			.attr("height",600)
			.attr("style","background-color:silver;fill:gray;stroke:black");
		//line
		chart.append('path')
			.attr('d',"M10,10 l100,0")

		//circle
		chart.append('circle')
			.attr('cx','50')
			.attr('cy',50)
			.attr('r',25);

		//rect
		chart.append('rect')
			.attr('x',10)
			.attr('y',80)
			.attr('width',100)
			.attr('height',50)

		//rect
		chart.append('rect')
			.attr('x',10)
			.attr('y',140)
			.attr('rx',20)
			.attr('ry',20)
			.attr('width',100)
			.attr('height',50)
	}
}