const fs = require('fs');

let listarTabla=(base,limite = 10)=>{
for (let i = 1;i<=limite;i++){

 console.log(`${base} x ${i} = ${base*i}`);

}

}



let crearArchivo=(base,limite =10)=>{
return new Promise((resolve,reject)=>{

if (!Number(base)){
    reject(`El valor introdicido ${base} no es un numero`);
    return;


}

    let data = '';

    for (let i = 1; i<=limite;i++){
    
        data +=`${base} x ${i} = ${base*i}\n`;
    };
    
    fs.writeFile(`Tablas/tabla- ${base}-al-${limite}.txt`,data, (err) => {
        if (err) 
        reject (err)
        else 

        resolve(`tabla-${base}.txt`);
      });


});

}

module.exports = {
crearArchivo,listarTabla

}