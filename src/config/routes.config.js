const routes = [{
	path: 'updatebarchartdata',
	getComponent: async(location, callback)=> {
		let module = await System.import("../pages/UpdateBarChartData.js");
		callback(null, module.default);
	},
	name: "update bar chart data"
},{
	path: 'barchartanimation',
	getComponent: async(location, callback)=> {
		let module = await System.import("../pages/AnimationBarChart.js");
		callback(null, module.default);
	},
	name: "bar chart animation"
},{
	path: 'barchartwithsvg2',
	getComponent: async(location, callback)=> {
		let module = await System.import("../pages/BarChartWithSVG2.js");
		callback(null, module.default);
	},
	name: "bar chart axis with svg"
},{
	path: 'barchartwithsvg',
	getComponent: async(location, callback)=> {
		let module = await System.import("../pages/BarChartWithSVG.js");
		callback(null, module.default);
	},
	name: "bar chart with svg"
},{
	path: 'barchartwithdom',
	getComponent: async(location, callback)=> {
		let module = await System.import("../pages/LessonBarChart.js");
		callback(null, module.default);
	},
	name: "bar chart with dom"
},{
	path: 'hellod3',
	getComponent: async(location, callback)=> {
		let module = await System.import("../pages/LessonHello.js");
		callback(null, module.default);
	},
	name: "hello d3"
},{
	path: '404',
	getComponent: async(location, callback)=> {
		let module = await System.import("../pages/404.js");
		callback(null, module.default);
	}
}];

export function getDefinedPaths() {
	let paths = [];

	function displayRoute(route, parentPath) {
		let path = `/${route.path}`;
		if (parentPath) {
			path = parentPath + path;
		}
		if (route.indexRoute) {
			paths.push({
				name:route.indexRoute.name,
				url:path
			});
		}
		if (route.childRoutes) {
			route.childRoutes.forEach(r=>displayRoute(r, path))
		}
		if (route.name) {
			paths.push({
				name:route.name,
				url:path
			});
		}
	}

	routes.forEach(r=>displayRoute(r));
	return paths;
}

if (process.env['NODE_ENV'] === "development") {
	getDefinedPaths().forEach(p=>console.log(`${p.name}:${p.url}`));
}

export default routes



