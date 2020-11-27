# JavaScript

### Higher Order Function
> "Function yang beroperasi pada function yang lain. Baik itu digunakan sebagai argumen, maupun return value."
    - _**Eloquent Javascript**_

#### Example
```
function finish() {
  alert('Task finished!');
}

function doWork(task, finish) {
  console.log(`Working in Progress ${task} ...`);
  finish();
}
```
