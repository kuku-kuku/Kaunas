import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function NewsSingle() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [state, setState] = useState({ loading: true, error: "" });

  useEffect(() => {
    let alive = true;
    (async () => {
      setState({ loading: true, error: "" });
      try {
        const res = await fetch(`/api/news?slug=${encodeURIComponent(slug)}`);
        const json = await res.json();
        if (!alive) return;

        if (!res.ok || json?.error) {
          setState({ loading: false, error: json?.error || "Naujiena nerasta" });
          setData(null);
          return;
        }

        setData({
          title: json.title,
          date: json.date,
          summary: json.summary || "",
          content: json.content || "",
          images: Array.isArray(json.images) ? json.images : [],
        });
        setState({ loading: false, error: "" });
      } catch (e) {
        if (!alive) return;
        setState({ loading: false, error: "Nepavyko pasiekti API" });
        setData(null);
      }
    })();
    return () => { alive = false; };
  }, [slug]);

  if (state.loading) return <div className="max-w-3xl mx-auto p-6">Kraunama…</div>;
  if (state.error) return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/naujienos" className="text-sky-600 hover:underline">← Grįžti į naujienas</Link>
      <p className="mt-4 text-red-600">{state.error}</p>
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link to="/naujienos" className="text-sky-600 hover:underline">← Grįžti į naujienas</Link>
        <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>
        <p className="text-gray-500">{new Date(data.date).toLocaleDateString("lt-LT")}</p>

        {data.images?.length ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {data.images.map((src, i) => (
              <img key={i} src={src} alt="" className="rounded-lg shadow" loading="lazy" />
            ))}
          </div>
        ) : null}

        <article className="prose max-w-none">
          {data.content ? <p style={{ whiteSpace: "pre-line" }}>{data.content}</p> : <p>{data.summary}</p>}
        </article>
      </div>
    </section>
  );
}
