import { logAxios } from "@wpapi-js/wp-client";

export function cli() {
  logAxios();
  console.log('NEWW2!')
  return Promise.resolve(true);
}
