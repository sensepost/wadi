Wadi:
==========

by Saif El-Sherei & Etienne Stalmans @ sensepost (research@sensepost.com)

Introduction:
----------

Wadi is a python fuzzing harness for Microsoft Edge browser on Windows 10. it is based on two components "winappdbg" as a debugger and Python "Twisted" as a web server(it can aslo be done using the python BaseHTTPServer but twisted is more reliable).

Wadi is developed to be modular each componenet can be used on its own. The Grammar files are seperate as well to generate test cases seperate the testcase generation algorithm from Wadi it self which lets each user supply their own.

The debugger will be responsible for starting Edge and then attaching to the "MicrosoftEdgeCP.exe" , "RuntimeBroker.exe" and "MicrosoftEdge.exe" to monitor for crashes.

The webserver will be responsible of generating the served testcase using Google's PyV8 engine and then serving it for each request recieved.


Capabilities:
----------
- Timeout Set to restart the Target every 2 minutes.
- filtering 0xFFFFFFFF and Null pointer derefs.
- When crash is found calculate crash md5 hash and check if it was already recorded.
- If crash is new save the last ten testcases served before the crash along with the crash log.
- The crash log will contain the disassebly around EIP or RIP at the time of the crash plus the registers values.
- Wadi will restart the target after it is killed or crashed.

Pre-Requisites:
----------
- Python winappdbg by Mario Vilas "pip install winappdbg" - [http://winappdbg.sourceforge.net/Downloads.html](http://winappdbg.sourceforge.net/Downloads.html)
- Distorm disassembler. [https://distorm.googlecode.com/files/distorm3-3.win-amd64.exe](https://distorm.googlecode.com/files/distorm3-3.win-amd64.exe) OR [https://github.com/gdabah/distorm](https://github.com/gdabah/distorm)
- Google Pyv8 Engine Windows. [https://code.google.com/p/pyv8/downloads/list](https://code.google.com/p/pyv8/downloads/list)
- Twisted "pip install twisted" - [https://pypi.python.org/pypi/Twisted](https://pypi.python.org/pypi/Twisted)

Running:
----------
 - Set default http:// handler to Microsoft Edge
 - Check with explorer.exe "http://127.0.0.1:8000/"
 - run from administarative console "cmd".
```
    wadi.py [Grammar File] [PORT]

- The javascript Grammar file.
- Port for the web server to listen on.
```

TODO:
----------
- adding a multiple windows browser support.
- adding Linux and Mac OSX support.
- adding AppStore classes ctypes.


License:
----------
Wadi is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (http://creativecommons.org/licenses/by-nc-sa/4.0/) Permissions beyond the scope of this license may be available at http://sensepost.com/contact us/.
