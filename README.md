# MCP Integration

This project demonstrates how to connect agents with external tools using Model Context Protocol (MCP) in the Astreus AI framework.

## Features

- **MCP Server Integration**: Connect to external MCP servers
- **Tool Discovery**: Automatic discovery of available tools
- **Seamless Usage**: Agents automatically use MCP tools when needed
- **Multiple Protocols**: Support for various MCP implementations

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Edit the `.env` file and add your API keys

## Running

```bash
npm run dev
```

## Code Explanation

The example shows how to add MCP servers for GitHub and filesystem access, allowing agents to interact with external services automatically.

## Environment Variables

```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
GITHUB_PERSONAL_ACCESS_TOKEN=ghp_***
BRAVE_API_KEY=your-brave-api-key
DB_URL=sqlite://./astreus.db
```

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [MCP Features](https://astreus.org/docs/framework/mcp)
- [GitHub Repository](https://github.com/astreus-ai/astreus)