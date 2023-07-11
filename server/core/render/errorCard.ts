const errorCard = (errMsg: string, errInfo: string) => {
  return `
    <svg width="400" height="140" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#F3F4F6" rx="4.5" stroke="#e4e2e2" stroke-opacity="1" width="100%" height="100%"></rect>
      <text x="10" y="50" text-anchor="start" fill="red">
        ${errInfo}
      </text>
      <foreignObject width="400" height="180">
      <body xmlns="http://www.w3.org/1999/xhtml">
        <p style="margin-top:60px; color:red;font-size:12px;"> ${errMsg}</p>
      </body>
    </foreignObject>
    </svg>
  `
}

export default errorCard
