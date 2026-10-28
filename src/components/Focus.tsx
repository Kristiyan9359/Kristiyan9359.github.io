import { Code2, Database, ShieldCheck, Workflow } from 'lucide-react'
import { focusAreas } from '../data'
import { Section, Tag } from './Section'

const icons = [Code2, Database, ShieldCheck, Workflow]

export function Focus() {
  return (
    <Section id="focus" eyebrow="What I focus on" title="Building the fundamentals" intro="I am growing as a .NET developer by building complete applications and learning how to make them secure, testable and easier to maintain.">
      <div className="grid gap-5 sm:grid-cols-2">
        {focusAreas.map((item, index) => {
          const Icon = icons[index]
          return <article key={item.title} className="reveal rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-7">
            <span className="mb-4 grid size-11 place-items-center rounded-xl bg-accent-soft text-accent"><Icon className="size-5" aria-hidden="true" /></span>
            <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Related topics">{item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</ul>
          </article>
        })}
      </div>
    </Section>
  )
}
