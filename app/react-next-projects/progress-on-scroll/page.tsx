"use client";

function ProgressScroll() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressBar: HTMLElement | null =
        document.getElementById("scroll-progress");
      if (progressBar) {
        const progress: number = (scrolled / scrollableHeight) * 100;
        progressBar.style.width = progress + "%";
      }
    });
  }

  return (
    <div>
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 z-50 h-2 bg-red-400"
      ></div>
      <div className="h-[200vh] border border-white"></div>
    </div>
  );
}
export default ProgressScroll;
