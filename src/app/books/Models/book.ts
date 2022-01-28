import { IBookCopy } from "../../book-copies/Models/IBookCopy";

 export interface IBook{
    id :number;
    title: string;
    author: string;
    bookCopies: IBookCopy[] | null;
 }