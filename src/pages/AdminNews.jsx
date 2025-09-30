import React, { useMemo, useState } from "react";

const API = "/api/news";
const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY || "";

export default function AdminNews() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    date: "",
    summary: "",
    content: "",
    imageUrls: "",
    key: "",
  });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const previewLink = useMemo(
    () => (form.slug ? `/naujienos/${form.slug}` : ""),
    [form.slug]
  );

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: "info", msg: "Keliama..." });

    try {
      if (!ADMIN_KEY) {
        throw new Error("Nesetintas VITE_ADMIN_KEY aplinkos kintamasis.");
      }
      if (form.key !== ADMIN_KEY) {
        setStatus({ type: "error", msg: "Neteisingas admin raktas." });
        return;
      }
      if (!form.title || !form.slug || !form.date) {
        setStatus({ type: "error", msg: "Užpildyk privalomus laukus." });
        return;
      }

      const resp = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": form.key,
        },
        body: JSON.stringify({
          title: form.title.trim(),
          slug: form.slug.trim(),
          date: form.date,
          summary: form.summary.trim(),
          content: form.content,
          imageUrls: form.imageUrls
            ? form.imageUrls
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
            : [],
        }),
      });

      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error || "Nepavyko sukurti");

      setStatus({ type: "success", msg: "Sukurta ✅" });
      setForm((s) => ({
        ...s,
        title: "",
        slug: "",
        date: "",
        summary: "",
        content: "",
        imageUrls: "",
        // paliekam key, kad nereiktų kaskart vesti
      }));
    } catch (err) {
      setStatus({ type: "error", msg: err.message || "Klaida" });
    }
  };

  const badge =
    status.type === "success"
      ? "bg-green-100 text-green-800"
      : status.type === "error"
      ? "bg-red-100 text-red-800"
      : "bg-blue-100 text-blue-800";

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 pt-28 sm:pt-32 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sukurti naujieną</h1>

        {status.msg ? (
          <div className={`inline-block px-3 py-2 rounded mb-6 text-sm ${badge}`}>
            {status.msg}
          </div>
        ) : null}

        <form
          onSubmit={submit}
          className="bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Pavadinimas *
              </label>
              <input
                name="title"
                value={form.title}
                onChange={onChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Pvz. KAFF Prezidento taurė"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Slug (unikalus) *
              </label>
              <input
                name="slug"
                value={form.slug}
                onChange={onChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="pvz. kaff-prezidento-2025"
                required
              />
              {previewLink ? (
                <p className="text-xs text-gray-500 mt-1">
                  Nuoroda: <span className="font-mono">{previewLink}</span>
                </p>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Data *
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Nuotraukų URL'ai (kableliais)
              </label>
              <input
                name="imageUrls"
                value={form.imageUrls}
                onChange={onChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="https://.../1.jpg, https://.../2.jpg"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Trumpas aprašas
            </label>
            <input
              name="summary"
              value={form.summary}
              onChange={onChange}
              className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="1–2 sakiniai kortelei"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Pilnas tekstas (Markdown leidžiamas)
            </label>
            <textarea
              name="content"
              value={form.content}
              onChange={onChange}
              className="rounded-lg border border-gray-300 px-3 py-2 min-h-[140px] outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Pilnas įvykio aprašymas..."
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end gap-3">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Admin raktas *
              </label>
              <input
                name="key"
                value={form.key}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Saugus slaptažodis"
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium px-5 py-2.5 transition"
            >
              Publikuoti
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
