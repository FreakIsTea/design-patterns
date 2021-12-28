import { PlayerEventType, playerEventTypes } from "./types/EventType";
import { IListener } from "./types/IListener";
import { IObservable } from "./types/IObservable";

export class ObservablePlayer implements IObservable<PlayerEventType> {
  listeners: Map<PlayerEventType, IListener[]>;
  hp: number;

  constructor() {
    this.listeners = new Map<PlayerEventType, IListener[]>(
      playerEventTypes.map((type: PlayerEventType) => {
        return [type, []];
      })
    );
    playerEventTypes.forEach((type: PlayerEventType) => {
      this.listeners.set(type, []);
    });
    this.hp = 100;
  }

  damage(dmg: number) {
    this.hp -= dmg;
    this.hp == 0 ? this.notify("onDeath", this.hp) : this.notify("onHit", this.hp);
  }

  subscribe(eventType: PlayerEventType, listener: IListener) {
    let eventListeners = this.listeners.get(eventType);
    if (eventListeners != undefined) {
      this.listeners.set(eventType, [...eventListeners, listener]);
      return;
    }
    this.listeners.set(eventType, [listener]);
  }

  unsubscribe(eventType: PlayerEventType, listener: IListener) {
    let eventListeners = this.listeners.get(eventType);
    if (eventListeners != undefined) {
      this.listeners.set(
        eventType,
        eventListeners.filter((eventListener) => eventListener != listener)
      );
      return;
    }
    this.listeners.set(eventType, []);
  }

  notify(eventType: PlayerEventType, data: any) {
    let eventListeners = this.listeners.get(eventType);
    if (eventListeners != undefined) {
      eventListeners.forEach((eventListener) => eventListener.update(data));
    }
  }
}
