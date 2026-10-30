import express from 'express';
import { handleContactSubmit, getContactStatus } from '../controllers/contactController.js';

const router = express.Router();

// GET /api/contact/status - Health check & status
router.get('/status', getContactStatus);

// POST /api/contact - Submit contact form
router.post('/', handleContactSubmit);

export default router;

