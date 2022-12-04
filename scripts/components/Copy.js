export default class Copy {
  constructor(selector) {
    this.selector = selector;
  }

  text() {
    const arrayChildren = Array.from(this.selector.children);
    
    const arrayText = arrayChildren.map(e => e.textContent);

    const content = arrayText.reduce((a, b) => a + `\n${b}`);

    navigator.clipboard.writeText(content);
  }
}