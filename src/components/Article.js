import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Logic for displaying coffee or bento box emojis
  const emoji =
    minutes < 30
      ? "☕️".repeat(Math.ceil(minutes / 5))
      : "🍱".repeat(Math.ceil(minutes / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{emoji} {minutes} min read</p>
    </article>
  );
}

export default Article;
