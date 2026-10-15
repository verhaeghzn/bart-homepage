export const topics = ['llm', 'coding', 'publications'] as const;

export type Topic = (typeof topics)[number];

export const topicLabels: Record<Topic, string> = {
	llm: 'Language models',
	coding: 'Coding',
	publications: 'Publications',
};

export function isTopic(value: string): value is Topic {
	return (topics as readonly string[]).includes(value);
}
