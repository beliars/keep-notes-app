export default (value: string): string | undefined => (
  value && !/^(?=.*[A-Z])(?=.*[~!@#$%^&*()=+{}|:;,.<>?_-]).+$/.test(value)
    ? 'Password has to contain capital letter and special symbol'
    : undefined
);