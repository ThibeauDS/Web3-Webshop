@echo off
echo 1: Open React app
echo 2: Open Server app
echo 3: Start React app
echo 4: Start Express server
echo -: Quit
set /p value= "Kies een optie uit het menu: "
if %value%==1 (cd ./project/
code .)
if %value%==2 (cd ./projectAPI/
code .)
if %value%==3 (cd ./project/
npm start)
if %value%==4 (cd ./projectAPI/
npm start)