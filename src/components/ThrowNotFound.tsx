export default function ThrowNotFound() {
  throw new Response("", { status: 404, statusText: "Page not found" });
  return <div>ThrowNotFound</div>;
}
