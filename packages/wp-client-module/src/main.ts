import WpClient, { logAxios } from "@wpapi/wp-client";
const url = "https://demo1.wpapi.app";

async function initialize() {
  const wp = new WpClient({
    url
  });
  wp.createRoutes(await wp.postTypes());
  console.log(wp);
}
initialize();

export function cli() {
  console.log("FROM WP-CLIENT-MODULE2!");
  logAxios();
}
