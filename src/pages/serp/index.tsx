import { useState } from "react";

function HomePage() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const askQuestion = async () => {

    try {
      const res = await fetch("/api/serpAgent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      })
      const data = await res.json()
      setAnswer(data.answer)
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-600 text-gray-700 p-5">
      <h1 className="mb-5 text-3xl text-white font-bold">
        SerpAgent - Web Scraper
      </h1>

      <div className="w-full max-w-md bg-white p-5 rounded shadow-lg">
        <label
          htmlFor="question"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Your Question:
        </label>

        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full mb-4 p-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
        />

        <button
          onClick={askQuestion}
          className="w-full py-2 text-white bg-blue-500 hover:bg-blue-400 rounded focus:outline-none focus:shadow-outline"
        >
          Ask
        </button>

        <div className="mt-5">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Answer:
          </label>

          <p className="p-3 bg-gray-200 rounded text-gray-700">
            {answer || "Your answer will appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
}


export default HomePage;
