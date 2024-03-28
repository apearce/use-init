# use-init

A simple hook to abstract away storing the result of an expensive operation in a `ref`. It takes a `function` as an argument which will be executed on the first render and the result will be stored in a `ref`. On subsequent renders, the `current` property of the `ref` will be returned without re-running the function.

Take [this example](https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents) from the React docs:

```jsx
const playerRef = useRef(null);

if (playerRef.current === null) {
  playerRef.current = new VideoPlayer();
}
```
Instead you can just write:

```jsx
const player = useInit(() => new VideoPlayer());
```

You then use the player by just calling `player` instead of `player.current`.

It does not take a dependency array and will never re-run the function even if something changes, so you could also think of it as:

```jsx
const foo = useMemo(() => someExpensiveOperation(), []);
```
