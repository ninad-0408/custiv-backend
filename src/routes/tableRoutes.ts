import express from 'express';
import { getTable, createTable, updateTable, deleteTable } from '../controllers/tableControllers';

const router = express.Router();

router.get('/:id', getTable);
router.post('/', createTable);
router.put('/:id', updateTable);
router.delete('/:id', deleteTable);

export default router;