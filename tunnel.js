import localtunnel from "localtunnel";

(async () => {
  const tunnel = await localtunnel({
    port: 5173,
    subdomain: "nishithini-app",
  });

  // the assigned public url for your tunnel
  console.log({ url: tunnel.url });

  tunnel.on("close", () => {
    // tunnels are closed
  });
})();
