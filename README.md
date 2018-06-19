## Burger Builder

- Create your own custom burger
- Order using firebase

## Note
- This project is still work under progress.
- I am going to add authentication and will try adding Redux as well.

### Setup

- Open terminal and clone the repositoy
```cmd
git clone https://github.com/kedarnadkarny/burger-builder.git
```

- Navigate inside the directory and install dependencies
```cmd
cd burger-builder
npm install
```

- Create a project in firebase and copy your realtime database url in axios-orders.js
```
const instance = axios.create({
    baseURL: 'firestore-url'
});

- Change the database permission to all access(Warning!)

```
- Run the application
```cmd
npm start
```

### Project Images

![burger1](https://github.com/kedarnadkarny/burger-builder/blob/master/src/assets/images/burger1.png)

![burger2](https://github.com/kedarnadkarny/burger-builder/blob/master/src/assets/images/burger2.png)

![burger3](https://github.com/kedarnadkarny/burger-builder/blob/master/src/assets/images/burger3.png)