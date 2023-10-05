import mongoose, { Schema, Document } from 'mongoose';

export interface IEntry {
    partName: string
    unitPrice: number;
    quantity: number;
    totalPrice: number;
}

export interface ITable extends Document {
    name: string;
    entries: IEntry[];
}

const TableSchema: Schema = new Schema({
    name: { type: String, required: true },
    entries: {
        type: [{
            type: {
                partName: String,
                unitPrice: Number,
                quantity: Number,
                totalPrice: Number
            }
        }],
        default: []
    }
});

export default mongoose.model<ITable>('Table', TableSchema);