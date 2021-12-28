export const playerEventTypes = ["onHit", "onDeath"] as const;
export type PlayerEventType = typeof playerEventTypes[number];
