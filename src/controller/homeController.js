import pool from '../configs/connectDB';

let aboutPage =(req, res) =>{
    return res.send(`I'm Key`);
}
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
let deleteUser = async (req, res) =>{
    let id = req.body.id;
    await pool.execute(`delete from user where id = ?`,[id]);
    return res.redirect('/')
}
let editUser = async (req, res) =>{
    let id = req.params.id;
    let [user] = await pool.execute(`select * from user where id = ?`, [id]);
    return res.render('update.ejs', { dataUser:user[0] });
}

let updateUser = async (req, res) =>{
    let {firstName, lastName, email, address, id} = req.body;
    await pool.execute(`update user set firstName = ?, lastName = ?, email = ?, address = ? where id = ?`, [firstName,lastName,email,address,id]);
    return res.redirect('/');
}
module.exports ={
    aboutPage,
    getHomepage,
    getDetailpage,
    createNewUser,
    deleteUser,
    editUser,
    updateUser
}