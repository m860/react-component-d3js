/**
 * Created by jean.h.ma on 24/07/2017.
 */
import React from 'react'
import BasePage from './BasePage'
import Layout from '../components/LayoutWithNavigation'
import * as d3 from 'd3'

export default class CircularRing extends BasePage{
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
		const center={
			x:400,
			y:300
		};

		const r=100;
		const circleLength=Math.PI*r*2;
		const width=20;

		let circle1=chart.append('circle')
			.attr('cx',center.x)
			.attr('cy',center.y)
			.attr('fill','transparent')
			.attr('stroke-dasharray',circleLength)
			.attr('stroke-dashoffset',0)
			.attr('stroke-width',width)
			.attr('r',r);

		let circle2=chart.append('circle')
			.attr('cx',center.x)
			.attr('cy',center.y)
			.attr('fill','transparent')
			.attr('stroke-dasharray',circleLength)
			.attr('stroke-dashoffset',0)
			.attr('stroke-width',width)
			.attr('stroke','red')
			.attr('style','transition:all 0.51s')
			.attr('r',r);
		const updatePercent=(percent=1)=>{
			if(percent>1){
				percent=0;
			}
			circle2.attr('stroke-dashoffset',circleLength*(1-percent));
			percent+=0.01;
			setTimeout(()=>{
				updatePercent(percent)
			},100);
		}
		updatePercent();
	}
}