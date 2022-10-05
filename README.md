## Movies App

#### Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install [PostgreSQL](https://www.postgresql.org/download/)
- Install [GIT](https://git-scm.com/downloads) (optional)

Note: if you don't want to install GIT, you need to download the repository as a ZIP file.

---

#### API .Env

Create a ```.env``` file in the ```/api``` folder with the following information:

```txt
PORT = 5000
API_KEY = abc123de45

PGHOST = 'localhost'
PGUSER = 'luchoweb'
PGDATABASE = 'luchoweb'
PGPASSWORD = 'my4w350m3P45sw0rd'
PGPORT = 5432
```

---

#### API

1. Run PostgreSQL and create a database using the same ```PGDATABASE``` name setting on your **.env** file.
2. Move to ```/api``` folder and run: ```npm install```
3. Run migrations: ```npx sequelize db:migrate```
4. Run seeders: ```npx sequelize db:seed:all```
5. Run the server: ```npm start```

Note: for more information about **Sequelize CLI**, visit this [link](https://www.npmjs.com/package/sequelize-cli)

---

#### Frontend .Env

Create a ```.env``` file in the ```/frontend``` folder with the following information:

```txt
VITE_API_MOVIES = 'http://localhost:5000/api/movies'
```

---

#### Frontend

1. Move to ```/api``` folder and run: ```npm install```
2. Run the frontend: ```npm run dev```
3. Production? Sure: ```npm run build```

---

#### Tests

**API** : move to ```/api``` folder and run: ```npm test```

**Frontend**: move to ```/frontend``` folder and run: ```npm test```

---

That's it! Thanks for your time.