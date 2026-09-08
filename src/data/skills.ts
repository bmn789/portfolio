export type SkillChip = {
  name: string
  bg: string
  text: string
  border: string
  dot: string
}

export const agenticSkills: SkillChip[] = [
  { name: 'Agentic Development', bg: 'bg-fuchsia-500/15', text: 'text-fuchsia-400', border: 'border-fuchsia-500/30', dot: 'bg-fuchsia-400' },
  { name: 'Google ADK', bg: 'bg-pink-500/15', text: 'text-pink-400', border: 'border-pink-500/30', dot: 'bg-pink-400' },
  { name: 'RAG', bg: 'bg-purple-600/15', text: 'text-purple-400', border: 'border-purple-600/30', dot: 'bg-purple-400' },
  { name: 'LLMs', bg: 'bg-sky-400/15', text: 'text-sky-300', border: 'border-sky-400/30', dot: 'bg-sky-300' },
  { name: 'Prompt Engineering', bg: 'bg-violet-500/15', text: 'text-violet-400', border: 'border-violet-500/30', dot: 'bg-violet-400' },
  { name: 'Multi-Agent Systems', bg: 'bg-rose-500/15', text: 'text-rose-400', border: 'border-rose-500/30', dot: 'bg-rose-400' },
  { name: 'Tool Calling', bg: 'bg-indigo-500/15', text: 'text-indigo-400', border: 'border-indigo-500/30', dot: 'bg-indigo-400' },
  { name: 'Agent Orchestration', bg: 'bg-cyan-500/15', text: 'text-cyan-400', border: 'border-cyan-500/30', dot: 'bg-cyan-400' }
]
