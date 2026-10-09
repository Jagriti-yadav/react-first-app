import { useState, useEffect } from "react";

const languageInfo = {
  java: "Java is a class-based, object-oriented language known for portability (JVM) and heavy use in enterprise backend systems.",
  python: "Python is a dynamically typed, easy-to-read language popular for scripting, data science, and web backends.",
  javascript: "JavaScript is the language of the web browser, also used on servers via Node.js.",
  cpp: "C++ is a compiled, high-performance language used in systems programming, games, and embedded software.",
};

export default function UseffectExample() {
  const [selectedLang, setSelectedLang] = useState("java");
  const [info, setInfo] = useState("");
  const [time, setTime] = useState(new Date()); // NEW: clock state

  // Existing effect — runs when selectedLang changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setInfo(languageInfo[selectedLang] || "No info available for this language.");
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedLang]);

  // NEW: separate effect for the live clock — runs once on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Language Info Search</h2>

      {/* NEW: clock display */}
      <p style={{ fontSize: 20, fontWeight: "bold", color: "#555" }}>
        🕒 {time.toLocaleTimeString()}
      </p>

      <select
        value={selectedLang}
        onChange={(e) => setSelectedLang(e.target.value)}
        style={{ padding: 8, fontSize: 16, width: "100%" }}
      >
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="cpp">C++</option>
      </select>

      <p style={{ marginTop: 20, lineHeight: 1.5 }}>{info}</p>
    </div>
  );
}