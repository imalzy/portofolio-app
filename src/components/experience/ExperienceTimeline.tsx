import { experienceRecords } from '@/data/experience'
import { ExperienceCard } from './ExperienceCard'

interface ExperienceTimelineProps {
  limit?: number
  compact?: boolean
}

export function ExperienceTimeline({ limit, compact = false }: ExperienceTimelineProps) {
  const displayedRecords = limit ? experienceRecords.slice(0, limit) : experienceRecords

  return (
    <div className="space-y-6">
      {displayedRecords.map((record) => (
        <ExperienceCard key={record.id} record={record} compact={compact} />
      ))}
    </div>
  )
}
