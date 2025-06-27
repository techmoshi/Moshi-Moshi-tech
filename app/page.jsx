import Header from '@/components/Header'
import SkillBadge from '@/components/SkillBadge'

export default function Home() {
  const skills = [
    'React', 'Next.js', 'Node.js', 'Docker', 'AWS',
    'TypeScript', 'GraphQL', 'Kubernetes', 'Python', 'AI/ML'
  ];

  const team = [
    { name: 'Ajay', role: 'Frontend Developer' },
    { name: 'Sneha', role: 'Backend Developer' },
    { name: 'Kashi', role: 'DevOps Engineer' }
  ];

  const projects = [
    { name: 'Startup X Website', tech: 'Next.js, Tailwind' },
    { name: 'E-commerce Backend', tech: 'Node.js, MongoDB' },
    { name: 'Internal Dashboard', tech: 'React, AWS' }
  ];

  return (
    <main className="min-h-screen px-4 py-10">
      <Header />

      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Core Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {skills.map(skill => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map(member => (
            <div key={member.name} className="bg-gray-900 p-4 rounded text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map(project => (
            <div key={project.name} className="bg-gray-800 p-4 rounded">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-400">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}