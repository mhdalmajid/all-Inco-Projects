const { setAuthToken, getHashedPassword } = require("./auth");

module.exports.User = {

    get: async (id) => {
        const result = await queryPromise("SELECT id, firstname, lastname, email FROM users WHERE id = ?", [ id ]);

        if (result.length > 0) {
            return result[0];
        }
        else {
            throw 'Unknown user.';
        }
    },

    tryAuth: async (user, password, res) => {
        const hashedPassword = getHashedPassword(password);

        const result = await queryPromise("SELECT * FROM users WHERE email = ? AND password = ?", 
                                            [ user, hashedPassword ]);

        if (result.length > 0) {
            setAuthToken(result[0]["id"], res);
            return true;
        }
        else {
            throw 'Invalid username or password';
        }
    },

    create: async (userData) => {
        let { email, firstName, lastName, password, confirmPassword } = userData;

        firstName = firstName.trim();
        lastName = lastName.trim();
        email = email.trim();

        if (!firstName || !lastName || !password || !email) {
            throw 'Values cannot be empty.'
        }
        if (password === confirmPassword) {
            const result = await queryPromise("SELECT id FROM users WHERE email = ?", 
                                                [ email ]);

            if (result.length > 0) {
                throw 'User already exists.';
            }

            const hashedPassword = getHashedPassword(password);

            return queryPromise("INSERT INTO users(firstname, lastname, email, password) VALUES (?, ?, ?, ?)", 
                [ firstName, lastName, email, hashedPassword ])
        } 
        else {
            throw 'Passwords do not match.';
        }
    },

}

module.exports.Schedule = {

    getAllWithUser: async () => {
        return queryPromise(`SELECT users.lastname, 
                                    users.firstname,
                                    user_id, 
                                    day, 
                                    start_at, 
                                    end_at 
                            FROM schedules 
                            LEFT JOIN users 
                            ON schedules.user_id = users.id`);
    },

    getByUser: async (userId) => {
        return queryPromise(`SELECT * FROM schedules WHERE user_id = ?`, [ userId ]);
    },

    create: async (userId, scheduleData) => {
        const { day, startAt, endAt } = scheduleData;

        if (day < 1 || day > 7) {
            throw 'Invalid day value.'
        }
        if (endAt < startAt) {
            throw 'Start time must be before end time.'
        }
        else {
            return queryPromise("INSERT INTO schedules(user_id, day, start_at, end_at) VALUES (?, ?, ?, ?)", 
                [ userId, day, startAt, endAt ]);
        } 
    }

}
