import WpClient, { logAxios } from "@wpapi/wp-client";
const wpSiteUrl = "https://demo1.wpapi.app";

async function initialize() {
  const wp = new WpClient({
    wpSiteUrl
  });
  wp._createCustomPostRoutes(await wp.postTypes());
  console.log(wp);
}
initialize();

export function cli() {
  console.log("FROM WP-CLIENT-MODULE2!");
  logAxios();
}
