import mysql from "mysql2";

function creatingConnection() {
  const connection = mysql.createConnection({
    host: "64.227.174.65",
    user: "amar",
    password: "12345678",
    database: "bse",
    port : '3306'
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("Connected to MySQL database");
  });
}

creatingConnection();
