# How to setup professional backend project for production

## Setps to follow

### 1. Check node version ✅

### 2. Check npm version ✅

### 3. Create package.json file ✅

### 4. Enter all basic details for package.json file ✅

### 5. Create readme.md file ✅

### 6. Add git repository ✅

1. git init
2. git branch
3. git add .
4. git status
5. git commit -m "your_message here"
6. git push
7. git

### 7. Create new folder public ✅

1. Create temp folder
2. Add .gitkeep file here

### 8. Create .gitignore file to keep ✅

1. Use gitigore file generator
2. It store all imp files to make publically available
3. https://mrkandreev.name/snippets/gitignore-generator

### 9. Create .env file to store all imp creadentials ✅

### 10. Create src folder ✅

### 11. Create files under src ✅

1. app.js
2. index.js
3. constants.js

### 12. create all below folder ✅

1. DB
2. controllers
3. middlewares
4. models
5. routes
6. utils

### 13. Now edit package.json file ✅

1. Add **type** above **main** in **package.json** file

   ```json
     "type":"module"
   ```

### 14. Add nodemon ✅

1. Install nodemon
2. It will run our app app continuously
3. It will added as dev dependency
4. There is another way to that such as --watch check for this

### 15. Add new script to start our server / app ✅

1. "dev":"nodemon src/index.js"

### 16. Add prettier usin npm

1. **.prettierrc**

   ```json
   {
     "singleQuote": false,
     "bracketSpacing": true,
     "tabWidth": 2,
     "semi": true,
     "trailingComma": "es5"
   }
   ```

2. **.prettierignore**

   ```cmd
       *.env
       .env
       .env.*
       /.vscode
       /node_modules
       ./dist
   ```

### 17. Add mongoose for database connection

### 18. Add express for server

### 19. Add dotenv for envoirment variables

### 20. Add mongodb_connection key from mongodb online

### 21. Add db name inside constants.js file

### 22. Add env variable inside .env file

1. PORT
2. MONGODB_CONNECTION

### 21.

## Packages to install

## 1. node version check

```cmd
node -v
```

### 2. npm version check

```cmd
npm -v
```

### 3. Create package.json

```cmd
npm init
```

### 4. Initialize git repo

```cmd
init git
```

### 5. Install nodemon

```cmd
npm i -D nodemon
```

### 6. Install prettier

```cmd
npm i -D prettier
```

### 7. Install mongoose for database connection

```cmd
npm i mongoose
```

### 8.

## To check all packages version

Use this command

```cmd
npm list packagename
```

```cmd
npm list mongoose
```
