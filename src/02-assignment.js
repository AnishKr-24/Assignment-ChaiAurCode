export function formatChaiMenu(menu) {

  // validation
  if (!Array.isArray(menu) || menu.length === 0) {
    return "";
  }

  const result = menu
    .filter(item =>
      item &&
      typeof item.name === "string" &&
      item.name.trim() !== "" &&
      typeof item.price === "number" &&
      item.price > 0
    )
    .map(item => {
      const name = item.name.toUpperCase();
      return `${name} - Rs.${item.price}`;
    });

  return result.join(" | ");
}