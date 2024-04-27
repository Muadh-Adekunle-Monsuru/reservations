require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const Reserve = require('./mongo');

let taken = [500, 200];
const selected = [];

app.get('/', (request, response) => {
	Reserve.find({}).then((seats) => response.json(seats));
});

app.post('/test', (request, response) => {
	let newReserves = JSON.parse(request.body.reserved);
	console.log(newReserves);
	newReserves.map((val) => {
		const seat = new Reserve({
			seatID: val,
		});
		seat.save().then((savedSeat) => {
			console.log(`Seat ${savedSeat} saved successfully`);
		});
	});
	response.json('saved successfully');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port  ${PORT}`);
});
