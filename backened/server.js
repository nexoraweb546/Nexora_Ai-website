require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

// Frontend serve karo
app.use(express.static(path.join(__dirname, "..")));
// Demo AI Chat API
app.post("/api/chat", (req, res) => {
    const message = req.body.message?.toLowerCase().trim();

    let reply;

    if (!message) {
        reply = "Please enter a message.";
    } 
    else if (message.includes("hello") || message.includes("hi")) {
        reply = "Hello! 👋 Welcome to Nexora AI. How can I help you today?";
    } 
    else if (message.includes("service")) {
        reply = "Nexora AI provides AI automation, business solutions, and smart technology services.";
    } 
    else if (message.includes("whatsapp")) {
        reply = "Nexora AI can help businesses automate WhatsApp communication and customer support.";
    } 
    else if (message.includes("contact")) {
        reply = "You can contact the Nexora AI team through the contact section on our website.";
    } 
    else {
        reply = "I'm Nexora AI Assistant 🤖. Ask me about our services, WhatsApp automation, or contact options.";
    }

    res.json({ reply });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Nexora AI running on http://localhost:${PORT}`);
});
