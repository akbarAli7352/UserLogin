var mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
	},
	{ collection: 'user' },
)

//UserSchema.index({ slug: 1, userid: 1 }, { unique: true })

const model = mongoose.model('User', UserSchema)
module.exports = model