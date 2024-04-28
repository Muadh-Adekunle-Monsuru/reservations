const mongoose = require('mongoose');
if (process.argv.length < 3) {
	console.log('give password as argument');
	process.exit(1);
}

const password = process.argv[2];
const url = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);

mongoose
	.connect(url)
	.then(() => {
		console.log('connection has started');
	})
	.catch((err) => console.log(err));

const seatSchema = new mongoose.Schema({
	seatID: String,
});

const Reserve = mongoose.model('Seat', seatSchema);

seatSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Reserve', seatSchema);
