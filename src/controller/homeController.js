import pool from '../configs/connectDB';

let getHomepage = async (req, res) =>{
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs', { dataUser:rows });
}
let getDetailpage = async (req, res) =>{
    let id = req.params.id;
    let [user] = await pool.execute(`select * from user where id = ?`, [id]);
    return res.send(JSON.stringify(user));
}
let createNewUser = async (req, res) =>{
    let {firstName, lastName, email, address} = req.body;
    console.log(req.body);
    await pool.execute(`insert into user(firstName,lastName,email,address) values ( ?, ?, ?, ?)`, [firstName, lastName, email, address]);
    return res.redirect('/')
} 
module.exports ={
    getHomepage,
    getDetailpage,
    createNewUser
}