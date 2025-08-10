import { config } from 'dotenv';
import { Agent } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  // Create agent
  const agent = await Agent.create({
    name: 'DevAgent',
    model: 'gpt-4o',
    systemPrompt: 'You are a development assistant with access to GitHub and filesystem.'
  });

  // Add MCP servers (environment variables loaded automatically)
  await agent.addMCPServers([
    {
      name: 'github',
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-github"]
      // GITHUB_PERSONAL_ACCESS_TOKEN loaded from .env
    },
    {
      name: 'filesystem',
      command: "npx", 
      args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/Documents"]
    }
  ]);

  // Use MCP tools automatically
  const response = await agent.ask(`
    List my GitHub repositories, 
    find the most recent one,
    and save a summary to a file called 'latest-repo.txt'
  `);

  console.log('MCP Integration Response:', response);
  // Agent automatically uses GitHub API and filesystem tools
}

main().catch(console.error);