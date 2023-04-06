import { observable } from "@formily/reactive";
import { Observer } from "@formily/react";

// import { observable } from './@formily/reactive'
// import { Observer } from './@formily/react'
const username = observable({ value: "foo" });
const age = observable({ value: 14 });
export default () => {
  return (
    <>
      <Observer>
        {() => (
          <input
            value={username.value}
            onChange={(event) => {
              username.value = event.target.value;
            }}
          />
        )}
      </Observer>
      <Observer>
        {() => {
          console.log("username render");
          return <div>{username.value}</div>;
        }}
      </Observer>
      <Observer>
        {() => (
          <input
            value={age.value}
            onChange={(event) => {
              age.value = +event.target.value;
            }}
          />
        )}
      </Observer>
      <Observer>
        {() => {
          console.log("age render");
          return <div>{age.value}</div>;
        }}
      </Observer>
    </>
  );
};
