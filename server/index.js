const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5000;

const db = require("./routes/db-config");
const cookie = require("cookie-parser");

app.use("/js", express.static(__dirname + "./public/js"));
app.use("/css", express.static(__dirname + "./public/css"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(cookie());
app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const bdate = req.body.bdate;
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    db.query(
        "INSERT INTO User (u_id,name,email,phone_n,gender,b_date,pass,cpass) VALUES (?,?,?,?,?,?,?,?)",
        [id, name, email, phone, gender, bdate, password, cpassword],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            // if (result.length > 0) {
            //     res.send(result);
            // }
        }
    )
    console.log("posted post");
    res.send({ message: "User Registered Successfully!" })

})

let user;

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    user = email;
    console.log(user, "userrr");
    db.query(
        "SELECT * FROM User WHERE email=? AND pass=?",
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

app.get("/dashboard", (req, res) => {
    // console.log(req.body, "body");
    // const uid = req.body.uid
    // console.log(uid);
    console.log(user, "user");
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

// app.post("/dashboard", (req, res) => {
//     const cname = req.body.cname;
//     const ctype = req.body.ctype;
//     const state = req.body.state;
//     const city = req.body.city;
//     const location = req.body.location;

//     db.query(
//         "INSERT INTO courtschema.court (cname, ctype, state, city, location) VALUES (?,?,?,?,?)",
//         [cname, ctype, state, city, location],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted in court table");
//             }
//         }
//     );
// });

db.connect((err) => {
    if (err) {
        // throw err;
        console.log(err);
    }
    console.log("database connected");
})

app.listen(PORT);

// npm start