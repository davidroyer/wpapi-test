import { logAxios } from "@wpapi-js/wp-client";

export function cli() {
  logAxios();
  return Promise.resolve(true);
}
