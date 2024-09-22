import { MikroORM } from "@mikro-orm/core"
import { MikroORM } from "@mikro-orm/postgresql"

const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'lireddit',
        type: 'postgresql',
        debug: process.env.NODE_ENV === 'production'

    });   
}

console.log("hello world")