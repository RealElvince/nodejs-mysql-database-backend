import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

// create a pool of connection

const pool=mysql.createPool({
   host:process.env.MYSQL_HOST,
   user:process.env.MYSQL_USER,
   password:process.env.MYSQL_PASSWORD,
   database:process.env.MYSQL_DATABASE
}).promise()


// get notes 
async function getNotes(id){
  const [rows]=await pool.query(
   `SELECT* FROM note
   WHERE id= ?`,[id]
  )
  return rows[0]

}


// create new note
async function createNote(title,content){
   const [result]= await pool.query(
      `INSERT INTO note(title,content)
    VALUES(?,?)`,[title,content]
   )
   return {
      id,
      title,
      content,
       
      }

   
}

const result=await createNote('Fifth note','Watch documentaries')
console.log(result)