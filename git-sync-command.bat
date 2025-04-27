@echo off
cd /d "C:\Users\Admin\OneDrive\Aaryaas\Project-Back-Ups\Aryas-Fooddelivery-main-18042025-v1-orginal\Fooddelivery-main"
git init
:: Fetch latest status
git status

:: Check if there are any changes
git diff-index --quiet HEAD --
if %errorlevel% neq 0 (
    git add .
    set /p commitMessage="Enter Commit Message: "
    git commit -m "%commitMessage%"
    git push origin main
    echo Changes pushed successfully!
) else (
    echo No changes detected. Nothing to commit.
)

pause
