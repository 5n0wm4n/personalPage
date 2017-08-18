/*requirejs.config({
	baseUrl: '../../PropUI/src',
	paths: {'librexjs': '../../librexjs/'}
});*/

//set up the defaults
requirejs([
	'routes',
], function(
	routes,
) {
    routes.init();
})