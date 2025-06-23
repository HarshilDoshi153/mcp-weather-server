import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const server = new McpServer({
    name: 'Whether Server',
    version: '1.0.0'
})

async function getWhetherDataByCity(city = '') {
    const api = {
        key: "88f6901bb3e413e38995495a088991ef",
        base: "https://api.openweathermap.org/data/2.5/"
    };
    try {
        const res = await fetch(`${api.base}weather?units=metric&appid=${api.key}&q=${city}`);
        const result = await res.json();
        if (result.cod === 200) {
            return result;
        } else {
            return {
                temp: null,
                error: 'Unable to get data'
            };
        }
    } catch (error) {
        return {
            temp: null,
            error: 'API fetch failed'
        };
    }
}
// await getWhetherDataByCity('ahmedabad');
server.tool('getWhetherDataByCityName',
    {
        city: z.string(),
    },
    async ({ city }) => {
        return {
            content: [{ type: 'text', text: JSON.stringify(await getWhetherDataByCity(city)) }]
        }
    }
)
async function init() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}
init();
console.log("Hello")