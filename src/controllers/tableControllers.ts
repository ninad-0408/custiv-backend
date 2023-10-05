import { Request, Response } from 'express';
import Table, { ITable } from '../models/Table';

export const getTable = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const table: ITable | null = await Table.findById(id)

        if (!table) {
            return res.status(404).json({ error: 'Table not found' });
        }

        res.status(200).json(table);

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }

}

export const createTable = async (req: Request, res: Response) => {
    try {
        const { name, entries } = req.body;

        const table: ITable = new Table({ name, entries });
        const savedTable = await table.save();
        res.status(200).json(savedTable);

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }

}


export const updateTable = async (req: Request, res: Response) => {
    try {
        const { name, entries } = req.body;

        const updatedTable: ITable | null = await Table.findByIdAndUpdate(
            req.params.id,
            { name, entries },
            { new: true }
        );

        if (!updatedTable) {
            return res.status(404).json({ message: 'Table not found' });
        }

        return res.status(200).json(updatedTable);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteTable = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const table: ITable | null = await Table.findByIdAndDelete(id);

        if (!table) {
            return res.status(404).json({ error: 'Table not found' });
        }

        res.status(200).json({message: 'Table deleted'});

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }

}