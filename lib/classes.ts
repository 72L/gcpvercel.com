export const classes = (...classNames: (string | undefined | boolean)[]) =>
  classNames.filter((c) => !!c).join(' ');
