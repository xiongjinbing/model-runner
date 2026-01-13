import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function TapNowApp() {
  const [apiKey, setApiKey] = useState("");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function runModel() {
    if (!apiKey || !prompt) return;
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await res.json();
      setResult(data.choices?.[0]?.message?.content || "No response");
    } catch (e) {
      setResult("Request failed");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl bg-slate-900/60 border-slate-800 rounded-2xl shadow-xl">
        <CardContent className="space-y-4 p-6">
          <h1 className="text-2xl font-semibold">TapNow · AI Instant Tool</h1>
          <p className="text-sm text-slate-400">Paste your model API key and start using AI instantly.</p>

          <Input
            placeholder="Your API Key"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />

          <Textarea
            placeholder="Enter your prompt..."
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <Button onClick={runModel} disabled={loading} className="w-full rounded-xl">
            {loading ? "Running…" : "Run"}
          </Button>

          {result && (
            <div className="mt-4 p-4 bg-black/40 rounded-xl text-sm whitespace-pre-wrap">
              {result}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
