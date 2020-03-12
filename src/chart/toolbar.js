export const chartToolSet = [
  {
    x: {
      f: o => o.vx,
      text: '综合素质分'
    },
    y: {
      f:o => o.vy,
      text: '学科成绩'
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
