export const SITE_NAME = "We Move";

export const SITE_TAGLINE = "Feito por estudantes, para estudantes";

// Visível por padrão para demonstração interna aos colaboradores.
// Definir PUBLIC_SHOW_CASES=false no .env de produção antes do lançamento real,
// já que ainda não existe conteúdo real de depoimentos/cases.
export const SHOW_CASES = import.meta.env.PUBLIC_SHOW_CASES !== "false";

export const API_URL = import.meta.env.PUBLIC_API_URL ?? "http://localhost/api";

export const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? "";

export const WHATSAPP_MESSAGE = "Olá! Vim pelo site do We Move e quero saber mais.";

export const WHATSAPP_LINK = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "";

export const CONTACT_EMAIL = "contato@wemove.com.br";

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/para-quem-e", label: "Para quem é" },
  { href: "/sobre-nos", label: "Sobre nós" },
  ...(SHOW_CASES ? [{ href: "/cases", label: "Cases" }] : []),
  { href: "/contato", label: "Contato" },
];
