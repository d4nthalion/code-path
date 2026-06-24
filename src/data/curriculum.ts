import type { Language } from '../types';
import { fundamentalsTopic } from './topics/fundamentals';
import { controlTopic } from './topics/control';
import { loopsTopic } from './topics/loops';
import { arraysTopic } from './topics/arrays';
import { functionsTopic } from './topics/functions';
import { oopTopic } from './topics/oop';
import { functionalTopic } from './topics/functional';

export { fundamentalsTopic, controlTopic, loopsTopic, arraysTopic, functionsTopic, oopTopic, functionalTopic };

export const TOPICS = [
  fundamentalsTopic,
  controlTopic,
  loopsTopic,
  arraysTopic,
  functionsTopic,
  oopTopic,
  functionalTopic,
];

export const TOPIC_MAP = Object.fromEntries(TOPICS.map(t => [t.id, t]));

export function lessonKey(topicId: string, lang: Language): string {
  return `${topicId}-${lang}`;
}
