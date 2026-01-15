import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
