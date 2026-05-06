import JournalForm from "@/components/JournalForm";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>HASOS SelfMap</h1>
      <p>Map your patterns.</p>
      <JournalForm />
    </main>
  );
}
