const tag2id = require('../../../utils/tag2id');

module.exports.code = 17207;
module.exports.payload = tag => {
  let id = tag2id.tag2id(tag);
  let buf = Buffer.alloc(8);

  buf.writeInt32BE(id.high, 0);
  buf.writeInt32BE(id.low, 4);
  return buf
};