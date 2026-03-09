@echo off
setlocal enabledelayedexpansion
set count=1
for %%f in (*.png) do (
    ren "%%f" "convoy!count!.png"
    set /a count+=1
)
pause