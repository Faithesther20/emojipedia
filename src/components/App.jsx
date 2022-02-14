import React from "react";

import emojipedia from "../emojipedia";
import Card from "./Card";

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

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiList)}</dl>
    </div>
  );
}

export default App;
