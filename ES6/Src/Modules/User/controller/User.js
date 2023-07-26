import connection from './../../../DB/connection.js';

export const getUsers = (req, res, next) => {
    const query = "SELECT * FROM users"
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return res.json({ message: "success", data })
    })
}

export const signup = (req, res, next) => {
    const { name, email, password, age } = req.body
    let query = `SELECT * FROM users WHERE email="${email}"`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        if (data.length) {
            res.json({ message: "Failed", reason: "Account Already Exist" })
        }
        query = `INSERT INTO users (name,email,password,age) VALUES ("${name}","${email}","${password}","${age}")`
        connection.execute(query, (err, data) => {
            if (err) {
                return res.json({ message: "query error", err })
            }
            return data.affectedRows ? res.json({ message: "success", data }) : res.json({ message: "Failed to signup" })
        })
    })
}

export const signin = (req, res, next) => {
    const { email, password } = req.body
    const query = `SELECT * FROM users WHERE email="${email}" AND password="${password}"`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        if (data.length) {
            return res.json({ status: "success", message: `You Have Logedin Successfully Welcome Back ${data[0].name}` })
        }
        return res.json({ message: "Failed", reason: "Incorrect Email or Password" })
    })
}

export const updateUser = (req, res, next) => {
    const { id } = req.params
    const { name, email, password } = req.body
    const query = `UPDATE users SET name="${name}",password="${password}" WHERE id=${id} AND email="${email}"`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return data.affectedRows ? res.json({ message: "success", data }) : res.json({ message: "Failed", reason: "something went wrong please try again" })
    })
}

export const deleteUser = (req, res, next) => {
    const { id } = req.params
    const query = `DELETE FROM users where id=${id}`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return data.affectedRows ? res.json({ message: "success", data }) : res.json({ message: "Failed", reason: "in-valid user id" })
    })
}

export const searchUser = (req, res, next) => {
    const { char, age } = req.params
    const query = `SELECT * FROM users WHERE name LIKE '${char}%' AND age < ${age} `
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return data.length ? res.json({ message: "success", data }) : res.json({ message: "Failed" })
    })
}

export const searchById = (req, res, next) => {
    const { id } = req.params
    const query = `SELECT * FROM users WHERE id IN (${id})`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return data.length ? res.json({ message: "success", data }) : res.json({ message: "in-valid user id" })
    })
}

export const searchByAge = (req, res, next) => {
    const { age1, age2 } = req.params
    const query = `SELECT * FROM users WHERE age BETWEEN ${age1} AND ${age2}`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return data.length ? res.json({ message: "success", data }) : res.json({ message: "Not Found" })
    })
}

export const getOldest = (req, res, next) => {
    const query = `SELECT * FROM users ORDER BY age DESC LIMIT 3`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return data.length ? res.json({ message: "success", data }) : ''
    })
}