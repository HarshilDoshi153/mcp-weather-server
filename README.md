# 🌤️ MCP Weather Server

This project provides real-time weather data using the [OpenWeather API](https://openweathermap.org/) and exposes it through a [Model Context Protocol (MCP)](https://github.com/modelcontext/protocol) server. Designed for seamless integration with AI IDEs like Cursor, this MCP tool enables LLM agents to query current weather data for any city.

---

## 🚀 Features

- 🌐 Fetches **live weather data** (temperature, humidity, wind, pressure) by city name
- 🔌 Built using **@modelcontextprotocol/sdk**
- 📡 Powered by **OpenWeather API**
- 🧪 Typed validation with **Zod**
- ⚙️ Ready to integrate with **LLM-based tools** (e.g., Cursor AI, LangChain, etc.)

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/mcp-weather-server.git
cd mcp-weather-server
npm install
