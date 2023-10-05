import mongoose, { Schema, Document } from 'mongoose';

export interface IQuote extends Document {
    fileNames: string[];
    name: string;
    validityDate: Date;
    totalAmount: number;
    tables: string[]
}

const QuoteSchema: Schema = new Schema({
    fileNames: { type: [String], default: []},
    name: { type: String, required: true },
    validityDate: { type: Date, required: true },
    totalAmount: { type: Number, required: true,  },
    tables: { type: [{ type: mongoose.Types.ObjectId, ref: 'Tables' }], default: [] }
});

export default mongoose.model<IQuote>('Quotes', QuoteSchema);
