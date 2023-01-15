import pool from '../configs/connectDB';

let getHomepage = async (req, res) =>{
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs', { dataUser:rows })
}
let getDetailpage = async (req, res) =>{
    let id = req.params.id;
    let [user] = await pool.execute(`select * from user where id = ?`, [id]);
    return res.send(JSON.stringify(user));
}

module.exports ={
    getHomepage,
    getDetailpage
}