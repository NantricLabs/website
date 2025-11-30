import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

interface ProjectCardProps {
	project: {
		name: string
		description: string
		link?: string
		githubLink?: string
		tags: string[]
		status: "Production" | "Early Development"
	}
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Card className="h-full relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300 flex flex-col">
			{/* Gradient background */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

			<CardHeader className="relative flex-shrink-0">
				<div className="space-y-2 flex-1">
					<div className="flex items-center gap-2">
						<CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
							{project.name}
						</CardTitle>
					</div>
					<CardDescription className="text-base leading-relaxed">
						{project.description}
					</CardDescription>
				</div>
			</CardHeader>

			<CardContent className="relative flex-1 flex flex-col justify-end space-y-4">
				{(project.link || project.githubLink) && (
					<div className="flex gap-2">
						{project.link && (
							<Button asChild variant="default" size="sm" className="group/btn">
								<Link href={project.link} target="_blank" rel="noopener noreferrer">
									<ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
									Visit Site
								</Link>
							</Button>
						)}
						{project.githubLink && (
							<Button asChild variant="outline" size="sm">
								<Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
									<Github className="h-4 w-4 mr-2" />
									View Source
								</Link>
							</Button>
						)}
					</div>
				)}

				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<Badge key={tag} variant="outline" className="bg-background/50">
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
