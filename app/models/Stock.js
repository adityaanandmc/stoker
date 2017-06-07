const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var StockSchema = new Schema({
  symbol: String,
  avgCallsIV: Number,
  avgPutsIV: Number,
  underlyingStock: Number
});

mongoose.model('Stock', StockSchema);
