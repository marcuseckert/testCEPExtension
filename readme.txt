

Run npm install
Python will sometimes ask to set terminal.integrated.inheritEnv to false in VSCode but it should inherit the env. Then use CMD+Shift+B to build.

set debugMode to 1 for AE:
e.g: defaults write com.adobe.CSXS.9 PlayerDebugMode 1
(The plist is also located at /Users/<username>/Library/Preferences/com.adobe.CSXS.9.plist)
Could also be CSXS10 or so