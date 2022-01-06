const scopedClassMaker = (prefix: string) => {
  return (className?: string) => {
    return [prefix, className].filter(Boolean).join('-');
  };
};

function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export {scopedClassMaker, classes};