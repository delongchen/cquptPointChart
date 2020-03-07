export const chartToolSet = [
  {
    x: {
      f: o => o.vx,
      text: '综合素质分'
    },
    y: {
      f:o => o.vy * 2 + 5,
      text: '平均成绩'
    }
  },
  {
    x: {
      f:o => o.vx + o.vy,
      text: '我是X'
    },
    y: {
      f:o => o.vx * o.vy,
      text: '我是Y'
    }
  }
];
