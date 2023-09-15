export default function ThrowError() {
  // a = 1 / 0;
  // throw new Response("Not Found", { status: 404 });
  throw new Error("Intentionally thrown error");
  return <div>ThrowError</div>;
}
