let num = prompt("NUMBER: ")

for (let i=1; i<=num; i++){
    for (let j=1; j<=10; j++){
        let result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
}
