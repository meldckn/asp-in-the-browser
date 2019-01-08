/* 
 * A main program that calls and uses clingon functions
 *
 * Uses jQuery
 */

function useASP (code) {

	displayASP (code);
	clingon.groundAndSolve (code);

}

function displayASP (code) {
	$("#asp").append('<pre>'+code+'</pre>');
}

/* Wait for jQuery to load before starting */
$(document).ready(function() {

	// Load the ASP code in graph.lp and call the useASP function when it's done
	clingon.loadASP ("graph.lp", useASP);

});