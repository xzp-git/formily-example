import { observable, autorun } from "@formily/reactive";
// import { observable, autorun } from "./@formily/reactive";

const obs = () => {
  const obs = observable({
    name: "foo",
  });
  const tracker = () => {
    console.log(obs.name);
  };
  autorun(tracker);
  obs.name = "bar";
  return <h1>observable</h1>;
};

export default obs;
