// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações do banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
        //criar uma tabela com comandos sql
        db.run(`
            CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY AUTOINCREMENT
                image TEXT,
                adress TEXT,
                adress2 TEXT,
                state TEXT,
                city TEXT,
                items TEXT
            );
        `)

        //inserir dados na tabela

        //deletar um dado da tabela
} )