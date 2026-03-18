export function generateLocalPass(data) {

  if (
    !data ||
    typeof data !== "object" ||
    typeof data.name !== "string" ||
    data.name.trim() === "" ||
    typeof data.from !== "string" ||
    typeof data.to !== "string" ||
    typeof data.classType !== "string"
  ) {
    return "INVALID PASS";
  }


  const name = data.name.trim().toUpperCase();
  const from = data.from.trim().toLowerCase();
  const to = data.to.trim().toLowerCase();
  const classType = data.classType.trim().toLowerCase();


  if (classType !== "first" && classType !== "second") {
    return "INVALID PASS";
  }


  const toTitleCase = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const fromFormatted = toTitleCase(from);
  const toFormatted = toTitleCase(to);


  const classFormatted = classType.toUpperCase();


  const passID =
    classFormatted.charAt(0) +
    from.slice(0, 3).toUpperCase() +
    to.slice(0, 3).toUpperCase();


  return `MUMBAI LOCAL PASS
---
Name: ${name}
From: ${fromFormatted}
To: ${toFormatted}
Class: ${classFormatted}
Pass ID: ${passID}`;
}