export default function LoadingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-dark text-blue">
      <div className="space-y-6 text-center">
        <p className="font-canela text-6xl text-blue">SRITEK</p>
        <div className="mx-auto h-1 w-64 rounded-full bg-[#99daff]/20">
          <div className="h-full w-0 animate-[loading_0.6s_ease-in-out_forward] rounded-full bg-blue" />
        </div>
      </div>
    </main>
  );
}
