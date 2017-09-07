/**
 * Created by jean.h.ma on 24/07/2017.
 */
import React from 'react'
import BasePage from './BasePage'
import Layout from '../components/LayoutWithNavigation'
import * as d3 from 'd3'


export default class LessonHello extends BasePage{
	render(){
		return (
			<Layout>
				<div id="g"></div>
			</Layout>
		);
	}
	componentDidMount(){
		super.componentDidMount();
		d3.select('#g')
			.selectAll('p')
			.data([1,2,3])
			.enter()
			.append('p')
			.text((d)=>d)
			.exit()
			.remove()
	}
}