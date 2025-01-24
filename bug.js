```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is a common mistake: using a non-primitive value in the dependency array
    // leads to an infinite loop because the useEffect will run on every render.
    console.log('useEffect runs!');
  }, [count]); // This causes an infinite loop

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```