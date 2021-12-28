import { IListener } from "./IListener";

export interface IObservable<EventType> {
  listeners: Map<EventType, IListener[]>;
  subscribe: (eventType: EventType, listener: IListener) => void;
  unsubscribe: (eventType: EventType, listener: IListener) => void;
  notify: (eventType: EventType, data: any) => void;
}
