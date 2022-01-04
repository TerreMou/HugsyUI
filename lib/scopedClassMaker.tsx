const scopedClassMaker = (prefix: string) => {
  return (className?: string) => {
    return [prefix, className].filter(Boolean).join('-');
  };
};
export {scopedClassMaker}