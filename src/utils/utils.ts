
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function Decorator() {
  return (proto, prop) => {
    proto.componentWillLoad = function() {
      console.log('willload', prop);
    }
    proto.componentDidLoad = function() {
      console.log('didload', prop);
    }
    proto.componentDidUpdate = function() {
      console.log('didupdate', prop);
    }
    proto.componentDidUnload = function() {
      console.log('didunload', prop);
    }
  }
}