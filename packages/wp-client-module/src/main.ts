import { logAxios } from "@wpapi-js/wp-client";

export function cli() {
  logAxios();
  console.log('FROM WP-CLIENT-MODULE!')
  return Promise.resolve(true);
}
