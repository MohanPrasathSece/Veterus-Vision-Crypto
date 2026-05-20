import { motion } from "motion/react";

const cards = [
  { title: "You're Still the Answer to Every Question", body: "Every decision routes back through you. The team waits, momentum stalls, and your week disappears into firefighting.", tag: "01" },
  { title: "Growth Is Adding Pressure, Not Freedom", body: "Revenue is up, but so is the weight on your shoulders. Scaling has multiplied the chaos instead of removing it.", tag: "02" },
  { title: "You've Tried to Hire Your Way Out", body: "Good people, wrong structure. Without clear ownership and operating rhythm, the org keeps depending on you.", tag: "03" },
  { title: "Your Business Depends Too Much on You", body: "The company has real value — but only while you're in the room. That's a fragile asset, not an enterprise.", tag: "04" },
];

export function Problem() {
  return (
    <section id="problem" className="relative bg-[#f7f7f5] py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-xs uppercase tracking-[0.22em] text-[#6b7280]">The Diagnosis</span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              You Might
              <br />
              Recognise This.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 text-[#6b7280] text-lg leading-relaxed"
          >
            Most engineering-led businesses we meet are stuck in the same trap — talented founders carrying an operating model that was never designed to scale. The symptoms are familiar.
          </motion.p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[28px] bg-white border border-black/5 p-8 lg:p-10 transition-shadow shadow-[0_2px_0_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_-30px_rgba(168,85,247,0.25)]"
            >
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#c084fc]/0 via-transparent to-[#f7b6d2]/0 group-hover:from-[#c084fc]/10 group-hover:to-[#f7b6d2]/10 transition-colors pointer-events-none" />
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#efefea] to-white border border-black/5 flex items-center justify-center">
                  <div className="h-5 w-5 rounded-md bg-gradient-to-br from-[#c084fc] to-[#a855f7]" />
                </div>
                <span className="text-xs font-mono text-[#6b7280]">{c.tag}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl lg:text-[28px] leading-tight tracking-tight">{c.title}</h3>
              <p className="mt-4 text-[#6b7280] leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
