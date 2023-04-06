const RawReactionsMap = new WeakMap();
let currentReaction;
export function observable(value) {
  return new Proxy(value, baseHandlers);
}
export const autorun = (tracker) => {
  const reaction = () => {
    currentReaction = reaction;
    tracker();
    currentReaction = null;
  };
  reaction();
};
const baseHandlers = {
  get(target, key) {
    const result = target[key];
    if (currentReaction) {
      addRawReactionsMap(target, key, currentReaction);
    }
    return result;
  },
  set(target, key, value) {
    target[key] = value;
    RawReactionsMap.get(target)
      ?.get(key)
      ?.forEach((reaction) => reaction());
    // RawReactionsMap.get(target)
    //   ?.get(key)
    //   ?.forEach((reaction) => {
    //     if (typeof reaction._scheduler === "function") {
    //       reaction._scheduler();
    //     } else {
    //       reaction();
    //     }
    //   });

    return true;
  },
};
const addRawReactionsMap = (target, key, reaction) => {
  const reactionsMap = RawReactionsMap.get(target);
  if (reactionsMap) {
    const reactions = reactionsMap.get(key);
    if (reactions) {
      reactions.push(reaction);
    } else {
      reactionsMap.set(key, [reaction]);
    }
    return reactionsMap;
  } else {
    const reactionsMap = new Map();
    reactionsMap.set(key, [reaction]);
    RawReactionsMap.set(target, reactionsMap);
    return reactionsMap;
  }
};

export class Tracker {
  constructor(scheduler) {
    this.track._scheduler = scheduler;
  }
  track: any = (tracker) => {
    currentReaction = this.track;
    return tracker();
  };
}
