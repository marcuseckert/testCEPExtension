Hey,
so I have a problem with AE and VSCode not hitting breakpoints when debugging ExtendScript. When I "attach" to the main extend script engine and trigger script evaluation from the regular Javascript engine, $.writeln correctly writes to the output console but breakpoints are not honored. If I use "launch" and just evaluate a script, it works. My setup is as follows:
MacBook Pro M1 Max, Ventura 13.2.1, AE 2023
