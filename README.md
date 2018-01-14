# LunchWithMe Tým 4

## spuštění

Nejdříve naklonovat repozitář.
``` 
git clone https://github.com/daneCzech1/LunchWithMe.git

```
### Backend
```
yarn
# nebo 
npm install

# poté používat npm nebo yarn a příkaz. Použiju zde yarn

./node_modules/.bin/sequelize db:migrate
# sequilize je nastaven na sqlite a nemělo by tedy být potřeba 
# upravovat ./config/config.js

./node_modules/.bin/sequelize db:seed:all

yarn start
```

Nyní nám běží backend na localhost:3001

### Frontend

```
yarn
# nebo 
npm install

yarn start

```
Otevře se nové okno v defaultním prohlížeči a v něm uvodní stránka.

## Použité technologie

React + Redux + Saga = &#10084;.
V našem podání to tak nevypadá.

Pro styly jsem nechali čisté css, protože stylů jsme nemuseli psát moc, díky projektu [reactstrap](http://reactstrap.github.io/), který poskytuje bootstrap 4 componenty jako react componenty.

Používali jsme prettier, který by bylo dobré nastavit na gitu jako preCommitHook, ale k tomu nedošlo.

linter jsme nechali v původním create-react-app. 



## Technické poznámky
Některé Componenty používají jak redux tak Sagy. Některé jen Redux a většina pouze react state. Můžeme najít asynchroní volání i přímo v componentách a další podobně ošklivé věci. Tím jak kód vznikal na rychlo a hlavně v rámci učení se všech nových věci, tak utrpěla jeho kvalita.

Je potřeba velký refactoring.




This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

