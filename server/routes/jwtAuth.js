// router
const router = require('express').Router();
const pool = require('../db');


// ROUTES

// register
router.post('/', async (req, res) => {
  try {
    //destructure the eq.body (name, email, passwords...)
    const { name, email, passwords } = req.body
    //check if user exists (if user exists then throw error)
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
      email
    ]);
    res.json(user.rows);
    //Bcrypt the user password

    //enter the new user insdie our DRONE_BUILD_EVENT

    //generate jwt token

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");

  }
})



module.exports = router;