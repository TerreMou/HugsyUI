interface ClassToggle {
  [k: string]: boolean;
}

interface Options {
  extra: string | undefined;
}

const scopedClassMaker = (prefix: string) =>
  (name: string | ClassToggle, options?: Options) =>
    Object
      .entries(name instanceof Object ? name : {[name]: name})
      .filter(kv => kv[1] !== false)
      .map(kv => kv[0])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra || [])
      .join(' ');

function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export {scopedClassMaker, classes};