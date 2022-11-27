# `@tylrk/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Duolingo - written in TypeScript and meant for the browser (uses `localStorage`).

## Install

```shell
yarn add @tylrk/streak-counter
```

npm install @tylrk/streak-counter


## Usage

import {streakCounter} from '@tylrk/streak-counter'

const today = new Date()
const streak = streakCounter(localStorage, today)
// streak returns an object:
// {
    currentCount: 1,
    lastLoginDate: "11/26/2022",
    startDate: "11/26/2022",
// }