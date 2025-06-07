class DeviceController {
    async first (req, res) {  // Убрал пробел
        res.json({ message: 'Device created' })
    }

    async sec (req, res) {  // Убрал пробел
        res.json({ message: 'Device cdsfsdfreated' })
    }

    async getOne (req, res) {  // Убрал пробел
        res.json({ message: 'Devisdfsfce created' })
    }
}

module.exports = new DeviceController()