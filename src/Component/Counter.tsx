import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({
  from,
  to,
  duration,
  today,
}: {
  from: number;
  to: number;
  duration: number;
  today: boolean;
}) {
  const ref = useRef() as React.MutableRefObject<any>;

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      onUpdate(value) {
        if (today) {
          ref.current.textContent = `+ ${
            Number(value.toFixed(0)).toLocaleString() || 0
          }`;
        } else {
          ref.current.textContent =
            Number(value.toFixed(0)).toLocaleString() || 0;
        }
      },
    });
    return () => controls.stop();
  }, [from, to, today, duration]);

  return <p style={{ margin: 0 }} ref={ref} />;
}
