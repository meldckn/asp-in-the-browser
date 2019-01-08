
# clingon.js

An minimal example of/module for interfacing with clingo.js, an [Emscripten](https://kripken.github.io/emscripten-site/)-compiled Javascript port of Clingo (which was originally written in C++, and which you usually run as a program on the command line). This lets you run Clingo in the browser, without having to call out to a server! 

## How to Use

Copy this entire directory to seed code for a new browser-based ASP project, or copy just clingo.js and clingon.js, and make sure to include them and jQuery in your html or Require dependencies. 

Then, you can write your ASP code in .lp files, and name them in your call to `clingon.loadASP (filename, callback)`. 

See `main.js` for examples of how to use clingon functions. 

### Clingon.js requires jQuery 
...to load separate .lp files using AJAX requests

Easy mode: include this line in your index.html:

```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
```

## What is Clingo?

https://potassco.org/doc/start/

## Other Approaches to Using Clingo for the Web


## Acknowledgements

Clingo was made by the Potassco group (the Potsdam Answer Set Solving Collection) at the University of Potsdam. Clingo was first compiled into Javascript using [Emscripten](https://kripken.github.io/emscripten-site/) by [Adam M. Smith](https://twitter.com/rndmcnlly), who was also a huge, generous force for teaching and advocating for Answer Set Programming for expressive computing in the Expressive Intelligence Studio at UCSC, where I first encountered it. The interface code in clingon.js was developed from code by Adam and [Kate Compton](https://twitter.com/galaxykate), who is also a great advocate and inspiration. 
