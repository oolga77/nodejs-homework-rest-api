const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
    password: {
        type: String,
        minlength: 6,
        required: [true, "Password is required"],
      },
    email: {
        type: String,
        match: emailRegexp,
        required: [true, "Email is required"],
        unique: true,
      },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
      },
    token: {
        type: String,
        default: null,
      },
    avatarURL:{
        type: String,
        required: true,
      },
    verify: {
    type: Boolean,
    default: false,
      },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
      },
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    email:Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const verifyEmailSchema = Joi.object({
  email: Joi.string()
    .messages({ "any.required": `missing required field email` })
    .required(),
});


const loginSchema = Joi.object({
    email:Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const schemas = {
    registerSchema,
    loginSchema,
    verifyEmailSchema
}

const User = model("user", userSchema);

module.exports = {
    User,
    schemas
}