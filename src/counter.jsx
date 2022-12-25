import { useState, If, Else, ElseIf, useEffect } from 'dharti';
import Button from './Button';
const Counter = () => {
  const count = useState(0);
  const show = useState(false);
  const double = () => count() * 2;
  useEffect(() => console.log(count()));
  return (
    <>
      <If condition={count() >= 50}>
        <p>Count is dangerously high {count()}</p>
        <ElseIf condition={count() > 10 && count() < 50}>
          <h3>Count is bit higher {count()}</h3>
        </ElseIf>
        <Else>
          <h2>{double()}</h2>
          <h1>{count()} </h1>
        </Else>
      </If>
      <If condition={show()}>
        <Else>
          <div>
            <input type="checkbox" bind:checked={show} />
            <label>Show Increment and Decrement buttons</label>
          </div>
        </Else>
        <Button onclick={() => count((prev) => ++prev)}>increment</Button>
        <Button onclick={() => count((prev) => --prev)}>decrement</Button>
      </If>
      <br />
      <input type="number" bind:value={count} />
    </>
  );
};

export default Counter;
