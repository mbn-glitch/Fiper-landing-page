import { motion } from "framer-motion";

/** The package reveal: content fades 26 px → 0 over 800 ms on first view only, brand easing, no repeat, no bounce. */
export const BRAND_EASE = [0.2, 0.7, 0.2, 1];

export default function Reveal({ children, className = "", delay = 0, as = "div", ...rest }) {
  const M = motion[as] || motion.div;
  return (
    <M
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, ease: BRAND_EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </M>
  );
}
