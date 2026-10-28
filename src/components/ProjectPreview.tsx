import type { Preview } from '../data'

export function ProjectPreview({ preview }: { preview: Preview }) {
  const motion = 'transition duration-500 group-hover:scale-[1.02]'
  const fit = preview.fit === 'contain' ? 'object-contain p-4 sm:p-8' : 'object-cover object-top'
  return <img src={preview.src} alt={preview.alt} loading="lazy" className={`size-full ${fit} ${motion}`} />
}
