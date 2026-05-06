"use client";

import { FormEvent, useState } from "react";

type JournalEntry = {
  text: string;
  mood: string;
  createdAt: string;
};

const STORAGE_KEY = "hasos:selfmap:entries";

export default function JournalForm() {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("neutral");
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const entry: JournalEntry = {
      text,
      mood,
      createdAt: new Date().toISOString(),
    };

    const existing = localStorage.getItem(STORAGE_KEY);
    const entries: JournalEntry[] = existing ? JSON.parse(existing) : [];

    entries.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));

    setText("");
    setMood("neutral");
    setStatus("Entry salva com sucesso.");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
      <label htmlFor="journal-text">Texto</label>
      <textarea
        id="journal-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        required
      />

      <label htmlFor="journal-mood">Humor</label>
      <select
        id="journal-mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      >
        <option value="great">Great</option>
        <option value="good">Good</option>
        <option value="neutral">Neutral</option>
        <option value="bad">Bad</option>
        <option value="awful">Awful</option>
      </select>

      <button type="submit">Salvar entrada</button>
      {status ? <p>{status}</p> : null}
    </form>
  );
}
