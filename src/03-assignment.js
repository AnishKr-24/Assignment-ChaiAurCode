export function fixBollywoodTitle(title) {

    // validation
    if (typeof title !== "string") return "";

    // trim and normalize spaces
    title = title.trim().replace(/\s+/g, " ");

    if (title === "") return "";

    const smallWords = ["ka", "ki", "ke", "the", "a", "an", "of", "in"];

    const words = title.toLowerCase().split(" ");

    const fixed = words.map((word, index) => {

        if (index !== 0 && smallWords.includes(word)) {
            return word;
        }

        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return fixed.join(" ");
}