const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, "Username is required"]
        },

        email: {
            type: String,
            unique: true,
            required: [true, "Email is required"]
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            select:false
        },

        bio: {
            type: String
        },

        profileImage: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre("save", async function() {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;