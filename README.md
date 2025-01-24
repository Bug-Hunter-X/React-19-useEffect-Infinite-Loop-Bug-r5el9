# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common bug in React 19 applications involving the `useEffect` hook.  The bug is caused by an infinite loop due to incorrect usage of the dependency array within `useEffect`.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected version.

## Bug Description
The `useEffect` hook is designed to perform side effects after a component renders.  If the dependency array is incorrectly specified, it can trigger the effect on every render, creating an infinite loop.

## Solution
In React, when you use state variables or objects in the `useEffect` dependency array, ensure that they are used in a way that does not cause infinite loops. Common mistakes include the direct usage of state without consideration of object references or deep equality checks.

The `bugSolution.js` demonstrates the proper use of dependency array to avoid this error. 