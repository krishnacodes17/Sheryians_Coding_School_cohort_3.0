import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import mongoose from "mongoose"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, ".env") })

const { connectToDB } = await import("./config/db.js")
const { default: productModel } = await import("./models/product.model.js")

const products = [
    {
        title: "Wireless Bluetooth Headphones",
        description: "Over-ear headphones with active noise cancellation and 30-hour battery life.",
        price: { amount: "2999", currency: "INR" }
    },
    {
        title: "Smart Fitness Watch",
        description: "Tracks heart rate, steps, sleep and supports multiple sports modes.",
        price: { amount: "1999", currency: "INR" }
    },
    {
        title: "Mechanical Gaming Keyboard",
        description: "RGB backlit mechanical keyboard with blue switches and anti-ghosting keys.",
        price: { amount: "3499", currency: "INR" }
    },
    {
        title: "Portable Power Bank 20000mAh",
        description: "Fast charging power bank with dual USB output and Type-C input.",
        price: { amount: "1499", currency: "INR" }
    },
    {
        title: "Full HD Webcam",
        description: "1080p webcam with built-in microphone and auto light correction.",
        price: { amount: "1799", currency: "INR" }
    },
    {
        title: "Ergonomic Wireless Mouse",
        description: "Silent click wireless mouse with adjustable DPI and long battery life.",
        price: { amount: "899", currency: "INR" }
    },
    {
        title: "USB-C Fast Charger 65W",
        description: "Compact GaN charger with dual ports for laptops, phones and tablets.",
        price: { amount: "1299", currency: "INR" }
    },
    {
        title: "Bluetooth Portable Speaker",
        description: "Waterproof speaker with deep bass, 12-hour playtime and built-in mic.",
        price: { amount: "2199", currency: "INR" }
    },
    {
        title: "Laptop Backpack",
        description: "Water-resistant backpack with padded laptop compartment and USB port.",
        price: { amount: "1099", currency: "INR" }
    },
    {
        title: "Ring Light with Tripod Stand",
        description: "10-inch LED ring light with adjustable color modes for video and streaming.",
        price: { amount: "799", currency: "INR" }
    }
]

const seedProducts = async () => {
    try {
        await connectToDB()
        await productModel.deleteMany({})
        const inserted = await productModel.insertMany(products)
        console.log(`${inserted.length} products seeded successfully`)
    } catch (error) {
        console.error("Seeding failed:", error.message)
    } finally {
        await mongoose.connection.close()
        console.log("Database connection closed")
    }
}

seedProducts()
