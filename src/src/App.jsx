import { useState, useEffect } from "react";

const theme = {
  marsala: "#8B3A4A",
  marsalaLight: "#B5536A",
  marsalaPale: "#F5E8EB",
  gold: "#C9A84C",
  goldLight: "#E8C96A",
  goldPale: "#FDF8EE",
  cream: "#FAF7F2",
  warmWhite: "#FFFDF9",
  text: "#2C1810",
  textMid: "#6B4C3B",
  textLight: "#9B7B6A",
  border: "#E8DDD5",
};

const styles = {
  page: {
    fontFamily: "'Georgia', 'Palatino Linotype', serif",
    background: theme.cream,
    minHeight: "100vh",
    color: theme.text,
  },
  hero: {
    background: `linear-gradient(160deg, #2C1015 0%, #4A1A22 40%, #3A1508 100%)`,
    padding: "72px 24px 64px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  monogram: {
    fontSize: "56px",
    fontWeight: "700",
    color: theme.gold,
    letterSpacing: "6px",
    marginBottom: "4px",
    position: "relative",
    zIndex: 1,
  },
  brandName: {
    fontSize: "11px",
    letterSpacing: "8px",
    color: theme.gold,
    marginBottom: "2px",
    position: "relative",
    zIndex: 1,
  },
  brandSub: {
    fontSize: "10px",
    letterSpacing: "5px",
    color: "#8B6914",
    marginBottom: "32px",
    position: "relative",
    zIndex: 1,
  },
  divider: {
    width: "80px",
    height: "1px",
    background: `linear-gradient(90deg, transparent, ${theme.gold}, transparent)`,
    margin: "0 auto 28px",
    position: "relative",
    zIndex: 1,
  },
  heroTitle: {
    fontSize: "clamp(26px, 5vw, 38px)",
    fontWeight: "400",
    color: "#FAF7F2",
    margin: "0 0 10px",
    letterSpacing: "1px",
    position: "relative",
    zIndex: 1,
  },
  heroSub: {
    color: "rgba(201,168,76,0.8)",
    fontSize: "14px",
    margin: 0,
    fontStyle: "italic",
    letterSpacing: "0.5px",
    position: "relative",
    zIndex: 1,
  },
};

export default function Assinatura() {
  const [planoAtivo, setPlanoAtivo] = useState("premium");
  const [catAberta, setCatAberta] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const planos = {
    basic: {
      nome: "Basic",
      sessoes: "2 sessões / mês",
      valor: "250",
      economia: "R$ 150 de economia",
      desc: "Ideal para quem está começando sua jornada de bem-estar com constância.",
      destaque: false,
    },
    premium: {
      nome: "Premium",
      sessoes: "4 sessões / mês",
      valor: "450",
      economia: "R$ 350 de economia",
      desc: "Para quem faz do autocuidado uma prioridade real, com resultados progressivos.",
      destaque: true,
      badge: "MAIS ESCOLHIDO",
    },
  };

  const categorias = [
    {
      nome: "Terapêutica",
      icon: "🌿",
      cor: "#5A8A5A",
      corPale: "#F0F7F0",
      servicos: ["Massagem Relaxante", "Pedras Quentes", "Massagem para Gestantes", "Shantala", "Massagem Crânio Facial", "Massagem Podal"],
    },
    {
      nome: "Modeladora",
      icon: "⏳",
      cor: "#8B3A4A",
      corPale: "#FDF0F2",
      servicos: ["Drenagem Linfática", "Massagem Modeladora", "Lipodetox"],
    },
    {
      nome: "Estética Facial",
      icon: "🧖",
      cor: "#8B6914",
      corPale: "#FDF8EE",
      servicos: ["Limpeza de Pele 360º", "Dermaplaning", "Massagem Lifting Asiática"],
    },
  ];

  const passos = [
    { n: "01", t: "Escolha seu plano", d: "Basic ou Premium — pagamento mensal adiantado até o 5º dia útil." },
    { n: "02", t: "Definição do protocolo", d: "As técnicas são escolhidas junto à massoterapeuta Hemily conforme seu objetivo." },
    { n: "03", t: "Agende suas sessões", d: "Horário fixo ou flexível por semana — combinamos no início do mês." },
    { n: "04", t: "Evolua com constância", d: "Sessões mensais com acompanhamento personalizado e resultados progressivos." },
  ];

  return (
    <div style={styles.page}>

      {/* Hero */}
      <div style={{
        ...styles.hero,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-20px)",
        transition: "all 0.8s ease",
      }}>
        <div style={styles.heroOverlay} />
        <div style={styles.monogram}>HM</div>
        <div style={styles.brandName}>HEMILY MENESES</div>
        <div style={styles.brandSub}>ESPAÇO WELLNESS</div>
        <div style={styles.divider} />
        <h1 style={styles.heroTitle}>Assinatura Wellness</h1>
        <p style={styles.heroSub}>Protocolos Personalizados</p>
      </div>

      {/* Intro strip */}
      <div style={{
        background: theme.goldPale,
        borderTop: `3px solid ${theme.gold}`,
        borderBottom: `1px solid ${theme.border}`,
        padding: "28px 24px",
        textAlign: "center",
      }}>
        <p style={{
          maxWidth: "600px",
          margin: "0 auto",
          fontSize: "16px",
          lineHeight: "1.9",
          color: theme.textMid,
          fontStyle: "italic",
        }}>
          Escolha entre <strong style={{ color: theme.marsala, fontStyle: "normal" }}>2 ou 4 sessões por mês</strong> — o protocolo é definido junto à massoterapeuta Hemily Meneses, conforme sua necessidade e objetivo.
        </p>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "52px 20px 60px" }}>

        {/* Planos */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "5px", color: theme.gold, textTransform: "uppercase", marginBottom: "8px" }}>Escolha seu plano</div>
          <div style={{ width: "40px", height: "2px", background: theme.gold, margin: "0 auto" }} />
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
          {Object.entries(planos).map(([key, plano], i) => (
            <div
              key={key}
              onClick={() => setPlanoAtivo(key)}
              style={{
                flex: "1",
                minWidth: "220px",
                border: planoAtivo === key
                  ? `2px solid ${theme.marsala}`
                  : `1px solid ${theme.border}`,
                borderRadius: "8px",
                padding: "32px 28px",
                cursor: "pointer",
                background: planoAtivo === key ? theme.warmWhite : "#FFFFFF",
                transition: "all 0.25s ease",
                position: "relative",
                boxShadow: planoAtivo === key
                  ? "0 8px 32px rgba(139,58,74,0.12)"
                  : "0 2px 8px rgba(0,0,0,0.04)",
                textAlign: "center",
              }}
            >
              {plano.badge && (
                <div style={{
                  position: "absolute",
                  top: "-13px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: `linear-gradient(135deg, ${theme.marsala}, ${theme.marsalaLight})`,
                  color: "#fff",
                  fontSize: "9px",
                  fontWeight: "700",
                  padding: "4px 18px",
                  borderRadius: "20px",
                  letterSpacing: "2px",
                  whiteSpace: "nowrap",
                  fontFamily: "Georgia, serif",
                }}>
                  {plano.badge}
                </div>
              )}

              <div style={{
                fontSize: "13px",
                letterSpacing: "3px",
                color: planoAtivo === key ? theme.marsala : theme.textLight,
                marginBottom: "6px",
                textTransform: "uppercase",
                transition: "color 0.25s",
              }}>
                {plano.nome}
              </div>

              <div style={{ fontSize: "12px", color: theme.textLight, marginBottom: "20px" }}>
                {plano.sessoes}
              </div>

              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "13px", color: theme.textLight, verticalAlign: "top", marginTop: "8px", display: "inline-block" }}>R$</span>
                <span style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: planoAtivo === key ? theme.marsala : theme.text,
                  lineHeight: "1",
                  transition: "color 0.25s",
                }}>
                  {plano.valor}
                </span>
                <span style={{ fontSize: "13px", color: theme.textLight }}>/mês</span>
              </div>

              <div style={{
                fontSize: "12px",
                color: theme.marsala,
                background: theme.marsalaPale,
                padding: "5px 14px",
                borderRadius: "20px",
                display: "inline-block",
                marginBottom: "16px",
                border: `1px solid rgba(139,58,74,0.15)`,
              }}>
                {plano.economia}
              </div>

              <p style={{ fontSize: "13px", color: theme.textMid, lineHeight: "1.6", margin: "0 0 14px" }}>
                {plano.desc}
              </p>
              <div style={{
                fontSize: "11px",
                color: theme.gold,
                borderTop: `1px solid ${theme.border}`,
                paddingTop: "12px",
                fontStyle: "italic",
              }}>
                🌿 Escalda Pés incluso em todas as sessões
              </div>
            </div>
          ))}
        </div>

        {/* Comparativo */}
        <div style={{
          background: "#FFF9F0",
          border: `1px solid rgba(201,168,76,0.3)`,
          borderLeft: `4px solid ${theme.gold}`,
          borderRadius: "0 8px 8px 0",
          padding: "16px 24px",
          marginBottom: "52px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          <div style={{ fontSize: "13px", color: theme.textLight }}>
            {planoAtivo === "premium" ? "4" : "2"} sessões avulsas:{" "}
            <span style={{ textDecoration: "line-through", color: theme.textLight }}>
              R$ {planoAtivo === "premium" ? "800" : "400"},00
            </span>
          </div>
          <div style={{ color: theme.gold, fontSize: "16px" }}>→</div>
          <div style={{ fontSize: "15px", fontWeight: "700", color: theme.marsala }}>
            Assinatura {planoAtivo === "premium" ? "Premium" : "Basic"}: R$ {planoAtivo === "premium" ? "450" : "250"},00
          </div>
          <div style={{
            fontSize: "12px",
            background: theme.marsalaPale,
            color: theme.marsala,
            padding: "3px 12px",
            borderRadius: "20px",
            fontWeight: "700",
          }}>
            Você economiza R$ {planoAtivo === "premium" ? "350" : "150"}
          </div>
        </div>

        {/* Técnicas */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "5px", color: theme.gold, textTransform: "uppercase", marginBottom: "8px" }}>Técnicas disponíveis</div>
          <div style={{ width: "40px", height: "2px", background: theme.gold, margin: "0 auto 12px" }} />
          <p style={{ fontSize: "13px", color: theme.textLight, margin: 0, fontStyle: "italic" }}>
            Clique em cada categoria para ver as opções
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "52px" }}>
          {categorias.map((cat, i) => (
            <div key={i} style={{
              border: catAberta === i ? `1px solid ${cat.cor}` : `1px solid ${theme.border}`,
              borderRadius: "8px",
              overflow: "hidden",
              transition: "border-color 0.25s",
              background: "#fff",
              boxShadow: catAberta === i ? `0 4px 16px rgba(0,0,0,0.06)` : "none",
            }}>
              <div
                onClick={() => setCatAberta(catAberta === i ? null : i)}
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  background: catAberta === i ? cat.corPale : "#fff",
                  transition: "background 0.25s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "18px" }}>{cat.icon}</span>
                  <span style={{
                    fontSize: "13px",
                    letterSpacing: "2px",
                    color: catAberta === i ? cat.cor : theme.textMid,
                    textTransform: "uppercase",
                    fontWeight: "700",
                    transition: "color 0.25s",
                  }}>
                    {cat.nome}
                  </span>
                  <span style={{
                    fontSize: "11px",
                    color: theme.textLight,
                    background: theme.border,
                    padding: "2px 8px",
                    borderRadius: "20px",
                  }}>
                    {cat.servicos.length} técnicas
                  </span>
                </div>
                <span style={{
                  color: cat.cor,
                  fontSize: "18px",
                  transition: "transform 0.3s",
                  transform: catAberta === i ? "rotate(180deg)" : "rotate(0deg)",
                  display: "inline-block",
                }}>
                  ▾
                </span>
              </div>

              {catAberta === i && (
                <div style={{
                  padding: "16px 20px 20px",
                  borderTop: `1px solid ${theme.border}`,
                  background: cat.corPale,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}>
                  {cat.servicos.map((s, j) => (
                    <span key={j} style={{
                      background: "#fff",
                      border: `1px solid ${theme.border}`,
                      borderRadius: "4px",
                      padding: "6px 14px",
                      fontSize: "13px",
                      color: theme.textMid,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Como funciona */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "5px", color: theme.gold, textTransform: "uppercase", marginBottom: "8px" }}>Como funciona</div>
          <div style={{ width: "40px", height: "2px", background: theme.gold, margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "52px" }}>
          {passos.map((p, i) => (
            <div key={i} style={{
              background: "#fff",
              border: `1px solid ${theme.border}`,
              borderRadius: "8px",
              padding: "24px 20px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: `2px solid ${theme.gold}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                color: theme.gold,
                margin: "0 auto 16px",
                letterSpacing: "1px",
                fontWeight: "700",
              }}>
                {p.n}
              </div>
              <div style={{ fontSize: "13px", fontWeight: "700", color: theme.text, marginBottom: "8px" }}>{p.t}</div>
              <div style={{ fontSize: "12px", color: theme.textLight, lineHeight: "1.6" }}>{p.d}</div>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div style={{
          display: "flex",
          gap: "16px",
          marginBottom: "52px",
          flexWrap: "wrap",
        }}>
          {[
            { icon: "📅", t: "Pagamento mensal", d: "Até o 5º dia útil de cada mês" },
            { icon: "🚫", t: "Sessões não acumulam", d: "Válidas apenas no mês de referência" },
            { icon: "📲", t: "Cancelamento", d: "30 dias de antecedência via WhatsApp" },
          ].map((info, i) => (
            <div key={i} style={{
              flex: "1",
              minWidth: "160px",
              background: theme.goldPale,
              border: `1px solid rgba(201,168,76,0.2)`,
              borderRadius: "8px",
              padding: "20px 16px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>{info.icon}</div>
              <div style={{ fontSize: "12px", fontWeight: "700", color: theme.text, marginBottom: "4px" }}>{info.t}</div>
              <div style={{ fontSize: "11px", color: theme.textLight }}>{info.d}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: "center",
          padding: "48px 24px",
          background: `linear-gradient(135deg, #2C1015 0%, #4A1A22 100%)`,
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "22px", color: "#FAF7F2", marginBottom: "8px", fontWeight: "400" }}>
              Pronta para começar?
            </div>
            <div style={{ fontSize: "14px", color: "rgba(201,168,76,0.7)", marginBottom: "32px", fontStyle: "italic" }}>
              Vagas limitadas · Atendimento exclusivo com hora marcada
            </div>
            <div style={{
              display: "inline-block",
              background: `linear-gradient(135deg, #8B6914, ${theme.gold})`,
              color: "#1a0a0d",
              padding: "16px 48px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "2px",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
            }}>
              AGENDAR PELO WHATSAPP
            </div>
            <div style={{ marginTop: "20px", fontSize: "16px", color: theme.gold }}>(21) 99043-2805</div>
            <div style={{ marginTop: "6px", fontSize: "12px", color: "rgba(201,168,76,0.5)" }}>
              Shopping Comary, Sala 245/258 · Alto, Teresópolis - RJ
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div style={{ textAlign: "center", marginTop: "40px", paddingTop: "24px", borderTop: `1px solid ${theme.border}` }}>
          <div style={{ fontSize: "11px", color: theme.textLight, letterSpacing: "0.5px", lineHeight: "1.8" }}>
            Hemily Meneses · 1ª Perita Judicial em Massoterapia e Estética do Estado do RJ · CNPB<br />
            CNPJ: 66.194.149/0001-67
          </div>
        </div>

      </div>
    </div>
  );
}
