import { JSONFilePreset } from "lowdb/node";
import { v4 as uuidv4 } from "uuid";


const addMetaData = (message) => ({
    ...message,
    id: uuidv4(),
    createdAt: new Date().toISOString()
})

const removeMetaData = (message) => {
    const {id, createdAt, ...messageWithoutMetaData} = message;
    return messageWithoutMetaData;
}

const defaultData = {messages: []}
let dbInstance = null;

const getDb = async () => {
    if(!dbInstance){
        try{
            dbInstance = await JSONFilePreset('db.json', defaultData)
        }catch(error){
            console.error("Error initialising database:", error);
            throw error
        }
    }

    return dbInstance;
}

export const addMessages = async (messages) =>{
    try {
        const db = await getDb();
        db.data.messages.push(...messages.map(addMetaData))
        await db.write();
    } catch (error) {
        console.error("Error adding messages:", error)
    }
}

export const getMessages = async()=>{
    try {
        const db = await getDb();
        return db.data.messages.map(removeMetaData)
    } catch (error) {
        console.error("Error retrieving messages:", error)
        return []
    }
}