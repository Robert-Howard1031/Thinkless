run the following commands in order to get started


Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
pnpm install
npx prisma generate   
npx prisma db push      
pnpm dev