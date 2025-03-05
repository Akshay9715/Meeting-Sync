import { useState } from "react";

const Summarizer = ({ translatedText }) => {
  const hfToken = import.meta.env.VITE_HF_TOKEN;
  const formatSummary = (text) => {
    if (!text) return [];

    const regex = /\*\*(.*?)\*\*:(.*?)(?=(\*\*|$))/gs;
    let matches,
      result = [];

    while ((matches = regex.exec(text)) !== null) {
      result.push([`**${matches[1]}**: ${matches[2].trim()}`]);
    }
    const formatSummary2 = (list) => {
      let result2 = {};

      list.forEach((item) => {
        const match = item[0].match(/\*\*(.*?)\*\*:\s*(.*)/);
        if (match) {
          const title = match[1]; // Extract title
          const content = match[2].split("; ").map((text) => [text.trim()]); // Split content into nested list

          result2[title] = content;
        }
      });
      return result2;
    };
    formatSummary2(result);
    return result;
  };

  const formatSummary2 = (list) => {
    let result2 = {};

    list.forEach((item) => {
      const match = item[0].match(/\*\*(.*?)\*\*:\s*(.*)/);
      if (match) {
        const title = match[1]; // Extract title
        const content = match[2].split("; ").map((text) => [text.trim()]); // Split content into nested list

        result2[title] = content;
      }
    });
    return result2;
  };

  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function summarizeText(translatedText) {
    setLoading(true);
    setError("");
    setSummary("");

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/akshay9125/Transcript_Summerizer",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${hfToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: [translatedText] }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSummary(data[0]?.generated_text || "No response");
      } else {
        setError(data.error || "Failed to generate summary.");
      }
    } catch (err) {
      setLoading(true);
      setSummary("Server is too busy Click");
    }

    setLoading(false);
    s;
  }

  return (
    <div>
      <div>
        {translatedText.length > 0 ? (
          <button
            onClick={() => summarizeText(translatedText)}
            disabled={loading}
            className="border rounded-md p-2 hover:cursor-pointer hover:bg-green-400 hover:text-black mx-20 px-6"
          >
            {loading ? "Summarizing..." : "Summarize"}
          </button>
        ) : null}

        {error && <p>{error}</p>}
      </div>
      {summary && (
        <div className="border rounded-md">
          <h3 className="text-xl font-bold p-3 underline">Summary :-</h3>
          <div className="p-5">
            {Object.entries(formatSummary2(formatSummary(summary))).map(
              ([title, points], index) => (
                <div key={index} style={{ marginBottom: "16px" }}>
                  <h3>{title}</h3>
                  <ul>
                    {points.map((point, i) => (
                      <li key={i} style={{ textAlign: "left" }}>
                        {point[0]}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
          <div className="border flex justify-center m-5 p-1 bg-green-600 hover:bg-green-900 rounded-md">
            <a
              href="https://forms.gle/MZSYKTutXFT3jDK67"
              target="_blank"
              className=""
            >
              Share Your Feedback
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summarizer;
