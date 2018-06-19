## Burger Builder

- Create your own custom burger
- Order using firebase

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

![VS Code Jest Preview](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)
