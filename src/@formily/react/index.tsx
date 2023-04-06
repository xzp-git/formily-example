import React, { useReducer, useRef } from "react";
import { Tracker } from "../reactive";
export const Observer = (props) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const trackerRef = useRef<null | Tracker>(null);
  if (!trackerRef.current) trackerRef.current = new Tracker(forceUpdate);
  return trackerRef.current.track(props.children);
};
