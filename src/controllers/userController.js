exports.getAllUsers = (req, res) => {
    // Logika untuk mendapatkan semua pengguna
    res.status(200).json({ message: 'Get all users' });
};

exports.createUser = (req, res) => {
    // Logika untuk membuat pengguna baru
    res.status(201).json({ message: 'Create user' });
};
