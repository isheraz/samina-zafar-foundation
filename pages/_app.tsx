import '../styles/global.css';

const SaminaZafar: React.FC<any> = ({ Component, pageProps, context }) => {
  return <Component context={context} {...pageProps} />
}

export default SaminaZafar;