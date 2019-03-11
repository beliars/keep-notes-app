export default (value: string): string | undefined => (
  value && !/^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/i.test(value)
    ? 'Invalid email address'
    : undefined
);