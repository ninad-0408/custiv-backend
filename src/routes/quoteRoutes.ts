import express from 'express';
import { getQuote, getQuotes, createQuote, updateQuote, deleteQuote } from '../controllers/quoteControllers'

const router = express.Router();

router.get('/:id', getQuote);
router.get('/', getQuotes)
router.post('/', createQuote);
router.put('/:id', updateQuote);
router.delete('/:id', deleteQuote);

export default router;
