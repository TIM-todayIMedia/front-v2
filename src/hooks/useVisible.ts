import { useEffect, useRef, useState } from "react";

export const useVisible = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current) {
            setVisible(isIntersecting);
          }
        });
      },
      {
        threshold: 1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, visible] as const;
};
