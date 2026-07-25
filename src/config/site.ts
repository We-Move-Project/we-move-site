export const SITE_NAME = "We Move";

export const SITE_TAGLINE = "Feito por estudantes, para estudantes";

// Oculto por padrão: ainda não temos nenhum caso de cliente real do We Move.
// Definir PUBLIC_SHOW_CASES=true no .env para reativar (ex: demonstração interna
// aos colaboradores) até existir conteúdo real de depoimentos/cases.
export const SHOW_CASES = import.meta.env.PUBLIC_SHOW_CASES === "true";

export const API_URL = import.meta.env.PUBLIC_API_URL ?? "http://localhost/api";

export const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? "";

export const WHATSAPP_MESSAGE = "Olá! Vim pelo site do We Move e quero saber mais.";

export const WHATSAPP_LINK = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "";

export const CONTACT_EMAIL = "contato@wemove.com.br";

// GitHub Pages project site is served under a subpath (/we-move-site/), so every
// root-relative link and public/ asset URL must be prefixed with BASE_URL.
export const BASE_URL = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  return `${BASE_URL}${path.replace(/^\//, "")}`;
}

export const NAV_LINKS = [
  { href: withBase("/"), label: "Início" },
  { href: withBase("/como-funciona"), label: "Como funciona" },
  { href: withBase("/para-quem-e"), label: "Para quem é" },
  { href: withBase("/sobre-nos"), label: "Sobre nós" },
  ...(SHOW_CASES ? [{ href: withBase("/cases"), label: "Cases" }] : []),
  { href: withBase("/contato"), label: "Contato" },
];
