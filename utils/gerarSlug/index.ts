export default function gerarSlug(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')      // evita hífens duplicados
    .replace(/^-+|-+$/g, '')  // remove hífen no começo/fim
    .toLowerCase()
}