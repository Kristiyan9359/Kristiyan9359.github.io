import { GraduationCap } from 'lucide-react'
import { certificates, education } from '../data'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Always learning" intro="Courses and certifications that support my practical work in C# and .NET development.">
      <ul className="grid gap-6 sm:grid-cols-2">
        {education.map((item) => <li key={item.school} className="reveal flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><GraduationCap className="size-5" aria-hidden="true" /></span>
          <div><h3 className="font-semibold tracking-tight">{item.school}</h3><p className="mt-0.5 text-muted">{item.degree}</p><p className="mt-2 font-mono text-xs text-muted">{item.period}</p></div>
        </li>)}
      </ul>
      <div className="reveal mt-10 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-semibold tracking-tight">Certificates</h3><a href="https://softuni.bg/" target="_blank" rel="noreferrer" className="text-sm font-medium text-accent hover:underline">Software University (SoftUni) ↗</a></div>
        <ul className="mt-5 grid gap-x-10 sm:grid-cols-2">{certificates.map((cert) => <li key={cert.title} className="border-t border-border first:border-t-0 sm:[&:nth-child(2)]:border-t-0"><div className="flex items-center justify-between gap-4 py-3 text-sm"><span>{cert.title}</span><span className="font-mono text-xs text-muted">{cert.issued}</span></div></li>)}</ul>
        <p className="mt-3 text-xs leading-relaxed text-muted">Certificate dates are based on the details in my profile README. Individual verification links can be added where available.</p>
      </div>
    </Section>
  )
}
