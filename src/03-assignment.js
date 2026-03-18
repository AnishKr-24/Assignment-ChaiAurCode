export function fixBollywoodTitle(title) {
    if (typeof title !== "string") return "";

    title = title.trim().replace(/\s+/g, " ");
    if (title === "") return "";


    const smallWords = ["ka", "ki", "ke", "of", "the", "a", "an", "in"];

    const words = title.toLowerCase().split(" ");

    const result = words.map((word, index) => {
   
        if (index === 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }

        if (smallWords.includes(word)) {
            return word;
        }

 
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return result.join(" ");
}