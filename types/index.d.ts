type BinBraille = {
  text: string;
  encoding: number;
}

declare function parserTextToBinBraille(text :String, encoding: Number): BinBraille;

export {
  parserTextToBinBraille
};