@echo off
echo ========================================
echo Savannah Events - Setup and Run
echo ========================================
echo.

echo [1/4] Generating Prisma Client...
call npm run db:generate
echo.

echo [2/4] Pushing Database Schema...
call npm run db:push
echo.

echo [3/4] Creating Admin User...
call npm run db:seed
echo.

echo [4/4] Starting Development Server...
echo.
echo ========================================
echo Admin Login:
echo Email: admin@savannahevents.com
echo Password: admin123
echo URL: http://localhost:3000/admin
echo ========================================
echo.

call npm run dev
