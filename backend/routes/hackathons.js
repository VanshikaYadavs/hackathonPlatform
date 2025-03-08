import express from 'express';
import Hackathon from '../models/Hackathon.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Create Hackathon (Company Only)
router.post('/', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'company') return res.status(403).json({ error: 'Only companies can create hackathons' });

    const { title, description, deadline, reward } = req.body;
    const hackathon = await Hackathon.create({ title, description, deadline, reward, company: req.user.id });
    res.json(hackathon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Hackathons
router.get('/', async (req, res) => {
  try {
    const hackathons = await Hackathon.find().populate('company', 'name');
    res.json(hackathons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
