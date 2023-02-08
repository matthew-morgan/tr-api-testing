import { render, waitFor } from '@testing-library/react';
import { setupWorker, rest } from 'msw';

const worker = setupWorker(
  rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        {
          name: 'Luke Skywalker'
        },
      ],
    }));
  }),
);

worker.start(); 