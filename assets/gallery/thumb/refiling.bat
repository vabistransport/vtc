@echo off
chcp 65001 >nul
title Конвертация PNG в JPG
echo Начинаю переименование PNG файлов в JPG...
echo.

setlocal enabledelayedexpansion
set count=0

for %%f in (*.png) do (
    ren "%%f" "%%~nf.jpg"
    if !errorlevel! == 0 (
        echo [OK] "%%f" -^> "%%~nf.jpg"
        set /a count+=1
    ) else (
        echo [ОШИБКА] Не удалось переименовать "%%f"
    )
)

echo.
echo Готово! Переименовано файлов: %count%
pause