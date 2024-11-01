# simple-wp-data-store

### Install
```
$ npm install
```

### Run
```
$ npm run wp-env start
$ npm run start
```

### Use Store in Browser
```
dispatch = wp.data.dispatch( 'counter' );
select = wp.data.select( 'counter' );

select.getCounter() // 0
dispatch.increase()
select.getCounter() // 1
dispatch.decrease()
select.getCounter() // 0
```


