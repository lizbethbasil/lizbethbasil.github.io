export class BookModel {
    constructor(
        public bookCode: Number,
        public bookName: String,
        public authorName: String,
        public description: String,
        public rating: Number,
        public imageURL: String
    ) { }
}