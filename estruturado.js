const fs = require("fs");
const csv = require("csv-parser");

const csvDados = `id,nome,email
1,João,joao@example.com
2,Maria,maria@example.com
3,Carlos,carlos@example.com`;

fs.writeFileSync("dados,csv", csvDados);
console.log("Arquivo CSV gerado com sucesso!");

fs.createReadStream("dados,csv")
    .pipe(csv())
    .on("data", (row) => {
        console.log(`ID: ${row.id}, Nome: ${row.nome}, Email: ${row.email}`);
    })
    .on("end", () => {
        console.log("Arquivo CSV processado com sucesso");
    });
