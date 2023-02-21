const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const PORT = 5000;

const db = require("./routes/db-config");

app.use("/js", express.static(__dirname + "./public/js"));
app.use("/css", express.static(__dirname + "./public/css"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(cors());

const SECRET_KEY = "INSURANCEPORTAL"

app.post("/register", async (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const bdate = req.body.bdate;
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    try{
        db.query(
            "SELECT * FROM User WHERE email=?",
            [email],
            (err, result) => {
                if (err) {
                    res.status(400).send({ message: err })
                }
                else {
                    if (result.length > 0) {
                        console.log(result, "User exists");
                        res.status(500).send({ message: "User already exists!" })
                    }
                    else {
                        console.log(password);
                        const hashedPassword = bcrypt.hash(password,10);
                        console.log(hashedPassword);
                        db.query(
                            "INSERT INTO User (u_id,name,email,phone_n,gender,b_date,pass,cpass) VALUES (?,?,?,?,?,?,?,?)",
                            [id, name, email, phone, gender, bdate, hashedPassword, hashedPassword],
                            (err, result) => {
                                if (err) {
                                    console.log(err);
                                    res.status(500).send({message:"Error while registering!"})
                                }
                                else{
                                    const token = jwt.sign({email:email,id:id},SECRET_KEY);
                                    console.log("posted post");
                                    res.status(201).send({message:"User Registered Successfully"})

                                }
                            }
                        )
                    }
                }
            }
        )
    }
    catch(e){
        console.log(e);
        res.status(400).json({message:"Error"})
    }

    
    // res.send({ message: "User Registered Successfully!" })

})

let user;

app.post("/login", (req, res) => {
    // const email = req.body.email;
    // const password = req.body.password;
    // user = email;
    // console.log(user, "userrr");
    // db.query(
    //     "SELECT * FROM User WHERE email=? AND pass=?",
    //     [email, password],
    //     (err, result) => {
    //         if (err) {
    //             res.send({ err: err })
    //         }
    //         else {
    //             if (result.length > 0) {

    //                 console.log(result, "loginresult");
    //                 res.send(result);
    //             }
    //             else {
    //                 res.send({ status: 500, message: "Invalid Credentials!" })
    //             }
    //         }
    //     }
    // )



    const email = req.body.email;
    const password = req.body.password;

    try {
        db.query(
            "SELECT * FROM User WHERE email=?",
            [email],
            (err, result) => {
                if (err) {
                    res.status(400).send({ message: err })
                }
                else {
                    if (result.length <= 0) {
                        console.log(result, "User doesn't exists");
                        res.status(500).send({ message: "User doesn't exist!" })
                    }
                    else {
                        console.log(result);
                        const matchPassword = bcrypt.compare(password,result.password); 
                        if(!matchPassword){
                            res.status(400).send({message:"Invalid Credentials!"})
                        }

                        const token = jwt.sign({email:result.email,id:result.id},SECRET_KEY);
                        res.status(201).send({message:"Logged In Successfully!"})
                    }
                }
            }
        )
    } catch (error) {
        console.log(e);
        res.status(400).json({message:"Error"})
    }
    user = email;
    console.log(user, "userrr");
})

app.post("/adminlogin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "SELECT * FROM Admin WHERE email=? AND pass=?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            else {
                if (result.length > 0) {

                    console.log(result, "loginresult");
                    res.send(result);
                }
                else {
                    res.send({ status: 500, message: "Invalid Credentials!" })
                }
            }
        }
    )
})

app.post("/buy", (req, res) => {
    const id = req.body.id;
    const iid = req.body.iid;
    const pid = req.body.pid;
    const amount = req.body.amount;
    const buy = req.body.buy;
    const time = req.body.time;
    const email = req.body.email;
    db.query(
        "INSERT INTO Insurance (u_id,ins_id,b_date,p_id,amount,duration,email) VALUES (?,?,?,?,?,?,?)",
        [id, iid, buy, pid, amount, time, email],
        (err, result) => {
            if (err) {
                console.log(err);
            }
        }
    )
    console.log("posted post");
    res.send({ message: "Bought Insurance!" })
})

app.delete("/adminpage", (req, res) => {
    const id = req.body.id;
    console.log(id, "idddddddddddd");
    db.query(
        "DELETE FROM Insurance WHERE ins_id=?", [id],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("deleted rows: ", result.affectedRows);
                res.send(result);
            }
        })
})

app.get("/dashboard", (req, res) => {
    console.log(user, "userdashboard");
    db.query(
        "SELECT * FROM Insurance WHERE email=?",
        [user],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(result);
            }
        }
    );
})

app.get("/adminpage", (req, res) => {
    db.query(
        "SELECT * FROM Insurance",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(result);
            }
        }
    );
})

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("database connected");
})

app.listen(PORT);

// npm start