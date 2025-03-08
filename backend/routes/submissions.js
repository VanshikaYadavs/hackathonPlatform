import express from 'express';
import Submission from '../models/Submission.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Submit a project
router.post('/', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'developer') return res.status(403).json({ error: 'Only developers can submit projects' });

    const { hackathon, link } = req.body;
    const submission = await Submission.create({ hackathon, developer: req.user.id, link });
    res.json(submission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all submissions for a hackathon
router.get('/:hackathonId', async (req, res) => {
  try {
    const submissions = await Submission.find({ hackathon: req.params.hackathonId }).populate('developer', 'name');
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
