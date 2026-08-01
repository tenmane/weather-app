export async function getIcon(icon) {
  const module = await import(`./icons/${icon}.svg`);
  return module.default;
}
