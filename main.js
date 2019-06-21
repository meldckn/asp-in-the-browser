/* 
 * An example main program that calls and uses clingon functions
 *
 * Uses jQuery
 */

/* Callback function to pass to loadASP that gets called when it has finished
 */
function useASP (code) {

	displayASP (code);

	// Enable "run" button
	$("#run").attr("disabled", false);

	$("#run").click( function() { clingon.groundAndSolve (code, useResults); });

}

function displayASP (code) {
	$("#asp").append('<pre>'+code+'</pre>');
}

/* Callback function to pass to groundAndSolve that gets called when it has finished, 
 * recieving the solutions as a parameter
 */
function useResults (results) {

   var model = results.Witnesses[0].Value;

   $("#output").append('<pre>'+model+'</pre>');

}


/* Wait for jQuery to load before starting */
$(document).ready(function() {

	// Load the ASP code from graph.lp and call useASP function when it's done
	clingon.loadASP ("graph.lp", useASP);

});