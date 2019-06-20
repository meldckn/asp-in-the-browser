/* 
 * A main program that calls and uses clingon functions
 *
 * Uses jQuery
 */

function useASP (code) {

	displayASP (code);
	clingon.groundAndSolve (code, useResults);

}

function displayASP (code) {
	$("#asp").append('<pre>'+code+'</pre>');
}

/* Callback function to pass to groundAndSolve that gets called when it has finished, 
 * recieving the solutions as a parameter
 */
function useResults (results) {
   console.log("results from useResults callback:", results);

   var model = results.Witnesses[0].Value;

   $("#output").append('<pre>'+model+'</pre>');
}

/* Wait for jQuery to load before starting */
$(document).ready(function() {

	// Load the ASP code in graph.lp and call the useASP function when it's done
	clingon.loadASP ("graph.lp", useASP);

});