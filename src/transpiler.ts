import { tagMapping, attributeMapping } from './slangDictionary';

export function transpileCode(input: string): string {
  let output = input;

  // 1. Replace Tags
  // We iterate through the map and replace <key and </key
  // We sort keys by length descending to avoid partial matches if any keys are substrings of others
  const sortedTags = Object.keys(tagMapping).sort((a, b) => b.length - a.length);

  sortedTags.forEach((slangTag) => {
    const htmlTag = tagMapping[slangTag];
    
    // Replace opening tags: <slangTag> or <slangTag ...>
    // Regex explanation:
    // < : literal <
    // (${slangTag}) : the slang tag
    // (\s|>) : followed by whitespace or closing bracket
    // We use a function replacement to preserve the whitespace/bracket
    const openTagRegex = new RegExp(`<(${slangTag})(\\s|>)`, 'gi');
    output = output.replace(openTagRegex, (match, p1, p2) => {
      return `<${htmlTag}${p2}`;
    });

    // Replace closing tags: </slangTag>
    const closeTagRegex = new RegExp(`<\/(${slangTag})>`, 'gi');
    output = output.replace(closeTagRegex, `</${htmlTag}>`);
  });

  // 2. Replace Attributes
  // We look for attribute patterns like slang="value"
  const sortedAttributes = Object.keys(attributeMapping).sort((a, b) => b.length - a.length);

  sortedAttributes.forEach((slangAttr) => {
    const htmlAttr = attributeMapping[slangAttr];
    
    // Regex explanation:
    // (\s) : preceding whitespace
    // (${slangAttr}) : the slang attribute
    // (=) : equals sign
    const attrRegex = new RegExp(`(\\s)(${slangAttr})(=)`, 'gi');
    output = output.replace(attrRegex, (match, p1, p2, p3) => {
      return `${p1}${htmlAttr}${p3}`;
    });
  });

  return output;
}
