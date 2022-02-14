import React from "react";

import emojipedia from "../emojipedia";
import Card from "./Card";

// map
function emojiList(emojies) {
  return (
    <Card
      key={emojies.id}
      emojiName={emojies.emoji}
      title={emojies.name}
      data={emojies.meaning}
    />
  );
}

function Entry() {
  return <dl className="dictionary">{emojipedia.map(emojiList)}</dl>;
}
export default Entry;
