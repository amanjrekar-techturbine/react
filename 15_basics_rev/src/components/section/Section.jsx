import React, { memo } from 'react'

function Section() {

  console.log("This is Child Component")
  return <input type="text" />;
}

export default memo(Section)