This repo demonstrates inconsistencies between ISR using NextJS 14 and NextJS 15.

This repo uses NextJS 14 with React 18.3.1. See https://github.com/samstr/isr-demo-nextjs15 for the NextJS 15 comparison.

### Steps to reproduce

1. `npm install`
2. `npm run build`
3. `npm start`
4. Go to http://localhost:3000 and click the example links

### Expected behavior

ISR should work correctly. The random number should be cached for 10 seconds as you refresh the page.

### Actual behavior

The number _does_ get cached and then revalidates after 10 seconds. ISR works correctly with NextJS 14.
