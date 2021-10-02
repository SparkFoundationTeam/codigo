function encoder(string, offset) {
  string = string.toLowerCase();

  let ALPHABET_COUNT = 26;
  offset = offset <= ALPHABET_COUNT ? offset : offset % ALPHABET_COUNT;

  let encrypted_string = [];

  for (let index in string) {
    let new_character = get_encoded_character(index, string, offset);
    encrypted_string.push(new_character);
  }
  return encrypted_string.join("");
}
function get_encoded_character(index, string, offset) {
  if (string[index] == " ") return " ";

  let LOWEST_ASCCI_CHARACTER = 96,
    HIGHEST_ASCCI_CHARACTER = 122;

  let asciii_value = parseInt(string.charCodeAt(index)) + offset;

  asciii_value = asciii_value <= HIGHEST_ASCCI_CHARACTER ? asciii_value : LOWEST_ASCCI_CHARACTER + (asciii_value - HIGHEST_ASCCI_CHARACTER);

  return String.fromCharCode(asciii_value);
}

const getEncryptedString = str => encoder(str, 5);

export default getEncryptedString;
