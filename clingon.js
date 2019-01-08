/*
 * clingon
 * 
 * A module to interface with clingo.js
 * Author: Melanie Dickinson
 * Based on code by Adam Smith, Kate Compton, and potassco.org
 * January 2019
 * 
 * Requires jQuery 
 */

var clingon = (function () {

    /*
     * Load ASP from a given .lp file and send its contents to a given callback function. 
     * The given callback function must take a parameter for the code (the plaintext) of the loaded file.
     */
    function loadASP (filename, callback) {
    
        $.ajax({
            url: filename,
            success: function (text) {
                // If file was successfully retreived, call the callback function with the code
                callback (text);
            },
            error: function() {
                // Could not load file
            },
        });

    }
    
    /* 
     * 
     * Takes an Answer Set Program to solve and a callback function to call when it's done
     */
    function groundAndSolve (code) { //, callback) {
    
        var numSolutions = 3; // Max number of solutions to find (0 for all)
    
        console.log(code)
        var width = 10;
        var grounderArgs = [];//["-c", "width=" + width];
        var solverArgs = ["3", "--outf=2"];//, "--sign-def=3", "--heu=vsids", "--seed=" + (2 << 30 * Math.random() | 0)];
    
        console.log("grounding...");
        Gringo.groundAsync([code, grounderArgs], function(program) {
    
            console.log("solving...");
            Clasp.solveAsync([program, solverArgs], function(result) {
    
                console.log("done. Result:", result);

                //console.log("done " + result.Witnesses.length);
                /*
                if (result.Witnesses) {
                    console.log(result.Witnesses);
                    //callback(processedSets);
    
                } else {
                    console.warn ("no solutions");
                }*/

            });
        });
    };

    return {
        loadASP : loadASP,
        groundAndSolve : groundAndSolve
    }

})();

