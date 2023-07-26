import connection from "../../../DB/connection.js"

export const addnote = (req, res, next) => {
    const { title, content, User_id } = req.body
    let query = `SELECT * FROM users WHERE id="${User_id}"`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        if (!data.length) {
            return res.json({ message: "Failed", reason: "In-Valid user ID", moreInfo: "There is no user with this ID" })
        }
        query = `INSERT INTO notes (title,content,User_id) VALUES ("${title}","${content}","${User_id}")`
        connection.execute(query, (err, data) => {
            if (err) {
                return res.json({ message: "query error", err })
            }
            return data.affectedRows ? res.json({ message: "success", data }) : res.json({ message: "Failed", reason: "something went wrong try again" })
        })
    })
}

export const deletenote = (req, res, next) => {
    const { id } = req.params
    const { User_id } = req.body
    const query = `DELETE FROM notes WHERE id = ${id} AND User_id = ${User_id}`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return data.affectedRows ? res.json({ message: "success", data }) : res.json({ message: "Failed", reason: "In-Valid ID" })
    })
}

export const updatenote = (req, res, next) => {
    const { id } = req.params
    const { title, content, User_id } = req.body
    const query = `UPDATE notes SET title="${title}",content="${content}" WHERE id = ${id} AND User_id=${User_id}`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return data.affectedRows ? res.json({ message: "success", data }) : res.json({ message: "Failed", reason: "In-Valid ID" })
    })
}

export const getnote = (req, res, next) => {
    const query = `SELECT * FROM notes`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return res.json({ message: "success", data })
    })
}

export const getBoth = (req, res, next) => {
    const query = `SELECT * FROM users INNER JOIN notes where users.id = notes.User_id`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.json({ message: "query error", err })
        }
        return res.json({ message: "success", data })
    })
}