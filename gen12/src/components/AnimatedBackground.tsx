export function AnimatedBackground() {
  return (
    <>
      {/* Ambient radial glows */}
      <div
        className="fixed -top-[20%] -left-[20%] w-screen h-screen pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at center, rgba(30,80,180,0.10) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="fixed top-[20%] -right-[30%] w-screen h-screen pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at center, rgba(212,175,55,0.06) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
    </>
  );
}
