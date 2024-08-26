const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//reaction schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxl,ength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        }
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
    );

//thought schema
const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timeStamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionShema],
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      }
    );

//virtual reactionCount that retrieves the length of the thought reactions array]
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

//thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;