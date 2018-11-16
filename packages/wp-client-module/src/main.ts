import { logAxios } from "@wpapi-js/wp-client";

export function cli() {
  logAxios();
  console.log('NEWW!')
  return Promise.resolve(true);
}
