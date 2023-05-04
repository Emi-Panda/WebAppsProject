import { MongoClient } from "mongodb";

let connectionString = "mongodb+srv://taskmaster:taskmaster@taskmaster.fp6umgt.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
    
} catch (e) {
    console.error(e);
}

let db = conn.db("taskmaster");

export default db;




