import { Request, Response } from 'express';
import Quote, { IQuote } from '../models/Quote';

export const getQuote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const quote: IQuote | null = await Quote.findById(id);

        if (!quote) {
            return res.status(404).json({ error: 'Quote not found' });
        }

        res.status(200).json(quote);

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }

}

export const getQuotes = async (req: Request, res: Response) => {
    try {
        const quotes: IQuote[] | [] = await Quote.find({}, { _id: 1, name: 1, totalAmount: 1, validityDate: 1 });

        res.status(200).json(quotes);

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }

}

export const createQuote = async (req: Request, res: Response) => {
    try {
        const { fileNames, name, validityDate, totalAmount } = req.body;

        const quote: IQuote = new Quote({ fileNames, name, validityDate, totalAmount });
        const savedQuote = await quote.save();
        res.status(200).json(savedQuote);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const updateQuote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { fileNames, name, validityDate, totalAmount } = req.body;

        const updatedQuote: IQuote | null = await Quote.findByIdAndUpdate(
            id,
            { fileNames, name, validityDate, totalAmount },
            { new: true }
        );

        if (!updatedQuote) {
            return res.status(404).json({ error: 'Quote not found' });
        }

        res.status(200).json(updatedQuote);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const deleteQuote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const quote: IQuote | null = await Quote.findByIdAndDelete(id);

        if (!quote) {
            return res.status(404).json({ error: 'Quote not found' });
        }

        res.status(200).json({message: 'Quote deleted'});

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }

}