@echo off

for %%R in (
    project\
    project\overview
    project\team
    project\files
    conceptual\
    conceptual\rtl
    conceptual\asic-concepts
    conceptual\asic-tools
    conceptual\asic-files
    practical\
    practical\connecting-to-a-linux-server
    practical\connecting-to-a-VNC
    practical\git
    practical\working-with-git
    practical\setting-up-your-repository-for-asic-work
    practical\tips-and-tricks
    practical\tips-and-tricks\linux-screen
    references-and-external-resources
    references-and-external-resources\question-and-answer
) do (
    mkdir "%%R" 2>nul
    >"%%R\index.mdx" (
        echo ---
        echo title: %%~nxR
        echo description: Placeholder for %%~nxR documentation.
        echo ---
        echo.
        echo # %%~nxR
        echo.
        echo Content coming soon.
    )
)

echo Done.
pause
