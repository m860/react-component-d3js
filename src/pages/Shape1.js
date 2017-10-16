/**
 * Created by jean.h.ma on 24/07/2017.
 */
import React from 'react'
import BasePage from './BasePage'
import Layout from '../components/LayoutWithNavigation'
import * as d3 from 'd3'

export default class extends BasePage {
	render() {
		return (
			<Layout>
				<svg id="chart"></svg>
			</Layout>
		);
	}

	componentDidMount() {
		super.componentDidMount();
		const chart = d3.select('#chart')
			.attr('width', 800)
			.attr("height", 600)
			.attr("style", "background-color:silver;fill:gray;stroke:black");
		const center = {
			x: 400,
			y: 300
		};

		const radius1 = 100;
		const radius2 = 75;
		const circleLength = Math.PI * radius1 * 2;
		const dashCount = 30;
		const strokeWidth = 20;


		const dashCircle = chart.append('circle')
			.attr('cx', center.x)
			.attr('cy', center.y)
			.attr('r', radius1)
			.attr('stroke-dasharray', circleLength / (dashCount * 2))
			.attr('stroke-dashoffset', 0)
			.attr('stroke-width', strokeWidth)
			.attr('stroke', '#0F5A76')
			.attr('fill', 'none');

		const solidCircle = chart.append('circle')
			.attr('cx', center.x)
			.attr('cy', center.y)
			.attr('r', radius1)
			.attr('fill', 'none')
			.attr('stroke-dasharray', circleLength)
			.attr('stroke-dashoffset', circleLength / 4)
			.attr('stroke-width', strokeWidth + 1)
			.attr('stroke', '#48DE9B');

		const bgCircle = chart.append('circle')
			.attr('cx', center.x)
			.attr('cy', center.y)
			.attr('r', radius2)
			.attr('fill', 'none')
			.attr('stroke', '#17648A')
			.attr('stroke-width', strokeWidth);

		const animationCircle = chart.append('circle')
		//.attr('class','rotation')
			.attr('cx', center.x)
			.attr('cy', center.y)
			.attr('r', 70)
			.attr('stroke', '#48DE9B')
			.attr('fill', 'none')
			.attr('stroke-dasharray', Math.PI * 2 * 70)
			.attr('stroke-dashoffset', Math.PI * 2 * 70 - 30)
			.attr('stroke-width', 10);

		const now = Date.now();
		d3.timer(()=> {
			const delta = Date.now() - now;
			animationCircle
				.attr('transform', `rotate(${delta * 0.15},${center.x},${center.y})`);
		})
	}
}