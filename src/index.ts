import { ObservablePlayer } from "./observer/ObservablePlayer";
import { IListener } from "./observer/types/IListener";

let newPlayer = new ObservablePlayer();

let listener1: IListener = {
  update: (...args: any[]) => {
    console.log("Listener 1 triggered with args: ", args);
  },
};

let listener2: IListener = {
  update: (...args: any[]) => {
    console.log("Listener 2 flapped with args: ", args);
  },
};
let listener3: IListener = {
  update: (...args: any[]) => {
    console.log("Listener 3 yeeted with args: ", args);
  },
};

newPlayer.subscribe("onHit", listener1);
newPlayer.subscribe("onHit", listener2);
newPlayer.subscribe("onDeath", listener3);

for (let i = 0; i < 10; i++) {
  newPlayer.damage(10);
}
